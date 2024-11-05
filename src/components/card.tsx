import styled from "styled-components";

interface ICard {
  image: string;
  title: string;
  price: number;
}

const Card = ({ ...props }: ICard) => {
  return (
    <CardStyle>
      <PhotoStyle />
      <TitleStyle>{props.title}</TitleStyle>
      <PriceStyle>{props.price}₩</PriceStyle>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  width: 200px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

const PhotoStyle = styled.image`
  width: 200px;
  height: 200px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 4px;
`;

const TitleStyle = styled.h1`
  font-size: 18px;
  font-weight: 256;
  margin: 0;
`

const PriceStyle = styled.h2`
  font-size: 36px;
  color: #FF5A5A;
  margin: 0;
`

export default Card;
