import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import AddItem from './Pages/AddItem/AddItem';



function App() {
  return (
    <div>
       <Header></Header>     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
           <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
           <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes >
      <Footer></Footer>
    </div>
  );
}

export default App;
