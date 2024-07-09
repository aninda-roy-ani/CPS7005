import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Overview from "./pages/overview";
import Detail from "./pages/detail";
import Error from "./pages/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/overview" element={ <Overview /> }></Route>
        <Route path="/detail" element={ <Detail /> }></Route>
        <Route path="*" element={ <Error /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//rafce to crate automatic