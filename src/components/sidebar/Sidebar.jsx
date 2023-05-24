import "./sidebar.scss";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import CloudDoneIcon from '@mui/icons-material/CloudDone';
import Logo from "./2.png"
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
        <img src={Logo} style={{width:"120px"}}></img>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/creators" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" style={{color:"#fb8a19"}}/>
              <span>Creators</span>
            </li>
          </Link>
          <Link to="/files" style={{ textDecoration: "none" }}>
            <li>
              <CloudDoneIcon className="icon" style={{color:"#fb8a19"}} />
              <span>Files</span>
            </li>
          </Link>
          
      
          <p className="title">USER</p>
         
          <li>
            <ExitToAppIcon className="icon" style={{color:"#fb8a19"}}  />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
