import styled from "styled-components";
import Header from "../components/header";
import CategoryBox from "../components/category-box";
import CategoryButton from "../components/category-button";

interface ISquare {
  width: number;
  height: number;
  maxWidth: number;
  maxHeight: number;
}

export default function MainPage() {
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

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            flex: "space-evenly",
            gap: "5vw",
          }}
        >
          <Square width={25} height={25} maxWidth={314} maxHeight={314} />
          <Square width={50} height={25} maxWidth={626} maxHeight={314} />
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
        <div></div> {/* 4번째 칸 상품 목록 */}
      </Container>
    </>
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
  border: 1px solid black;
  max-width: ${(props) => props.maxWidth}px;
  max-height: ${(props) => props.maxHeight}px;
`;
