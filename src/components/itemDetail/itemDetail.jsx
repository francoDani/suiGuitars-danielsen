import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemCount } from "../itemCount/itemCount";
import { AddToCartButton } from "../item/addToCartButton";

const ItemDetailSection = styled.div`
  width: 90vw;
  min-height: 70vh;
  padding: 0 1rem 0 1rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ItemImg = styled.div`
  background-image: url(${(props) => props.image});
  width: 40%;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const DescriptionContainer = styled.div`
  width: 30%;
  min-height: 500px;
  border: 1px solid #777777;
  border-radius: 5px;
`;
const ProductName = styled.h1`
  font-size: 1.1rem;
  text-align: left;
  margin: 0.3rem;
  font-weight: 500;
`;
const ConditionStock = styled.p`
  font-size: 0.7rem;
  text-align: left;
  margin: 0.5rem 0 0 0.3rem;
  color: #777777;
`;
const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  padding: 0.3rem;
`;
const ProductDescription = styled.p`
  font-size: 0.8rem;
  padding: 3rem 0.5rem 0.2rem 0.45em;
  text-align: justify;
  margin-bottom: 1rem;
  max-height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ItemDetail = ({ product, productDetail, img }) => {
  const [quantity, setQuantity] = useState(0);  
  const onAdd = (val) => {
    setQuantity(val);
  };
  return (
    <ItemDetailSection>
      <ItemImg image={img} />
      <DescriptionContainer>
        <ConditionStock>
          Estado {product.condition} | Vendidos {product.sold_quantity}
        </ConditionStock>
        <ProductName>{product.title}</ProductName>
        <ProductPrice>$ {product.price}</ProductPrice>
        <ProductDescription>{productDetail}</ProductDescription>

        {quantity === 0 ? (
          <ItemCount
            initial={quantity}
            stock={product.available_quantity}
            value={onAdd}
          />
        ) : (
          <Link to={"/" + "cart"}>
            <AddToCartButton>Terminar mi compra</AddToCartButton>
          </Link>
        )}

        <ConditionStock>
          Stock disponible: {product.available_quantity}
        </ConditionStock>
      </DescriptionContainer>
    </ItemDetailSection>
  );
};
