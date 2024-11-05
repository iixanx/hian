import styled from "styled-components";
import Header from "../components/header";
import CategoryBox from "../components/category-box";
import CategoryButton from "../components/category-button";
import Card from "../components/card";
import { useMediaQuery } from "react-responsive";

interface ISquare {
  width: number;
  height: number;
  maxWidth: number;
  maxHeight: number;
  color: string;
}

export default function MainPage() {
  const sizeMoreThan1080 = useMediaQuery({
    query: "(min-width: 1080px)",
  });
  const sizeMoreThan760 = useMediaQuery({
    query: "(min-width:760px)",
  });

  const arr = [
    {
      image: "",
      name: "1",
    },
    {
      image: "",
      name: "2",
    },
    {
      image: "",
      name: "3",
    },
    {
      image: "",
      name: "4",
    },
    {
      image: "",
      name: "5",
    },
    {
      image: "",
      name: "6",
    },
    {
      image: "",
      name: "7",
    },
    {
      image: "",
      name: "8",
    },
    {
      image: "",
      name: "9",
    },
  ];

  const cards = [
    {
      image: "",
      title: "test",
      price: 10000,
    },
    {
      image: "",
      title: "test",
      price: 10000,
    },
    {
      image: "",
      title: "test",
      price: 10000,
    },
    {
      image: "",
      title: "test",
      price: 10000,
    },
    {
      image: "",
      title: "test",
      price: 10000,
    },
    {
      image: "",
      title: "test",
      price: 10000,
    },
    {
      image: "",
      title: "test",
      price: 10000,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#FFFEFC",
      }}
    >
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            flex: "space-evenly",
            gap: "5vw",
          }}
        >
          <Square
            width={25}
            height={25}
            maxWidth={314}
            maxHeight={314}
            color="84928C"
          />
          <Square
            width={50}
            height={25}
            maxWidth={626}
            maxHeight={314}
            color="84928C"
          />
        </div>{" "}
        <div
          style={{
            display: "inline-flex",
            flex: "space-evenly",
            gap: "3vw",
            maxWidth: "1024px",
            width: "80vw",
            overflow: "clip",
            textAlign: "center",
          }}
        >
          <CategoryButton ldir={true}></CategoryButton>
          <div
            style={{
              display: "inline-flex",
              flex: "space-evenly",
              gap: "3vw",
              width: "1024px",
              overflowX: "scroll",
            }}
          >
            {arr.map((e) => (
              <CategoryBox image={e.image} name={e.name} />
            ))}
          </div>
          <CategoryButton ldir={false}></CategoryButton>
        </div>{" "}
        {/**3번째 칸 (카테고리) */}
        <div
          style={{
            maxWidth: "1024px",
            width: "80vw",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          {cards.map((v, i) => {
            const arr = [v, cards[i + 1]];
            i += 2;
            if (sizeMoreThan760) {
              i += 1;
              arr.push(cards[i + 2]);
            }
            if (sizeMoreThan1080) {
              i += 1;
              arr.push(cards[i + 3]);
            }

            return (
              <div>
                {arr.map((e) => {
                  if (e) {
                    return (
                      <Card image={e.image} title={e.title} price={e.price} />
                    );
                  }
                })}
              </div>
            );
          })}
        </div>{" "}
        {/* 4번째 칸 상품 목록 */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 128px 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Square = styled.div<ISquare>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vw;
  border-radius: 8px;
  max-width: ${(props) => props.maxWidth}px;
  max-height: ${(props) => props.maxHeight}px;
  min-width: 256px;
  min-height: 256px;
  background-color: #${(props) => props.color};
`;
