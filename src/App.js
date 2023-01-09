import { Route, Routes } from "react-router";
import Info from "./page/components/Info";
import Home from "./page/Home/Home";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="info/:id" element={<Info />}/>
      </Routes>
    </>
  );
}

export default App;
