import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const styles = {
  img: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    border: "2px solid #bdc3c7",
  },
  dropdown: {
    background: "transparent",
    borderColor: "transparent",
  },
};

const GoogleBtn = () => {
  const CLIENT_ID = "478820016860-l8fforo7hnk2ga9jj1g48ekjovohrcch.apps.googleusercontent.com";
 // const current = null;
 const[current,setCurrent] = useState(null)
  const handleLoginSuccess = (response) => {
    setCurrent(response.profileObj)
    //console.log(response)
  };
  const handleLogoutSuccess = (response) => {
    setCurrent(null)

  };
  const handleLoginFailure = (response) => {console.log(response)};
  const handleLogoutFailure = (response) => {};
  return (
    <>
      {current ? (
        <>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                width="32"
                height="32"
                src={current?.imageUrl}
                style={styles.img}
                alt="profile"
              />
            </button>
            <ul
              style={styles.dropdown}
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <GoogleLogout
                  clientId={CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={handleLogoutSuccess}
                  onFailure={handleLogoutFailure}
                />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
          prompt ='consent' 
        />
      )}
    </>
  );
};
export default GoogleBtn;
