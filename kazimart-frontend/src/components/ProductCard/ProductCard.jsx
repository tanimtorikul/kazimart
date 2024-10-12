const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
