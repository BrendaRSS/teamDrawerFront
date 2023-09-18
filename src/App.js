import GlobalStyle from "./assets/style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeamsPage from "./pages/TeamsPage";

function App() {
  return (
   <BrowserRouter>
   <GlobalStyle />
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/teams" element={<TeamsPage/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
