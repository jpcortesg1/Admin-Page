import {
  AttachMoney,
  LineStyle,
  PermIdentity,
  Storefront,
  Timeline,
  TrendingUp,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { useState } from "react";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import "./sidebar.css";

export default function Sidebar() {
  const [current, setCurrent] = useState({
    title: "Dashboard",
    camp: "Home",
  });

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Dashboard",
            items: {
              Home: <LineStyle className="sidebarIcon" />,
              Analytics: <Timeline className="sidebarIcon" />,
              Sales: <TrendingUp className="sidebarIcon" />,
            },
          }}
        />

        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Quick Menu",
            items: {
              Users: <PermIdentity className="sidebarIcon" />,
              Products: <Storefront className="sidebarIcon" />,
              Transaction: <AttachMoney className="sidebarIcon" />,
              Report: <BarChart className="sidebarIcon" />,
            },
          }}
        />

        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Notifications",
            items: {
              Mail: <MailOutline className="sidebarIcon" />,
              Feedback: <DynamicFeed className="sidebarIcon" />,
              Message: <ChatBubbleOutline className="sidebarIcon" />,
            },
          }}
        />

        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Staff",
            items: {
              Manage: <WorkOutline className="sidebarIcon" />,
              Analytics: <Timeline className="sidebarIcon" />,
              Reports: <Report className="sidebarIcon" />,
            },
          }}
        />
      </div>
    </div>
  );
}
