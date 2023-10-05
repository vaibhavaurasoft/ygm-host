import swal from "sweetalert";
import { toast } from "react-toastify";
// import moment from "moment";
import "moment-timezone";
// import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import Router from 'next/router';
import { removeUserDetails } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

/******************* 
@Purpose : Store Data To local Storage
@Parameter : key, value
@Author : Aurasoft
******************/
export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

/******************* 
@Purpose : Get Data From local Storage
@Parameter : key
@Author : Aurasoft
******************/
export function getItem(key){
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }else
  {
    return null;
  }
}

/******************* 
@Purpose : Remove Data in local Storage
@Parameter : key
@Author : Aurasoft
******************/
export const removeItem = (key) => {
  localStorage.removeItem(key);
};

/******************* 
@Purpose : Email Validation
@Parameter : email
@Author : Aurasoft
******************/
export const validateEmail = (email) => {
  var pattern = new RegExp(
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return pattern.test(email);
};

/******************* 
@Purpose : App ID and secret Validation
@Parameter : id
@Author : Aurasoft
******************/
export const validateIDSecret = (id) => {
  const pattern = new RegExp(/^[a-zA-Z0-9_]{5,50}$/);
  return pattern.test(id);
};

/******************* 
@Purpose : Password Validation
@Parameter : pass
@Author : Aurasoft
******************/
export const validatePassword = (pass) => {
  var pattern = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-!$@#%^&*()_+|~=`{}\[\]:";'<>?,.\/])[A-Za-z\d-!$@#%^&*()_+|~=`{}\[\]:";'<>?,.\/]{6,20}$/
  );
  return pattern.test(pass);
};

/******************* 
@Purpose : Username Validation
@Parameter : name
@Author : Aurasoft
******************/
export const validateUsername = (name) => {
  var pattern = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_%-*?&#])[A-Za-z\d@$!_%-*?&#]{5,}$/
  );
  return pattern.test(name);
};

/******************* 
@Purpose : Port Validation
@Parameter : port
@Author : Aurasoft
******************/
export const validatePort = (port) => {
  var pattern = new RegExp(/^([0-9]){3,4}$/);
  return pattern.test(port);
};

