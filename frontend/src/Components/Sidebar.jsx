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
import { useNavigate } from "react-router-dom";

const SidebarPage = () => {
  const nav = useNavigate();
  const handleHomeClick = () => {
    nav(`/uni1`);
  };
  const handleForumsClick = () => {
    
    nav(`/uni1/forums`);
  };
  const handleStudentsClick = () => {
    nav(`/uni1/students`);
  };
  const handleSeminarsClick = () => {
    nav(`/uni1/seminars`);
  };
  const handleAlumniClick = () => {
    nav(`/uni1/alumni`);
  };
  const handleUpskillClick = () => {
    nav(`/uni1/upskill`);
  };
  const handleLeaderboardClick = () => {
    nav(`/uni1`);
  };
  const handleHackathonsClick = () => {
    nav(`/uni1/hackathon`);
  };
  return (
    <div className="sidebarMain " style={{ position: "fixed", display: "flex", height: "120vh", width: "20%", top: "10px" }}>
      <Sidebar className="app">
        <div style={{ height: "100%", backgroundColor: "rgba(0, 101, 193, 0.05)", overflow: "hidden", paddingTop: "150px" }}>
          <Menu>
            <MenuItem
              //   component={<Link to="/" className="link" />}
              className="menu1 "
            >
              <h3>MAIN</h3>
            </MenuItem>
            <MenuItem
              //   component={<Link to="dashboard" className="link" />}
              icon={<HomeOutlinedIcon />}
              className="menu2 "
              onClick={handleHomeClick}
            >
              Home
            </MenuItem>
            <MenuItem component={<Link to="/uni1/forum/new" className="link" />} icon={<DescriptionOutlinedIcon />} className="menu2 cursor-pointer" onClick={handleForumsClick}> Forums </MenuItem>
            <MenuItem icon={<PersonIcon />} className="menu2" onClick={handleStudentsClick}> Students </MenuItem>
            <SubMenu label="Seminars" icon={<AirplayOutlinedIcon />} className="menu2" onClick={handleSeminarsClick}>
              {/* <MenuItem icon={<AccountBalanceRoundedIcon />} className="menu3">
                Current Wallet
              </MenuItem>
              <MenuItem icon={<SavingsRoundedIcon />} className="menu3">Savings Wallet</MenuItem> */}
            </SubMenu>
            <MenuItem
              //   component={<Link to="transactions" className="link" />}
              icon={<SchoolIcon />}
              className="menu2"
              onClick={handleAlumniClick}
            >
              Alumni
            </MenuItem>
            <MenuItem
              //   component={<Link to="/" className="link" />}
              className="menu1"
              
            >
              <h3>ANALYTICS</h3>
            </MenuItem>
            <MenuItem icon={<TimelineIcon />} className="menu2" onClick={handleUpskillClick}> Upskill yourself </MenuItem>
            <MenuItem icon={<SignalCellularAltOutlinedIcon />} className="menu2" onClick={handleLeaderboardClick}> Institute Leaderboard </MenuItem>
            <SubMenu label="Hackathons" icon={<InsertDriveFileIcon />} className="menu2" onClick={handleHackathonsClick}>
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
