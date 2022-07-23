import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  const avatar =
    "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg";
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={`/newUser`}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={avatar} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Juan Pablo</span>
              <span className="userShowUserTitle">Software Develop</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details: </span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">jpcorteg</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">25/03/2001</span>
            </div>

            <span className="userShowTitle">Contact Details: </span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+57 3128949457</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">juan@mail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Medellín | Colombia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>
                  Full Name
                  <input
                    type="text"
                    placeholder="Juan Pablo"
                    className="userUpdateInput"
                  />
                </label>
              </div>
              <div className="userUpdateItem">
                <label>
                  User Title
                  <input
                    type="text"
                    placeholder="Software Develop"
                    className="userUpdateInput"
                  />
                </label>
              </div>
              <div className="userUpdateItem">
                <label>
                  Username
                  <input
                    type="text"
                    placeholder="jpcortesg"
                    className="userUpdateInput"
                  />
                </label>
              </div>
              <div className="userUpdateItem">
                <label>
                  Cell Phone
                  <input
                    type="text"
                    placeholder="+57 3128949458"
                    className="userUpdateInput"
                  />
                </label>
              </div>
              <div className="userUpdateItem">
                <label>
                  Email
                  <input
                    type="text"
                    placeholder="juan@mail.com"
                    className="userUpdateInput"
                  />
                </label>
              </div>
              <div className="userUpdateItem">
                <label>
                  Location
                  <input
                    type="text"
                    placeholder="Medellín | Colombia"
                    className="userUpdateInput"
                  />
                </label>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={avatar} alt="" className="userUpdateImg" />
                <label>
                  <Publish className="userUpdateIcon" />
                  <input type="file" className="userUpdateUploadInput" />
                </label>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
