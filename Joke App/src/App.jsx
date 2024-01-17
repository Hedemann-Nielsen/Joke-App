import './App.scss'
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";

import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Header></Header>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    <Footer></Footer>
          

    </>
  )
}

export default App;
