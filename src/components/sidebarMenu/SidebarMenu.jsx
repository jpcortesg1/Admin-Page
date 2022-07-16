import "./sidebarMenu.css"

export default function SidebarMenu({ params }) {
  const { title, items, current, setCurrent } = params;

  const renderItems = () => {
    return Object.keys(items).map((key, index) => {
      const isActive = key === current.camp && title === current.title;
      return (
        <li
          className={`sidebarListItem ${isActive && "active"}`}
          key={index}
          onClick={() => setCurrent({ title, camp: key })}
        >
          {items[key]}
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
