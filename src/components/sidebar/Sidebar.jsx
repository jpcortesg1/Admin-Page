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
import "./sidebar.css";

export default function Sidebar() {
  const SidebarMenu = ({ params }) => {
    const { title, items } = params;
    return (
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">{title}</h3>
        <ul className="sidebarList">
          {Object.keys(items).map((key) => (
            <li className="sidebarListItem">
              {items[key]}
              {key}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SidebarMenu
          params={{
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
            title: "Notifications",
            items: {
              Mail: <MailOutline className="sidebarIcon" />,
              Feedback: <DynamicFeed className="sidebarIcon" />,
              Sales: <ChatBubbleOutline className="sidebarIcon" />,
            },
          }}
        />

        <SidebarMenu
          params={{
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
