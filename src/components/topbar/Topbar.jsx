import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">JpAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">6</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/9750469/pexels-photo-9750469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
