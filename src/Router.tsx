import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<Error />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/findFW" element={<FindPWPage />} />
        <Route path="ChangePW" element={<ChangePWPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<SideBar />}>
            <Route path="/inquire" element={<Inquire />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/message" element={<MessagePage />} />
            <Route path="/searchuser" element={<SearchUser />} />
            <Route path="/message/:groupID" element={<ChattingPage />} />
            <Route path="/message/:groupID/addUser" element={<AddUserPage />} />
            <Route path="/addChat" element={<AddChatPage />} />
          </Route> */}
        {/* </Route> */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
