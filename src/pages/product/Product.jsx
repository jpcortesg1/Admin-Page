import { Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "./../../dummyData";
import "./product.css";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey={"sales"}
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="productInfoImage"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label className="productFormLabel">
              Product Name
              <input type="text" placeholder="Apple AirPod" />
            </label>
            <label className="productFormLabel">In Stock</label>
            <select name="inStock" id="inStock" className="productFormSelect">
              <option value="yes" selected>
                Yes
              </option>
              <option value="no">No</option>
            </select>

            <label className="productFormLabel">Active</label>
            <select name="active" id="active" className="productFormSelect">
              <option value="yes" selected>
                Yes
              </option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormright">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="productUploadImg"
              />
              <label>
                <Publish />
                <input type="file" className="productUploadInput" />
              </label>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
