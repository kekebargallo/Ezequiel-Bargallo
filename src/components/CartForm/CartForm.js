import './cartForm.styles.css'

const CartForm = ({setOrder, order, setValues, values, setCheck, check, finalPrice, cart}) => {

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        const newValues = {...values, [name]: value}
        setValues(newValues);
      };

      const checkCart = (e) => {
        if(values.name === "" || values.email === "" || values.tel === ""){
            setCheck(false);
            alert("Llene el formulario para poder avanzar.")
        }else if(values.emailConfirm !== values.email){
            setCheck(false);
            alert("Verifique el email para poder avanzar.")
        }else{
            e.target.checked
            && setOrder({
                ...order,
                buyer: {
                    name: values.name,
                    tel: values.tel,
                    email: values.email
                },
                items: cart,
                total: finalPrice,
                date: new Date()
            })
    
            setCheck((current) => (!current));
        }
      };

  return (
    <>  <div className="form">
            <div className="formName">
                <label htmlFor="name">Nombre y Apellido:</label>
                <input type="text" name="name" value={values.name} onChange={handleChange} />
            </div>

            <div className="formTel">
                <label htmlFor="tel">Teléfono:</label>
                <input type="text" name="tel" value={values.tel} onChange={handleChange} />
            </div>

            <div className="formEmail">
                <label htmlFor="email">Correo:</label>
                <input type="email" name="email" value={values.email} onChange={handleChange} />
            </div>

            <div className="formEmailConfirm">
                <label htmlFor="emailConfirm">Confirme su correo:</label>
                <input type="email" name="emailConfirm" value={values.emailConfirm} onChange={handleChange}/>
            </div>
            
            <div className="formCheckbox">
                <label htmlFor='checkbox'>Verifique: </label>
                <input name='checkbox' type='checkbox' checked={check} onChange={checkCart} />
            </div>
        </div>
    </>
  )
}

export default CartForm