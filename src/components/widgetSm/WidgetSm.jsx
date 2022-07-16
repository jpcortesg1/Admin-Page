import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

export default function WidgetSm() {
  const ListItem = ({ params }) => {
    const { img, name, title } = params;
    return (
      <li className="widgetSmListItem">
        <img src={img} alt="" className="widgetSmImg" />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">{name}</span>
          <span className="widgetSmUserTitle">{title}</span>
        </div>
        <button className="widgetButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>
    );
  };

  const params = {
    img: "https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg",
    name: "Anna Keller",
    title: "Software Engineer",
  };

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>
      <p className="widgetSmDescription">Last added users</p>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <ListItem params={params} />
        <ListItem params={params} />
        <ListItem params={params} />
        <ListItem params={params} />
        <ListItem params={params} />
      </ul>
    </div>
  );
}
