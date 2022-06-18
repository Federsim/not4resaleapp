const products = [
  {
    id: "14",
    name: "Remera AntiSocial negra",
    description: "Remera Anti Social social club basica con estampa 'Anti Social Social club' en gris",
    color: "Negro",
    category: "Indumentaria",
    price: 3000,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/753/709/products/0c5f30e0ddbeadb58086e269bab9b2471-4e39b2928beef5a89416311245108561-1024-1024.jpg",
    stock:10,
  },
  {
    id: "15",
    name: "Remera AntiSocial blanca",
    description: "Remera Anti Social social club basica con estampa'Anti Social Social club' en blanco",
    color: "blanco",
    category: "Indumentaria",
    price: 3000,
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/090/276/products/remera-anti-social-social-club-assc-aesthetic-tumblr-edgy-d_nq_np_688761-mla32203914944_092019-f1-824cd933d6a20a41c315888100293773-1024-1024.jpg",
    stock:10,
  },
  {
    id: "24",
    name: "Nike Joran 1 mid",
    description: "Zapatillas nike Jordan 1 mid colo blanco y rojo",
    color: "blanco y rojo",
    category: "Zapatillas",
    price: 34000,
    img: "https://media.restocks.net/products/554724-122/air-jordan-1-mid-gym-red-black-white-1-1000.png",
    stock:10,
  },
  {
    id: "25",
    name: "Nike Joran 1 low",
    description: "Zapatillas nike Jordan 1 low color blanco y gris",
    color: "blanco y gris",
    category: "Zapatillas",
    price: 29000,
    img: "https://m.media-amazon.com/images/I/51pbXeoxqzL._AC_UY395_.jpg",
    stock:10,
  },
  {
    id: "28",
    name: "riñonera Jordan",
    description: "Riñonera jordan negra con logo y nombre impreso",
    color: "Negro",
    category: "Accesorios",
    price: 9000,
    img: "https://images.footlocker.com/is/image/FLEU/319642145181_01?wid=2000&hei=2000&fmt=png-alpha",
    stock:10,
  },

];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.filter((products) => products.category === categoryId));
    }, 200);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((products) => products.id === id));
    }, 2000);
  });
};
