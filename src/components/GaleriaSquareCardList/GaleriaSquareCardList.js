import GaleriaSquareCard from "../GaleriaSquareCard/GaleriaSquareCard";


const GaleriaSquareCardList = ({products}) => {
  return (
    <>{
        products.map((product) => (
            <GaleriaSquareCard
            key={product.id}
            img={product.img.imgCuadrada}/>
        ))
    }
    </>
  )
};

export default GaleriaSquareCardList;