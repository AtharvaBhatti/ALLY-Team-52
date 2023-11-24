import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import TimelineIcon from '@mui/icons-material/Timeline';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Routes, Route, Link } from "react-router-dom";
import "./Sidebar.css"

const SidebarPage = () => {
    return (
      <div style={{ display: "flex", height: "100%", width: "20%"}}>
        <Sidebar className="app">
            <div style={{height: "100%", backgroundColor: "rgba(0, 101, 193, 0.05)", overflow:"hidden"}}>
          <Menu>
            <MenuItem
            //   component={<Link to="/" className="link" />}
              className="menu1"
            >
              <h3>MAIN</h3>
            </MenuItem>
            <MenuItem
            //   component={<Link to="dashboard" className="link" />}
              icon={<HomeOutlinedIcon />}
              className="menu2"
            >
              Home
            </MenuItem>
            <MenuItem component={<Link to="/uni1/forum/new" className="link" />} icon={<DescriptionOutlinedIcon />} className="menu2"> Forums </MenuItem>
            <MenuItem icon={<PersonIcon />} className="menu2"> Students </MenuItem>
            <SubMenu label="Seminars" icon={<AirplayOutlinedIcon />} className="menu2">
              {/* <MenuItem icon={<AccountBalanceRoundedIcon />} className="menu3">
                Current Wallet
              </MenuItem>
              <MenuItem icon={<SavingsRoundedIcon />} className="menu3">Savings Wallet</MenuItem> */}
            </SubMenu>
            <MenuItem
            //   component={<Link to="transactions" className="link" />}
              icon={<SchoolIcon />}
              className="menu2"
            >
              Alumni
            </MenuItem>
            <MenuItem
            //   component={<Link to="/" className="link" />}
              className="menu1"
            >
              <h3>ANALYTICS</h3>
            </MenuItem>
            <MenuItem icon={<TimelineIcon />} className="menu2"> Upskill yourself </MenuItem>
            <MenuItem icon={<SignalCellularAltOutlinedIcon />} className="menu2"> Institute Leaderboard </MenuItem>
            <SubMenu label="Hackathons" icon={<InsertDriveFileIcon />} className="menu2">
              {/* <MenuItem icon={<AccountBalanceRoundedIcon />} className="menu3">
                Current Wallet
              </MenuItem>
              <MenuItem icon={<SavingsRoundedIcon />} className="menu3">Savings Wallet</MenuItem> */}
            </SubMenu>
          </Menu>
          </div>
        </Sidebar>
      </div>
    );
  };
  export default SidebarPage;
