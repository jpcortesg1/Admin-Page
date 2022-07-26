import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductFormItem">
          <label className="newProductFormLabel">
            Image
            <input type="file" className="newProductFormInputFile" />
          </label>
        </div>
        <div className="newProductFormItem">
          <label className="newProductFormLabel">
            Name
            <input
              type="text"
              className="newProductFormInput"
              placeholder="Apple AirPod"
            />
          </label>
        </div>
        <div className="newProductFormItem">
          <label className="newProductFormLabel">
            Stock
            <input
              type="text"
              className="newProductFormInput"
              placeholder="123"
            />
          </label>
        </div>
        <div className="newProductFormItem">
          <label className="newProductFormLabel">Active</label>
          <select name="avtive" id="active" className="newProductSelect">
            <option value="yes" defaultValue>
              Yes
            </option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newProductFormItem">
          <button className="newProductButton">Create</button>
        </div>
      </form>
    </div>
  );
}
