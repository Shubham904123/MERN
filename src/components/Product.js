import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Product() {

  const cartProduct = useSelector(state => state.chatReducer)
  console.log(cartProduct)


  const [product, setProduct] = useState([]);
  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        setProduct(data);
      });
  };

  useEffect(() =>{
    getProduct();
  }, [])

 const dispatch = useDispatch()
 const addToCart= (e) => {
     console.log(e)

    dispatch({
      type: "ADD_QUESTION",
      payload: e 
    })

  }
  return (
    <div>
      <div className="col-lg-12 dv">
        {product.map((item) => (
          <>
            <div className="col-lg-3 dv1">
              <h4>Category :<span> {item.category}</span></h4>
              <img src={item.image} height="200" />
              <h4> Price: {item.price} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               Rating: {item.rating.rate}
               </h4>
              <h4>Description {item.description}</h4>
              <button onClick={()=>  addToCart(item)}>Add to cart</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Product;

{
  /* <link to ={'/ProductBasket'}>Basket{cartProduct.cardDetail.length}</link>
      <div className="main -card">
        {Product.map((item) => (
          <div className="cards-wrap">
            <div className="card_item">
              <div className="card_inner">
                <h5>{item.category}</h5>
                <img src={item.image} height="200" />
                <div className="name">
                  {item.price}
                  <span>{item.rating.rate}</span>
                </div>
                <div className="desc">{item.description}</div>
                <button onClick={() => addProductIntoBasket(item)}>{CartProduct.carDetail.find (BasketProduct => BasketProduct.id === item.id) ? 'Remove from basket' : 'Add to cart'}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <></> */
}
