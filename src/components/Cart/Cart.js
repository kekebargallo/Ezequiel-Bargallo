import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import './cart.styles.css';
import CartCard from "../CartCard/CartCard";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import CartForm from "../CartForm/CartForm";

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext);

    const finalPrice = cart.length > 0 ? cart.reduce((x, y) => x + y.purchasePrice, 0) : false;

    const [check, setCheck] = useState(false);

    const [values, setValues] = useState({
      name: '',
      tel: '',
      email: '',
      emailConfirm: ''
    });

    const [checkoutForm, setCheckoutForm] = useState(false);

    const [order, setOrder] = useState({
      buyer: {
        name: '',
        tel: '',
        email: ''
      },
      items: '',
      total: '',
      date: ''
    });

    const db = getFirestore();

    const createOrder = () => {
      const query = collection(db, 'orders');
      addDoc(query, order)
      .then(({ id }) => {
        alert(`Felicidades! El código de su compra es ${id}`)
        clearCart();
      })
      .catch(err=> {
        alert('Lo sentimos, tu compra no se ha podido efectuar correctamente');
        console.log(err)
      });
    };

    const finishPurchase = () => {
      if(checkoutForm){
        check ? createOrder() : alert("Para terminar la compra, verifica el formulario.");
      }else{
        setCheckoutForm(true);
      }
    }

  return (
    <>
        {cart.map(producto => {
            let {id, name, purchasePrice, img: {imgCuadrada}, quantity, stock} = producto;
            return (
            <CartCard
            key={id}
            id={id}
            name={name}
            price={purchasePrice}
            img={imgCuadrada}
            quantity={quantity}
            setCheck={setCheck}
            setCheckoutForm={setCheckoutForm} />
            )
        })
        }

        <article className='cartCheckout'>
            <p>Precio final: {finalPrice}</p>
            <button onClick={finishPurchase}>Terminar Compra</button>
        </article>

        { checkoutForm
          && <CartForm
          setOrder={setOrder}
          order={order}
          setValues={setValues}
          values={values}
          setCheck={setCheck}
          check={check}
          finalPrice={finalPrice}
          cart={cart} />
        }
        
    </>
  )
}

export default Cart;