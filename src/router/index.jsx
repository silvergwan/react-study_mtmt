import { Route, Routes, BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={""}></Route>
        <Route path="/login" element={""}></Route>
        <Route path="/signup" element={""}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
