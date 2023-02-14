import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewsGet from "./components/News/GetNews/NewsGet";
import './index.css'
import AddNews from "./components/News/AddNews/AddNews";
import NewsSlider from "./components/News/Slider/NewsSlider";
import { Route, Routes } from "react-router-dom";
import NewsFull from "./components/News/FullNews/FullNews";
import AddFighter from "./components/Fighters/AddFighter";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Routes>
          <Route element={<AddFighter/>} path={'/addfighter'}/>
          <Route element={<NewsSlider/>} path='/'/>
          <Route element={<AddNews/>} path='/addnews'/>
          <Route element={<NewsFull/>} path='/news/:id'/>
          <Route element={<NewsGet/>} path='/news'/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;