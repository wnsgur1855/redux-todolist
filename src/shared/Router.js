import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/detail" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

//<Route path="detail/:id" element={<Detail />} />
