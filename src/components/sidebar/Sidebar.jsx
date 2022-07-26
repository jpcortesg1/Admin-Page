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
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import SidebarMenu from "../sidebarMenu/SidebarMenu";
import { useLocation } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [current, setCurrent] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/" && setCurrent({ title: "Dashboard", camp: "Home" });
    pathname.toUpperCase().includes("USER") &&
      setCurrent({ title: "Quick Menu", camp: "Users" });
    pathname.toUpperCase().includes("PRODUCT") &&
      setCurrent({ title: "Quick Menu", camp: "Products" });
  }, [pathname]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Dashboard",
            items: {
              Home: { icon: <LineStyle className="sidebarIcon" />, path: "/" },
              Analytics: { icon: <Timeline className="sidebarIcon" /> },
              Sales: { icon: <TrendingUp className="sidebarIcon" /> },
            },
          }}
        />

        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Quick Menu",
            items: {
              Users: {
                icon: <PermIdentity className="sidebarIcon" />,
                path: "/users",
              },
              Products: {
                icon: <Storefront className="sidebarIcon" />,
                path: "/products",
              },
              Transaction: { icon: <AttachMoney className="sidebarIcon" /> },
              Report: { icon: <BarChart className="sidebarIcon" /> },
            },
          }}
        />

        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Notifications",
            items: {
              Mail: { icon: <MailOutline className="sidebarIcon" /> },
              Feedback: { icon: <DynamicFeed className="sidebarIcon" /> },
              Message: { icon: <ChatBubbleOutline className="sidebarIcon" /> },
            },
          }}
        />

        <SidebarMenu
          params={{
            current,
            setCurrent,
            title: "Staff",
            items: {
              Manage: { icon: <WorkOutline className="sidebarIcon" /> },
              Analytics: { icon: <Timeline className="sidebarIcon" /> },
              Reports: { icon: <Report className="sidebarIcon" /> },
            },
          }}
        />
      </div>
    </div>
  );
}
