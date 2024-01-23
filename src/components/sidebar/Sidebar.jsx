import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/logo/coffee-logo.png'
import { GoHome } from "react-icons/go";
import { TbFileInvoice } from "react-icons/tb";
import { CiHeart, CiSettings, CiWallet } from "react-icons/ci";
const Sidebar = () => {
  return (
    <>
      <aside className="aside-container">
        <li>
            <Link to={'/'} className="logo">
                <img src={Logo}/>
            </Link>
        </li>
        <ul className="menuList">
            <li>
                <NavLink to={'/'} className={'links'}><GoHome/></NavLink>
            </li>
            <li> <NavLink to={'/invoice'} className={'links'}><TbFileInvoice/></NavLink></li>
            <li>
                <NavLink to={'/favorite'} className={'links'}><CiHeart/></NavLink>
            </li>
            <li><NavLink to={'/wallet'} className={'links'}><CiWallet/></NavLink></li>
            <li><NavLink to={'/settings'} className={'links'}><CiSettings/></NavLink></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
