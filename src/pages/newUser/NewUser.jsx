import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label className="newUserFormLabel">
            Username
            <input
              type="text"
              className="newUserFormInput"
              placeholder="jpcortesg"
            />
          </label>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">
            Full Name
            <input
              type="text"
              className="newUserFormInput"
              placeholder="juan Pablo"
            />
          </label>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">
            E-mail
            <input
              type="text"
              className="newUserFormInput"
              placeholder="juan@mail.com"
            />
          </label>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">
            Password
            <input
              type="password"
              className="newUserFormInput"
              placeholder="*******"
            />
          </label>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">
            phone
            <input
              type="text"
              className="newUserFormInput"
              placeholder="+57 3128472318"
            />
          </label>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">
            Addres
            <input
              type="text"
              className="newUserFormInput"
              placeholder="Medellín | Colombia"
            />
          </label>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Gender</label>
          <div className="newUserGender">
            <label className="newUserFormLabel newUserFormLabel-gender">
              Male
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                className="newUserFormInput newUserFormInput-gender"
                placeholder="Medellín | Colombia"
              />
            </label>

            <label className="newUserFormLabel newUserFormLabel-gender ">
              Female
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                className="newUserFormInput newUserFormInput-gender"
                placeholder="Medellín | Colombia"
              />
            </label>

            <label className="newUserFormLabel newUserFormLabel-gender">
              Other
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                className="newUserFormInput newUserFormInput-gender"
                placeholder="Medellín | Colombia"
              />
            </label>
          </div>
        </div>
        <div className="newUserFormItem">
          <label className="newUserFormLabel">Active</label>
          <select name="avtive" id="active" className="newUserSelect">
            <option value="yes" defaultValue>
              Yes
            </option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserFormItem">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
