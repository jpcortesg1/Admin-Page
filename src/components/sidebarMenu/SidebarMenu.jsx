import { useNavigate } from "react-router-dom";
import "./sidebarMenu.css";

export default function SidebarMenu({ params }) {
  const { title, items, current, setCurrent } = params;
  const navigate = useNavigate();
  const navigateTo = (path, key) => {
    setCurrent({ title, camp: key });
    path && navigate(`${path}`);
  };

  const renderItems = () => {
    return Object.keys(items).map((key, index) => {
      const isActive = key === current.camp && title === current.title;
      const { icon, path } = items[key];
      return (
        <li
          className={`sidebarListItem ${isActive && "active"}`}
          key={index}
          onClick={() => navigateTo(path, key)}
        >
          {icon}
          {key}
        </li>
      );
    });
  };

  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{title}</h3>
      <ul className="sidebarList">{renderItems()}</ul>
    </div>
  );
}
