import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Notfound from './Page/Shared/Notfound/Notfound';
import Login from './Page/Login/Login';
import Register from './Page/Login/Register/Register';
import Checkout from './Page/Checkout/Checkout';
import RequireAuth from './Page/Login/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/checkout" element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/home/login' element={<Login></Login>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
