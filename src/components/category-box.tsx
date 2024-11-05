import styled from "styled-components";

interface ICategoryBox {
  image: string;
  name: string;
}

const CategoryBox = ({ ...props }: ICategoryBox) => {
  return (
    <div>
      <Box>
        <image></image>
      </Box>
      <p
        style={{
          textAlign: "center",
          color: "grey",
          fontSize: "12pt",
        }}
      >
        {props.name}
      </p>
      {/* 색깔 회색 / 글씨 크기 8pt */}
    </div>
  );
};

const Box = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid black;
  border-radius: 24px;
`;

export default CategoryBox;
