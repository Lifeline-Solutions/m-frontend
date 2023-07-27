import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home';

import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import UsersList from './components/UsersList';
import UserEdit from './pages/UserEdit';
import ProductList from './pages/ProductList';
import ProductEdit from './pages/ProductEdit';
import OrderList from './pages/OrderList';
import HomeShop from './pages/HomeShop';
import News from './components/News';
import Ticket from './components/Ticket';
import Team from './components/Team';
import Membership from './components/Membership';
import OurClub from './components/OurClub';
import NewsList from './components/NewsList';
import NewsEdit from './pages/NewsEdit';
import AdvertList from './components/advertsList';
import AdvertEdit from './pages/AdvertEdit';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<HomeShop />} />
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/ourclub" element={<OurClub />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart/:id?" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/admin/userlist" element={<UsersList />} />
        <Route path="/admin/user/:id/edit" element={<UserEdit />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
        <Route path="/admin/orderlist" element={<OrderList />} />
        <Route path="/admin/news" element={<NewsList />} />
        <Route path="/admin/news/:id/edit" element={<NewsEdit />} />
        <Route path="/admin/adverts" element={<AdvertList />} />
        <Route path="/admin/adverts/:id/edit" element={<AdvertEdit />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
