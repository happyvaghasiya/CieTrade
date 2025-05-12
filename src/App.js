import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Agricultural from './components/Industries/agricultural';
import Commodity from './components/Industries/commodity ';
import International from './components/Industries/International ';
import Merchant from './components/Industries/merchant';
import Recycling from './components/Industries/recycling';
import Trading from './components/Industries/trading';
import Plant from './components/Industries/plant';
import Scrap from './components/Industries/scrap';
import Brokerage from './components/Industries/brokerage';
import Contact from './components/company/contactus';
import Brochures from './components/resources/brochures';
import Bagricultural from './components/brochures/b-agricultural';
import Bcommodity from './components/brochures/b.commodity';
import Binternational from './components/brochures/b-international';
import Bmerchant from './components/brochures/b-merchant';
import Brecycling from './components/brochures/b-recycling';
import Btrading from './components/brochures/b-trading';
import Bplant from './components/brochures/b-plant';
import Bscrap from './components/brochures/b-scrap';
import Bbrokerage from './components/brochures/b-brokerage';
import Requestdemo from './components/home/requestdemo';
import Login from './components/home/login';
import FooterP from './components/footer/footerp';
import WhyCieTrade from './components/footer/Whycietrade';
import Ourstory from './components/footer/ourstory';
import Privacypolicy from './components/footer/Privacypolicy';
import Terms from './components/footer/terms';
import Aboutus from './components/company/aboutus';
import Ourclients from './components/company/ourclients';
import Ourpartners from './components/company/ourpartners';
import Accounting from './components/features/accounting';
import Booking from './components/features/booking';
import InventoryManagement from './components/features/inventorymanagement';
import Mobileapps from './components/features/mobileapps';
import SelfServices from './components/features/self-services';
import Ciedispatch from './components/mobile apps/ciedispatch';
import Cielocationn from './components/mobile apps/cielocation';
import Ciemobile from './components/mobile apps/ciemobile';
import Ciephoto from './components/mobile apps/ciephoto';
import Clickbale from './components/mobile apps/clickbale';
import Blog from './components/resources/blog';
import Faqs from './components/resources/faq';
import News from './components/resources/news';
import Trainning from './components/resources/trainning';
import SupportLogin from './components/home/supportlogin';
import Pastevent from './components/home/pastevent';
import Pressreleases from './components/home/Pressreleases';
import Management from './components/features/management';
import Document from './components/features/document';
import Binventory from './components/brochures/b-inventory';
import Bself from './components/brochures/b-self';
import Bciedispatch from './components/brochures/b-ciedispatch';
import Bcielocation from './components/brochures/b-cielocation';
import Bclickbale from './components/brochures/b-clickbale';
import Bciemobile from './components/brochures/b-ciemobile';
import Bciephoto from './components/brochures/b-ciephoto';
import Pasha from "./components/company/pasha";
import ISustain from "./components/company/iSustain";
import Commercial from "./components/company/commercial";
import Here from './components/company/here';
import Blogg from './components/readthepost/blogg';
import Productupdate from './components/readthepost/product-update';
import Newss from './components/readthepost/news';
import Videos from './components/readthepost/videos';
import Readthepost from './components/readthepost/readthepost';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agricultural" element={<Agricultural />} />
        <Route path="/Commodity" element={<Commodity />} />
        <Route path="/International" element={<International />} />
        <Route path="/Merchant" element={<Merchant />} />
        <Route path="/Recycling" element={<Recycling />} />
        <Route path="/Trading" element={<Trading />} />
        <Route path="/Plant" element={<Plant />} />
        <Route path="/Scrap" element={<Scrap />} />
        <Route path="/Brokerage" element={<Brokerage />} />
        <Route path="/Brochures" element={<Brochures />} />
        <Route path="/Bagricultural" element={<Bagricultural />} />
        <Route path="/Bcommodity" element={<Bcommodity />} />
        <Route path="/Binternational" element={<Binternational />} />
        <Route path="/Bmerchant" element={<Bmerchant />} />
        <Route path="/Brecycling" element={<Brecycling />} />
        <Route path="/Btrading" element={<Btrading />} />
        <Route path="/Bplant" element={<Bplant />} />
        <Route path="/Bscrap" element={<Bscrap />} />
        <Route path="/Bbrokerage" element={<Bbrokerage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Requestdemo" element={<Requestdemo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/WhyCieTrade" element={<WhyCieTrade />} />
        <Route path="/Ourstory" element={<Ourstory />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Ourclients" element={<Ourclients />} />
        <Route path="/Ourpartners" element={<Ourpartners />} />
        <Route path="/Accounting" element={<Accounting />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/InventoryManagement" element={<InventoryManagement />} />
        <Route path="/Mobileapps" element={<Mobileapps />} />
        <Route path="/SelfServices" element={<SelfServices />} />
        <Route path="/Ciedispatch" element={<Ciedispatch />} />
        <Route path="/Cielocationn" element={<Cielocationn />} />
        <Route path="/Ciemobile" element={<Ciemobile />} />
        <Route path="/Ciephoto" element={<Ciephoto />} />
        <Route path="/Clickbale" element={<Clickbale />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/News" element={<News />} />
        <Route path="/Trainning" element={<Trainning />} />
        <Route path="/SupportLogin" element={<SupportLogin />} />
        <Route path="/Pastevent" element={<Pastevent />} />
        <Route path="/Pressreleases" element={<Pressreleases />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/Document" element={<Document />} />
        <Route path="/Binventory" element={<Binventory />} />
        <Route path="/Bself" element={<Bself />} />
        <Route path="/Bciedispatch" element={<Bciedispatch />} />
        <Route path="/Bcielocation" element={<Bcielocation />} />
        <Route path="/Bclickbale" element={<Bclickbale />} />
        <Route path="/Bciemobile" element={<Bciemobile />} />
        <Route path="/Bciephoto" element={<Bciephoto />} />
        <Route path="/Pasha" element={<Pasha />} />
        <Route path="/Commercial" element={<Commercial />} />
        <Route path="/ISustain" element={<ISustain />} />
        <Route path="/Here" element={<Here />} />
        <Route path="/Blogg" element={<Blogg />} />
        <Route path="/Productupdate" element={<Productupdate />} />
        <Route path="/Newss" element={<Newss />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Readthepost" element={<Readthepost />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <FooterP />
    </Router>
  );
};

export default App;