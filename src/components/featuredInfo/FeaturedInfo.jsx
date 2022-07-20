import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  const FeatureItem = ({ params }) => {
    const { title, money, rate, negative } = params;
    const newRate = (negative ? "-" : "") + rate;
    const icon = negative ? (
      <ArrowDownward className="featuredIcon negative" />
    ) : (
      <ArrowUpward className="featuredIcon" />
    );

    return (
      <div className="featuredItem">
        <span className="featuredTitle">{title}</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{money}</span>
          <span className="featuredMoneyRate">
            {newRate}
            {icon}
          </span>
        </div>
        <div className="featuredSub">Compared to last month</div>
      </div>
    );
  };

  return (
    <div className="featured">
      <FeatureItem
        params={{
          title: "Revanue",
          money: "2,415",
          rate: "11.4",
          negative: true,
        }}
      />
      <FeatureItem
        params={{
          title: "Sales",
          money: "4,415",
          rate: "1.4",
          negative: true,
        }}
      />
      <FeatureItem
        params={{
          title: "Cost",
          money: "$2,225",
          rate: "2.4",
        }}
      />  
    </div>
  );
}
