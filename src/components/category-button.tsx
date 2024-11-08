import styled from "styled-components";


interface IButton {
  ldir: boolean;
}

const CategoryButton = ({ ...props }: IButton) => {
  return (
    <>
      <ButtonStyle ldir={props.ldir}>
        {props.ldir ? (
          <img src=""/>
        ) : (
          <img src="" />
        )}
      </ButtonStyle>
    </>
  );
};

const ButtonStyle = styled.button<IButton>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  border: 0;
  /* background-color: grey; */
`;

export default CategoryButton;
