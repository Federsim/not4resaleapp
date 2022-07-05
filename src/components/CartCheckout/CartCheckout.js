import "./CartCheckout.css";
import { db } from "../../services/firebase/index";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import CartCheckoutItem from "../CartCheckoutItem/CartCheckoutItem";
import { useNotification } from "../Notification/Notification";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { useForm } from "react-hook-form";


const CartCheckout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, totalPurchase, totalQuantity, clearCart } = useContext(CartContext);

  const setNotification = useNotification();

  /* Form States */
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiration, setExpiration] = useState('')
  const [cvv, setCvv] = useState('')


/* Form Validation */
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

/* Date */
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  /* email confirmaiton */
  const handleCreateOrder = () => {
    if (totalQuantity === 0) {
          setNotification("error", "El carrito esta vacio, debes agregar productos para crear la orden")
        } else {

          
    setLoading(true)
    const objOrder = {
      buyer: {
        firstName: firstName,
        lastName:lastName,
        email:email,
        address:address,
        phone:phone,
        country:country,
        state:state,
        zipCode:zipCode,
        cardName:cardName,
        cardNumber:cardNumber,
        expiration:expiration,
        cvv:cvv,
      },
      items: cart,
      total: totalPurchase,
      date: date,
    };



    const batch = writeBatch(db);

    const ids = cart.map((prod) => prod.id);

    const outOfStock = [];

    const collectionRef = collection(db, "products");

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();

          const prod = cart.find((prod) => prod.id === doc.id);
          const prodQuantity = prod.quantity;

          if (dataDoc.stock >= prodQuantity) {
            batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (outOfStock.length === 0) {
          const collectionRef = collection(db, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({ type: "out_of_stock", products: outOfStock });
        }
      })
      .then(({ id }) => {
        batch.commit();
        clearCart();
        setNotification(
          "success",
          `Su orden se genero correctamente. El id de su orden es: ${id}`,
        5,
        );
      })
      .catch((error) => {
        if (error.type === "out_of_stock") {
          setNotification("error", "Hay productos que no tienen stock");
        }else {
          console.log(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };}
  if (loading) {
    return (
      <div>
        <h1>Se esta generando su orden...</h1>
        <div id="loader"></div>
      </div>
    );
  }

  

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h1>Checkout</h1>
        <h2 className="lead">Finaliza tu compra</h2>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3 sticky-top">
            {totalQuantity > 0 ? (
              cart.map((p) => <CartCheckoutItem key={p.id} {...p} />)
            ) : (
              <div>
                <small className="text-muted">Your cart is empty</small>
              </div>
            )}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total</strong>
              <strong>${totalPurchase}</strong>
            </li>
          </ul>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate="" onSubmit={handleSubmit(handleCreateOrder)}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  onChange={({ target }) => setFirstName(target.value)}
                  placeholder=""
                  required=""
                  {...register("firstName", {
                    onChange: ({ target }) => setFirstName(target.value),
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                    }})}
                />
                {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required=""
                  {...register("lastName", {
                    onChange:({ target }) => setLastName(target.value),
                    required: {
                      value: true,
                      message: "Campo obligatorio"
                    }})}
                />
                {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                {...register("email", {
                  onChange:({ target }) => setEmail(target.value),
                  required: {
                    value: true,
                    message: "Campo obligatorio"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto"
                  }
                })}
              />
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="emailConfirmation">Confirm Email</label>
              <input
                type="email"
                className="form-control"
                id="emailConfirmation"
                placeholder="you@example.com"
                {...register("emailConfirmation", {
                  required: true,
                  validate: value => value === watch('email') || "Email does not match" ,
                })}
                />
              {errors.emailConfirmation && <span className="text-danger">{errors.emailConfirmation.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="Phone">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                {...register("phone", {
                  onChange:({ target }) => setPhone(target.value),
                  required: {
                    value: true,
                    message: "Campo obligatorio"
                  }
                })}
              />
              {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="address">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="address"
                
                placeholder="calle falsa 1234"
                required=""
                {...register("address", {
                  onChange:({ target }) => setAddress(target.value),
                  required: {
                    value: true,
                    message: "Campo obligatorio"
                  }})}
              />
              {errors.address && <span className="text-danger">{errors.address.message}</span>}
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Pais</label>
                <select
                  className="custom-select d-block w-100"
                  id="country"
                  required=""
                  onChange={({ target }) => setCountry(target.value)}
                >
                  <option value="">Choose...</option>
                  <option>Argentina</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">Provincia</label>
                <select
                  className="custom-select d-block w-100"
                  id="state"
                  required=""
                  onChange={({ target }) => setState(target.value)}
                >
                  <option value="">Choose...</option>
                  <option>Buenos Aires</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  onChange={({ target }) => setZipCode(target.value)}
                  placeholder=""
                  required=""
                />
              </div>
            </div>

            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required=""
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required=""
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  onChange={({ target }) => setCardName(target.value)}
                  placeholder=""
                  required=""
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input
                  type="number"
                  className="form-control"
                  id="cc-number"
                  onChange={({ target }) => setCardNumber(target.value)}
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  onChange={({ target }) => setExpiration(target.value)}
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  onChange={({ target }) => setCvv(target.value)}
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <hr className="mb-4" />
            <button
              className="btn btn-primary btn-lg btn-block"
              type="submit"
            >
              Create order
            </button>
          </form>
        </div>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2022 Not4resale </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="./">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="./">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="./">Support</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default CartCheckout;
