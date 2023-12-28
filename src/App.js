import "./App.css";
import React, {useState, useEffect} from "react";
import Mini from "./Components/Mini/Mini";
import LoginSignUp from "./Components/LoginSignUp/LoginSignUp";
import user_icon from "./Components/Assets/person.jpg";
import emial_icon from "./Components/Assets/email.jpg";
import password_icon from "./Components/Assets/password.jpg";
import a from "./Components/Assets/1514.jpg";
import b from "./Components/Assets/1515.jpg";
import c from "./Components/Assets/1516.jpg";
import d from "./Components/Assets/1517.jpg";
import e from "./Components/Assets/1518.jpg";
import logo from "./Components/Assets/logo.png";

function App() {
  const [action, setAction] = useState("");
  const [enroll, setEnroll] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const logs1 = {
    e: 2204030101514,
    em: "ansh@gmail.com",
    p: 4000,
    name: "Ankush Vaswani",
    dob: "04-09-2004",
    mobile: "9012666255",
    h4: "Ankush Mahesh Vaswani",
    fees: "00",
    profile: a,
    cgpa: 8.45,
    per: 89,
    status: "Pass",
    results: [
      {subject: "Mathematics", score: 99},
      {subject: ".NET", score: 78},
      {subject: "Data Structures", score: 89},
      {subject: "Operating Systems", score: 74},
      {subject: "Digital Electronics of Technology", score: 81},
      {subject: "PHP", score: "N/A"},
      {subject: "Indian Constitution", score: 90},
    ],
  };
  const logs2 = {
    e: 2204030100767,
    em: "anil@gmail.com",
    p: 5000,
    name: "Anil Parmar",
    dob: "10-11-2003",
    mobile: "9512334557",
    h4: "Parmar Anil Laxman",
    fees: "22500",
    profile: b,
    cgpa: 7.45,
    per: 74,
    status: "Pass",
    results: [
      {subject: "Mathematics", score: 75},
      {subject: ".NET", score: 44},
      {subject: "Data Structures", score: 78},
      {subject: "Operating Systems", score: 55},
      {subject: "Digital Electronics of Technology", score: 91},
      {subject: "PHP", score: "N/A"},
      {subject: "Indian Constitution", score: 97},
    ],
  };
  const logs3 = {
    e: 2204030100690,
    em: "dipak@gmail.com",
    p: 6000,
    name: "Dipak Nath",
    dob: "20-07-2003",
    mobile: "9876543210",
    h4: "Dipak Nath Bhagwan",
    fees: "1500",
    profile: c,
    cgpa: 6.45,
    per: 62,
    status: "Pass",
    results: [
      {subject: "Mathematics", score: 47},
      {subject: ".NET", score: 78},
      {subject: "Data Structures", score: 69},
      {subject: "Operating Systems", score: 80},
      {subject: "Digital Electronics of Technology", score: 41},
      {subject: "PHP", score: "N/A"},
      {subject: "Indian Constitution", score: 73},
    ],
  };
  const logs4 = {
    e: 2204030101517,
    em: "mohitraj@gmail.com",
    p: 7000,
    name: "Mohit Raj",
    dob: "09-22-1998",
    mobile: "8895656859",
    h4: "Mohit Anil Raj",
    fees: "12500",
    profile: d,
    cgpa: 4.45,
    per: 32,
    status: "Fail",
    results: [
      {subject: "Mathematics", score: 49},
      {subject: ".NET", score: 38},
      {subject: "Data Structures", score: 29},
      {subject: "Operating Systems", score: 14},
      {subject: "Digital Electronics of Technology", score: 21},
      {subject: "PHP", score: "N/A"},
      {subject: "Indian Constitution", score: 50},
    ],
  };
  const logs5 = {
    e: 2204030101518,
    em: "shub@gmail.com",
    p: 8000,
    name: "Shubham Rajput",
    dob: "12-05-2002",
    mobile: "7773331111",
    h4: "Shubham Rajput Sanjaybhai",
    fees: "22500",
    profile: e,
    cgpa: 9.45,
    per: 94,
    status: "Pass",
    results: [
      {subject: "Mathematics", score: 99},
      {subject: ".NET", score: 98},
      {subject: "Data Structures", score: 89},
      {subject: "Operating Systems", score: 94},
      {subject: "Digital Electronics of Technology", score: 91},
      {subject: "PHP", score: "N/A"},
      {subject: "Indian Constitution", score: 100},
    ],
  };

  const handleReset = () => {
    setEnroll("");
    setEmail("");
    setPass("");
  };

  const [showWarning, setShowWarning] = useState(false);
  const loginData = [logs1, logs2, logs3, logs4, logs5];

  useEffect(() => {
    const isReloaded =
      window.performance && window.performance.navigation.type === 1;
    if (isReloaded && action === "Sign Up") {
      setShowWarning(true);

      const hideWarningTimeout = setTimeout(() => {
        setShowWarning(false);
      }, 4000);

      const reloadPageTimeout = setTimeout(() => {
        window.location.reload();
      }, 4000);

      return () => {
        clearTimeout(hideWarningTimeout);
        clearTimeout(reloadPageTimeout);
      };
    }
  }, [action]);

  const validateLogin = () => {
    for (const data of loginData) {
      if (data.e == enroll && data.p == pass && data.em == email) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (action === "Log In" && validateLogin()) {
      const user = loginData.find(
        (data) => data.e == enroll && data.p == pass && data.em == email
      );
      setSelectedUser(user);
    }
  }, [action, enroll, pass, email]);

  return (
    <div className={action === "Log In" ? "n" : "m"}>
      {action === "Log In" && selectedUser && validateLogin() ? (
        <Mini selectedUser={selectedUser} results={selectedUser.results} />
      ) : (
        <div className="container">
          <div className="header">
            <img src={logo} alt="" />
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Enrollment"
                value={enroll}
                onChange={(e) => setEnroll(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={emial_icon} alt="" />
              <input
                type="email"
                placeholder="E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(p) => setPass(p.target.value)}
              />
            </div>
          </div>
          <div className="forgot">
            Forgot Password <span>Click Here</span>
          </div>
          <div className="submit-con">
            <div
              className={
                validateLogin() ? "submit" : "submit gray"
              }
              onClick={
                validateLogin()
                  ? () => {
                      setAction("Log In");
                    }
                  : () => {
                      setAction("Sign Up");
                    }
              }
            >
              Log In
            </div>
            <button type="reset" className="submit" onClick={handleReset}>
              Reset
            </button>
          </div>
          {showWarning && (
            <div className={`warning ${showWarning ? "visible" : "hidden"}`}>
              Enter correct information
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
