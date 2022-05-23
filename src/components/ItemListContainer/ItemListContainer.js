const ItemListContainer = (props) => {
const {greeting, intro}  = props
  return  (
  <div>
  <h1>{greeting}</h1>
  <p>{intro}</p>
  </div>
  )
};

export default ItemListContainer;
