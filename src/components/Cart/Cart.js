import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import './cart.styles.css';
import CartCard from "../CartCard/CartCard";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const Cart = () => {

    const { cart } = useContext(CartContext);

    const finalPrice = cart.length > 0 ? cart.reduce((x, y) => x + y.purchasePrice, 0) : false;

    const [check, setCheck] = useState(false);

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
      .then(res => alert('Felicidades por tu compra'))
      .catch(err=> {
        alert('Lo sentimos, tu compra no se ha podido efectuar correctamente');
        console.log(err)
      });
    };

    const handleChange = (e) => {
      setOrder({
        ...order,
        buyer: {
          ...order.buyer,
          [e.target.name]: e.target.value
        }
      })
    };

    const checkCart = (e) => {
      e.target.checked
      && setOrder({
        ...order,
        items: cart,
        total: finalPrice,
        date: new Date()
      })

      setCheck((current) => (!current));
    };

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
            setCheck={setCheck} />
            )
        })
        }

        <article className='cartCheckout'>
            <p onClick={createOrder}>Precio final: {finalPrice}</p>
        </article>

        <input type="text" name="name" value={order.buyer.name} onChange={handleChange} />
        <input type="text" name="tel" value={order.buyer.tel} onChange={handleChange} />
        <input type="text" name="email" value={order.buyer.email} onChange={handleChange} />
        <input type='checkbox' checked={check} onChange={checkCart} />
    </>
  )
}

export default Cart;