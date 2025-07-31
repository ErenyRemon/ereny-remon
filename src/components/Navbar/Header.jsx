import "./header.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='header'>
        <div className="headerDivName">
          <a href="https://ereny-remon.netlify.app/"><h1>Ereny Remon</h1></a>
        </div>

        {/* اللينكات + الزرار العادي للشاشات الكبيرة */}
        <div className="headerNav">
          <div className='headerList'>
            <ul>
              <li><a href="#mainDivOneID"> About</a></li>
              <li><a href="#mainDivFourID">Services</a></li>
              <li><a href="#mainDivSevenID">Projects</a></li>
              <li><a href="#mainDivNineID">Extracurricular Activities</a></li>
            </ul>
          </div>
          <div className='headerDivGet'>
            <a href="#mainDivThirteenID">
              <button className='headerDivGetButton'>Get in touch</button>
            </a>
          </div>
        </div>

        {/* أيقونة المينيو (للموبايل فقط) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <CiMenuKebab />
        </div>

        {/* القائمة الجانبية (sideMenu) للموبايل */}
        <div className={`sideMenu ${isMenuOpen ? "open" : ""} bg-black` }>
            <div className='sideMenuDiv'>
            <div className="close-icon" onClick={toggleMenu}>
            <FaTimes />
          </div>

          <div className='headerList' onClick={toggleMenu}>
            <ul>
              <li><a href="#mainDivOneID"> About</a></li>
              <li><a href="#mainDivFourID">Services</a></li>
              <li><a href="#mainDivSevenID">Projects</a></li>
              <li><a href="#mainDivNineID">Extracurricular Activities</a></li>
            </ul>
          </div>


          <div className='headerDivGet'>
            <a href="#mainDivThirteenID">
              <button className='headerDivGetButton'>Get in touch</button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

