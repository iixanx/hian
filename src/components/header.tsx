import styled from "styled-components";

interface HeaderProps {
  now: number;
  isLoggedIn: boolean;
}

const Header = () => {
  return (
    <HeaderStyle>
      {/* 로고 / 사이트 제목 */}
      <CategoryStyle>
        <p>상점</p>
        <p>상품 등록</p>
        <p>계정 관리</p>
      </CategoryStyle>
      <div>
        {" "}
        {/* 마우스 올라갔을 때 팝업 켜지기 */}
        {/* 계정 (상점) 사진 */}
        {/* 이름 */}
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid black;
`;

const CategoryStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Header;
