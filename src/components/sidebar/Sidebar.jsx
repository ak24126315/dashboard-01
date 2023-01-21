import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">logo</span>
      </div>

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li><DashboardIcon className="icons" /><span>Dashboard</span></li>
          <p className="title">LISTS</p>
          <li><PersonOutlinedIcon className="icons" /><span>Users</span></li>
          <li><ProductionQuantityLimitsOutlinedIcon className="icons" /><span>Products</span></li>
          <li><CreditCardOutlinedIcon className="icons" /><span>Orders</span></li>
          <li><LocalShippingOutlinedIcon className="icons" /><span>Delivery</span></li>
          <p className="title">USEFUL</p>
          <li><BarChartOutlinedIcon className="icons" /><span>Stats</span></li>
          <li><NotificationsOutlinedIcon className="icons" /><span>Notifications</span></li>
          <p className="title">SERVICE</p>
          <li><MedicalInformationOutlinedIcon className="icons" /><span>System Health</span></li>
          <li><PsychologyOutlinedIcon className="icons" /><span>Logs</span></li>
          <li><SettingsSuggestOutlinedIcon className="icons" /><span>Settings</span></li>
          <p className="title">USER</p>
          <li><AccountCircleOutlinedIcon className="icons" /><span>Profile</span></li>
          <li><ExitToAppOutlinedIcon className="icons"  /><span>Logout</span></li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar