import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}> {type} </button>;
  };

  const TrUser = ({ params }) => {
    const { img, name, date, amount, status } = params;
    return (
      <tr className="widgetLgTr">
        <td className="widgetLUser">
          <img src={img} alt="" className="widgetLgImg" />
          <span className="widgetLgName">{name}</span>
        </td>
        <td className="widgetLgDate">{date}</td>
        <td className="widgetLgAmount">{amount}</td>
        <td className="widgetLgStatus">
          <Button type={status} />
        </td>
      </tr>
    );
  };

  const params = {
    img: "https://images.pexels.com/photos/12461880/pexels-photo-12461880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Susan Carol",
    date: "2 Jun 2021",
    amount: "$122.00",
  };

  const status = ["Approved", "Declined", "Pending"];

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          <TrUser
            params={{
              ...params,
              status: status[Math.floor(Math.random() * 3)],
            }}
          />
          <TrUser
            params={{
              ...params,
              status: status[Math.floor(Math.random() * 3)],
            }}
          />
          <TrUser
            params={{
              ...params,
              status: status[Math.floor(Math.random() * 3)],
            }}
          />
          <TrUser
            params={{
              ...params,
              status: status[Math.floor(Math.random() * 3)],
            }}
          />
          <TrUser
            params={{
              ...params,
              status: status[Math.floor(Math.random() * 3)],
            }}
          />
          <TrUser
            params={{
              ...params,
              status: status[Math.floor(Math.random() * 3)],
            }}
          />
        </tbody>
      </table>
    </div>
  );
}
