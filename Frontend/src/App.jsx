import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/SignIn';
import User from './Pages/User/User';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/SignIn' element={<SignIn />}/>
      <Route path='/User' element={<User />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  )
   
}

export default App