/******************* 
@Purpose : Hostname Validation
@Parameter : name
@Author : Aurasoft
******************/
export const validateHostName = (name) => {
  var pattern = new RegExp(
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)+([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/
  );
  return pattern.test(name);
};

/******************* 
@Purpose : Mobile Number Validation
@Parameter : mobileNo
@Author : Aurasoft
******************/
export const validateMobileNumber = (mobileNo) => {
  var pattern = new RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  return pattern.test(mobileNo);
};

/******************* 
@Purpose : First and Last Name Validation
@Parameter : name
@Author : Aurasoft
******************/
export const validateName = (name) => {
  const pattern = new RegExp(/^[a-z ,.'-]+$/i);
  return pattern.test(name);
};

/******************* 
@Purpose : Character Validation
@Parameter : e
@Author : Aurasoft
******************/
export const allowChar = (e) => {
  const pattern = new RegExp(/^[a-zA-Z\s]{0,255}$/);
  return pattern.test(e);
};

/******************* 
@Purpose : URL Validation
@Parameter : url
@Author : Aurasoft
******************/
export const validateURL = (url) => {
  const pattern = new RegExp(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return pattern.test(url);
};

/******************* 
@Purpose : Number Validation
@Parameter : number
@Author : Aurasoft
******************/
export const allowNumbers = (number) => {
  const pattern = new RegExp(/^[0-9\b]+$/);
  return pattern.test(number);
};

/******************* 
@Purpose : Used for show modal notification
@Parameter : text, type, timer, position, buttons, className
@Author : Aurasoft
******************/
export const showModalNotification = (
  text,
  type = "success",
  timer = 2500,
  position = "center",
  buttons = false
) => {
  swal({
    position: position,
    icon: type,
    text: text,
    buttons: buttons,
    timer: timer,
    className: "custom-toaster",
  });
};

/******************* 
@Purpose : Used for show message notification
@Parameter : text, type, autoClose, position
@Author : Aurasoft
******************/
export const showMessageNotification = (
  text,
  type = "success",
  autoClose = 1500,
  position = "top-right"
) => {
  toast[type](text, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/******************* 
@Purpose : Pincode Validation
@Parameter : msg
@Author : Aurasoft
******************/
export const validatePincodeNumber = (mobileNo) => {
  var pattern = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/);
  return pattern.test(mobileNo);
};

/******************* 
@Purpose : Used for change langauge
@Parameter : body
@Author : Aurasoft
******************/
// export const changeLanguage = (body) => async (dispatch) => {
//   setItem("language", body.language);
//   const payload = {
//     data: body.language,
//   };
//   dispatch({ type: "language", payload });
// };

/******************* 
@purpose : get request error object
@Author : Aurasoft
******************/
export const error_handler = (error) => {
  return {
    error: true,
    message: error && error.message ? error.message : null,
  };
};

/******************* 
@purpose : set Keep me signed in 
@Author : Aurasoft
******************/

export const setTokens = (data) => {
  let isKeepSignedIn = getItem("isKeepSignedIn");
  if (isKeepSignedIn === "true") {
    setItem("accessToken", data);
  } else {
    sessionStorage.setItem("accessToken", data);
  }
};

/******************* 
@purpose : get Keep me signed in 
@Author : Aurasoft
******************/

export const getTokens = () => {
  let isKeepSignedIn = getItem("isKeepSignedIn");
  if (isKeepSignedIn === "true") {
    return getItem("accessToken");
  } else {
    return sessionStorage.getItem("accessToken");
  }
};

/******************* 
@purpose : remove token while logout
@Author : Aurasoft
******************/

export const removeTokens = () => {
  let isKeepSignedIn = getItem("isKeepSignedIn");
  if (isKeepSignedIn === "true") {
    removeItem("accessToken");
  } else {
    sessionStorage.removeItem("accessToken");
  }
};

// export const calculateTimeLeft = () => {

//   let year = new Date().getFullYear();
//   const difference = +new Date(`10/01/${year}`) - +new Date();
//   }

/******************* 
@Purpose : Milliseconds To Time Conversion
@Parameter : duration
@Author : Aurasoft
******************/
export const msToTimeConversion = (duration) => {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return { hours, minutes, seconds, milliseconds };
}

/******************* 
@Purpose : Seconds To Time Conversion
@Parameter : duration
@Author : Aurasoft
******************/
export const secondsToTimeConversion = (duration) => {
  duration = Number(duration);
  var hours = Math.floor(duration / 3600),
    minutes = Math.floor(duration % 3600 / 60),
    seconds = Math.floor(duration % 3600 % 60);
  return { hours, minutes, seconds };
}

/******************* 
@Purpose : Get Time String Conversion
@Parameter : duration
@Author : Aurasoft
******************/
export const getTimeStringConversion = (hours, minutes) => {
  let setHours = String(hours).length > 1 ? hours : '0' + hours;
  let setMinites = String(minutes).length > 1 ? minutes : '0' + minutes;
  return `${setHours + ':' + setMinites}`;
}

/******************* 
@Purpose : Get Milli Seconds Time Conversion
@Parameter : duration
@Author : Aurasoft
******************/
export const getMilliSecondsTime = (h = 0, m = 0, s = 0) => (((+h) * 60 * 60 + (+m) * 60 + (+s)) * 1000);

/******************* 
@Purpose : set 12 Hour Format
@Parameter : duration
@Author : Aurasoft
******************/
export const set12HourFormat = (timeString) => {
  // var timeString = "18:57";
  var hourEnd = timeString.indexOf(":");
  var H = +timeString.substr(0, hourEnd);
  var h = H % 12 || 12;
  var ampm = H < 12 ? "AM" : "PM";
  return timeString = h + timeString.substr(hourEnd, 3) + ampm;
}
/******** Logout function****/
export const logout = async () => {
  removeItem('GYC_login_user_data');
  // await localStorage.removeItem('GYC_login_user_data');
  Router.push({
    pathname: "/",
  })
}

export const isBrowser = () => typeof window !== 'undefined';