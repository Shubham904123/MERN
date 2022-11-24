import { HomeIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Basket (){

    const product = useSelector(state => state.chatReducer)
    const dispatch = useDispatch();
    console.log(product)

    const RemoveItem = (id) =>{
        console.log(id)
        dispatch({
            type : "Remove_Item",
            payload:{id}
        })
    }

    return(
        <div>
        <div className="col-lg-12 dv">  
        <Link to="/"><span><DeleteIcon color="primary" /></span></Link>
    

          {product.chatDetail.map((item) => (
            <>
              <div className="col-lg-3 dv1">
                <h4>Category :<span> {item.category}</span></h4>
                <img src={item.image} height="200" />
                <h4> Price: {item.price} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Rating: {item.rating.rate}
                 </h4>
                <h4>Description {item.description}</h4>
                <button onClick={()=>  RemoveItem(item.id)}> Remove from Cart</button>
              </div>
            </>
          ))}
        </div>
      </div>
    );
}

export default Basket