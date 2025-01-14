import { Route, Routes, BrowserRouter } from "react-router-dom";
import News from "../components/news/news";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path="/login" element={""}></Route>
        <Route path="/signup" element={""}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
