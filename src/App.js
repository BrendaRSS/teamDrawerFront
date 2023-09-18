import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
   <BrowserRouter>
   <GlobalStyle />
   <Routes>
    <Route path="/" element={<HomePage/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
