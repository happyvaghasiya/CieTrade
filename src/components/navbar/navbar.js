import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navData = [
    {
      name: "Features",
      options: [
        { title: "Dispatch Management", id: "/Management" },
        { title: "Inventory Management", id: "/InventoryManagement" },
        { title: "Booking and Container Management", id: "/Booking" },
        { title: "Document Management", id: "/Document" },
        { title: "Self-Service Portal", id: "/SelfServices" },
        { title: "Mobile App", id: "/Mobileapps" },
        { title: "Accounting Integration", id: "/Accounting" },
      ],
    },
    {
      name: "Industries",
      options: [
        { title: "Agricultural Commodities", id: "/Agricultural" },
        { title: "Commodity Brokerage", id: "/Commodity" },
        { title: "International Trade", id: "/International" },
        { title: "Paper Merchants", id: "/Merchant" },
        { title: "Plastic Recycling", id: "/Recycling" },
        { title: "Pulp & Paper Trading", id: "/Trading" },
        { title: "Recycling Plants", id: "/Plant" },
        { title: "Scrap Metal Recycling", id: "/Scrap" },
        { title: "Waste Brokerage", id: "/Brokerage" },
      ],
    },
    {
      name: "Company",
      options: [
        { title: "About Us", id: "/Aboutus" },
        { title: "Our Clients", id: "/Ourclients" },
        { title: "Our Partners", id: "/Ourpartners" },
        { title: "Contact Us", id: "/Contact" },
      ],
    },
    {
      name: "Resources",
      options: [
        { title: "FAQ", id: "/Faqs" },
        { title: "Training & Support", id: "/Trainning" },
        { title: "News & Events", id: "/News" },
        { title: "Brochures", id: "/Brochures" },
        { title: "Blog", id: "/Blog" },
      ],
    },
  ];

  return (
    <nav className={`absolute nav-fluid top-0 left-0 right-0 z-10 text-white ${menuOpen ? "bg-black" : "bg-transparent"}`}>
      <Container className="py-3 border-b fluid">
        <Row className="align-items-center justify-content-between">
          <Col lg={3} className="d-flex align-items-center">
            <a href="/">
              <img
                src="https://www.cietrade.com/wp-content/uploads/2022/12/cietrade_logo.svg"
                alt="logo"
                width={150}
              />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl border-0 p-2 rounded d-lg-none ms-auto">
              <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </Col>
          <Col lg={9} className="d-none d-lg-flex justify-content-center px-4">
            {navData.map((item, index) => (
              <div
                key={index}
                className="relative px-3 py-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button className="hover:text-red-600 font-bold py-2 d-flex align-items-center">
                  {item.name}
                  <i className="fa-solid fa-angle-down ps-2 pt-1 text-xs"></i>
                </button>
                {hoveredIndex === index && (
                  <div className="absolute w-60 bg-white rounded shadow-lg">
                    <ul className="py-2 bg-red-600 text-white font-semibold list-unstyled m-0">
                      {item.options.map((option, i) => (
                        <li key={i} className="relative group">
                          <a
                            href={option.id}
                            className="d-block mx-3 py-2 font-bold text-white relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full"
                          >
                            {option.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="d-flex flex-column flex-lg-row">
              <a href="/Requestdemo" className="hover:text-red-600 bg-red-600 hover:bg-white px-3 my-2 font-bold d-flex align-items-center"> Request Demo <i className="fa-solid fa-arrow-right ps-2 pt-1"></i></a>
              <a href="/login" className="hover:text-red-600 ps-3 pt-3 mt-2 mt-lg-0 font-bold">Login to cieTrade.net</a>
            </div>
          </Col>
        </Row>
      </Container>
      {menuOpen && (
        <div className="bg-black w-full text-white py-4 px-6 d-lg-none">
          {navData.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left py-2 text-lg font-bold flex justify-between items-center"
                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
              >
                {item.name}
                <i className={`fa-solid fa-angle-down transition-transform ${dropdownOpen === index ? "rotate-180" : ""}`}></i>
              </button>
              {dropdownOpen === index && (
                <ul className="bg-black text-white ps-3 py-2">
                  {item.options.map((option, i) => (
                    <li key={i} className="py-1">
                      <a href={option.id} className="block hover:text-gray-400">
                        {option.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="d-flex flex-column flex-lg-row">
            <a href="/Requestdemo" className="hover:text-red-600 bg-red-600 hover:bg-white w-fit px-3 py-2 mt-2 d-flex align-items-center"> Request Demo <i className="fa-solid fa-arrow-right ps-2 pt-1"></i></a>
            <a href="/login" className="hover:text-red-600 ps-2 pt-3 mt-2 mt-lg-0">Login to cieTrade.net</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;