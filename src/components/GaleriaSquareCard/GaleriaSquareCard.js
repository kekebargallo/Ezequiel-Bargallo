import './GaleriaSquareCard.styles.css';

const GaleriaSquareCard = ({img}) => {
    console.log(img);
  return (
    <div className="galeriaSquareCard">
        <img src={img}/>
    </div>
  )
};

export default GaleriaSquareCard;