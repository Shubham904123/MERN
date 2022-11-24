import { useState } from "react";

function Product(){
    const [Product, setProduct] = useState([])
    const getproduct=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data);



        });
    // const dispatch=useDispatch()

    }
    return(
    //     <div>
    //         {/* <Link to={'/ProductBasket'}>Basket{CartProduct.cardDetail.length}</Link> */}
    //     <div className="main_card">
    //         { Product.map((item)=>(
    //             <div className="cards_wrap">
    //                 <div className="card_item">
    //                     <div className="card_inner">
    //                         <h5>{item.category}</h5>
    //                         <img src={item.image} height="200px"/>
    //                         <div className="name">{item.price}<span>{item.rating.rate}</span></div>
    //                         <div className="desc">{item.description}</div>
    //                         <button >add to cart</button>

    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    <h1>hello world</h1>
    )}
    export default Product