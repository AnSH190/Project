import React, {useState, useEffect} from "react";
import "./Mini.css";
import {Link, Route, useLocation, Routes} from "react-router-dom";
import user from "../Assets/person.jpg";
import ras from "../Assets/ras.webp";
import talash from "../Assets/talash.webp";
import celeb from "../Assets/celeb.webp";
import seminars from "../Assets/seminars.webp";
import sport from "../Assets/sport.webp";
import hi from "../Assets/4.webp";
import Switch from "react-switch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faCalendar,
  faEnvelope,
  faBook,
  faMale,
  faUniversity,
  faArrowUpRightFromSquare,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Mini = ({selectedUser, results}) => {
  const [action, setAction] = useState("My Profile");
  const [greeting, setGreeting] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogInClick = () => {
    window.location.reload();
  };

  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }

  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0px";
  // }

  const handleOpenNav = () => {
    setSidebarOpen(true);
    document.getElementById("mySidenav").style.width = "250px";
  };

  const handleCloseNav = () => {
    setSidebarOpen(false);
    document.getElementById("mySidenav").style.width = "0px";
  };
  useEffect(() => {
    // Get the current hour
    const currentHour = new Date().getHours();

    // Define greeting messages based on time of day
    let newGreeting = "";
    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      newGreeting = "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 20) {
      newGreeting = "Good Evening";
    } else {
      newGreeting = "Good Night";
    }

    // Set the greeting message
    setGreeting(`HI ${selectedUser.name}, ${newGreeting}!`);
  }, [selectedUser]);

  const [examSections, setExamSections] = useState({
    schedule: false,
    results: false,
    resources: false,
    registration: false,
  });

  // Function to toggle the visibility of a specific exam section
  // const toggleExamSection = (section) => {
  //   setExamSections((prevState) => ({
  //     ...prevState,
  //     [section]: !prevState[section],
  //   }));
  // };

  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark-mode"));
    return savedMode || false; // Default to light mode if the user hasn't selected a preference.
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleExamSection = (section) => {
    setExamSections((prevState) => ({
      schedule: section === "schedule" ? !prevState.schedule : false,
      results: section === "results" ? !prevState.results : false,
      resources: section === "resources" ? !prevState.resources : false,
      registration:
        section === "registration" ? !prevState.registration : false,
    }));
  };
  return (
    <div className="main">
      <div className="conttt">
        <div className="profile">
          <div className="p">
            <img src={selectedUser.profile} alt="Profile" className="pfp" />
            {/* <p id="name"> Ankush vaswani </p> */}
            <p
              id="name"
              onClick={() => {
                setAction("My Profile");
              }}
            >
              {" "}
              {selectedUser.name}{" "}
            </p>
          </div>
          <button
            className="log"
            // onClick={() => {
            //   setAction("Sign Up");
            // }}
            onClick={handleLogInClick}
          >
            Log In
          </button>
        </div>
        <div className="greetting">
          <span
            style={{fontSize: "30px", cursor: "pointer", float: "left"}}
            onClick={handleOpenNav}
          >
            &#9776;
          </span>
          <div
            id="mySidenav"
            className={`sidenav ${sidebarOpen ? "open" : ""}`}
          >
            <a href="#" className="closebtn" onClick={handleCloseNav}>
              &times;
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("My Profile");
                handleCloseNav();
              }}
            >
              My Profile
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("Payments");
                handleCloseNav();
              }}
            >
              Payments
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("Exams");
                handleCloseNav();
              }}
            >
              Exams
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("Results");
                handleCloseNav();
              }}
            >
              Results
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("Academics");
                handleCloseNav();
              }}
            >
              Academics
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("Events");
                handleCloseNav();
              }}
            >
              Events
            </a>
            <a
              href="#"
              onClick={() => {
                setAction("Faculty Details");
                handleCloseNav();
              }}
            >
              Faculty Details
            </a>
          </div>

          {/* <img src={user} alt="" className='pfp' /> */}
          {/* <h3>HI Ankush Vaswani, Good Morning!</h3> */}
          {/* <h3>HI {selectedUser.name}, Good Morning!</h3> */}
          <h3>{greeting} </h3>
          <div className="dark-mode-toggle">
            <label htmlFor="dark-mode-toggle">
              <Switch
                id="dark-mode-toggle"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
            </label>
          </div>
        </div>
        <div className="mains">
          <div class="tab">
            <button
              class="tablinks"
              onClick={() => {
                setAction("My Profile");
              }}
              id="defaultOpen"
            >
              My Profile
            </button>
            <button
              class="tablinks"
              onClick={() => {
                setAction("Payments");
              }}
            >
              Payments
            </button>
            <button
              class="tablinks"
              onClick={() => {
                setAction("Exams");
              }}
            >
              Exams
            </button>
            <button
              class="tablinks"
              onClick={() => {
                setAction("Results");
              }}
            >
              Results
            </button>
            <button
              class="tablinks"
              onClick={() => {
                setAction("Academics");
              }}
            >
              Academics
            </button>
            <button
              class="tablinks"
              onClick={() => {
                setAction("Events");
              }}
            >
              Events
            </button>
            {/* <button
              class="tablinks"
              onClick={() => {
                setAction("Faculty Details");
              }}
            >
              Faculty Details
            </button> */}
            <button
              class="tablinks"
              onClick={() => {
                setAction("Faculty Details");
              }}
            >
              Faculty Details
            </button>
          </div>

          {action === "My Profile" ? (
            <div id="London" class="tabcontent profileee">
              <div class="card">
                <img src={selectedUser.profile} alt="Profile" className="pro" />
                <div class="containerss">
                  <h4>
                    <b> {selectedUser.name} </b>
                  </h4>
                  <p>Current Semester - 3</p>
                  <p> {selectedUser.e} </p>
                </div>
              </div>
              <div className="profile-h">
                <div className="h-">
                  <img src={user} alt="" />
                  <h4>{selectedUser.h4}</h4>
                  {/* <h4>Ankush Mahesh Vaswani</h4> */}
                </div>
                <div className="h-">
                  {/* <img src={user} alt="" /> */}
                  <FontAwesomeIcon icon={faMobile} />
                  <h4>Mobile :- {selectedUser.mobile} </h4>
                  {/* <h4>Mobile :- 9012666255</h4> */}
                </div>
                <div className="h-">
                  {/* <img src={user} alt="" /> */}
                  <FontAwesomeIcon icon={faMale} />
                  <h4>Gender:- Male</h4>
                </div>
                <div className="h-">
                  {/* <img src={user} alt="" /> */}
                  <FontAwesomeIcon icon={faBook} />
                  <h4>Course:- BCA</h4>
                </div>
                <div className="h-">
                  {/* <img src={user} alt="" /> */}
                  <FontAwesomeIcon icon={faUniversity} />
                  <h4>Silver Oak University</h4>
                </div>
                <div className="h-">
                  {/* <img src={user} alt="" /> */}
                  <FontAwesomeIcon icon={faCalendar} />
                  <h4>DOB:- {selectedUser.dob} </h4>
                  {/* <h4>DOB:- 04-09-2004</h4> */}
                </div>
                <div className="h-">
                  {/* <img src={user} alt="" /> */}
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h4>Email:- {selectedUser.em}</h4>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {action === "Payments" ? (
            <div id="London" class="tabcontent">
              <div className="payment-cont">
                <div className="amount">
                  <h2>Total Outstanding Amount</h2>
                  <h3> {selectedUser.fees} Rs.</h3>
                  <button className="pay">Pay Now</button>
                </div>
                <div className="payments-">
                  <button className="payment-gate">Pay With Card</button>
                  <button className="payment-gate">Pay With UPI </button>
                  <button className="payment-gate">Pay With Net Banking</button>
                  <button className="payment-gate">EMI</button>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {action === "Exams" ? (
            <div id="Tokyo" class="tabcontent">
              <div className="exams-cont">
                <div className="exam-section">
                  <h3
                    onClick={() => {
                      setAction("Results");
                    }}
                  >
                    Past Exam Results
                  </h3>
                  {examSections.results && <div className="exam-content"></div>}
                </div>
                <div className="exam-section">
                  <h3 onClick={() => toggleExamSection("schedule")}>
                    Exam Schedule
                  </h3>
                  {examSections.schedule && (
                    <div className="exam-content">
                      <p>Your upcoming exam schedule is as follows:</p>
                      <ul>
                        <li>
                          Mathematics: Monday, October 10th, 2023 at 9:00 AM
                        </li>
                        <li>
                          .NET Programming: Tuesday, October 11th, 2023 at 10:30
                          AM
                        </li>
                        <li>
                          Data Structures: Wednesday, October 12th, 2023 at 2:00
                          PM
                        </li>
                        <li>
                          Operating Systems: Thursday, October 13th, 2023 at
                          11:15 AM
                        </li>
                        <li>
                          Digital Electronics of Technology: Friday, October
                          14th, 2023 at 3:45 PM
                        </li>
                      </ul>
                      <p>
                        Make sure to prepare well for your exams and arrive at
                        the examination venue on time.
                      </p>
                    </div>
                  )}
                </div>
                <div className="exam-section">
                  <h3 onClick={() => toggleExamSection("resources")}>
                    Study Resources
                  </h3>
                  {examSections.resources && (
                    <div className="exam-content">
                      <div className="resou">
                        <p>For study resources kindly click on this icon.</p>
                        <a
                          href="https://drive.google.com/drive/folders/1fXJ9ZixN0yqSVXelXDAKZpxhCklnlzsW?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faUpRightFromSquare}
                            size="lg"
                            style={{color: "#000000"}}
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="exam-section">
                  <h3 onClick={() => toggleExamSection("registration")}>
                    Exam Registration
                  </h3>
                  {examSections.registration && (
                    <div className="exam-content">
                      <div className="resou">
                        <p>For registration fill up the form.</p>
                        <a
                          href="https://forms.gle/Y2rd3nVJi2zS5MVF"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faUpRightFromSquare}
                            size="lg"
                            style={{color: "#000000"}}
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {action === "Results" ? (
            <div id="Tokyo" class="tabcontent">
              <div className="results-cont">
                <h2>Exam Results</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Score (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, index) => (
                      <tr key={index}>
                        <td>{result.subject}</td>
                        <td>{result.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="re">
                  <h3>CGPA :- {selectedUser.cgpa} </h3>
                  <h3>Percentage :- {selectedUser.per}% </h3>
                  <h3> {selectedUser.status} </h3>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {action === "Academics" ? (
            <div id="Tokyo" class="tabcontent">
              <div className="aca-cont">
                <h2>Academics</h2>
                <ul>
                  <li>Current Semester: 3</li>
                  <li>Course: Bachelor of Computer Applications (BCA)</li>
                  <li>University: Silver Oak University</li>
                </ul>
                <h3>Assignments</h3>
                <div className="assignments">
                  <div class="checkbox-wrapper-33">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        class="checkbox__trigger visuallyhidden"
                      />
                      <span class="checkbox__symbol">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1"
                          viewBox="0 0 28 28"
                          height="28px"
                          width="28px"
                          class="icon-checkbox"
                          aria-hidden="true"
                        >
                          <path d="M4 14l8 7L24 7"></path>
                        </svg>
                      </span>
                      <p class="checkbox__textwrapper">
                        Assignment 1: Digital Electronics of Technology
                      </p>
                    </label>
                  </div>
                  <div class="checkbox-wrapper-33">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        class="checkbox__trigger visuallyhidden"
                      />
                      <span class="checkbox__symbol">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1"
                          viewBox="0 0 28 28"
                          height="28px"
                          width="28px"
                          class="icon-checkbox"
                          aria-hidden="true"
                        >
                          <path d="M4 14l8 7L24 7"></path>
                        </svg>
                      </span>
                      <p class="checkbox__textwrapper">
                        Assignment 2: Oprating Systems
                      </p>
                    </label>
                  </div>
                  <div class="checkbox-wrapper-33">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        class="checkbox__trigger visuallyhidden"
                      />
                      <span class="checkbox__symbol">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1"
                          viewBox="0 0 28 28"
                          height="28px"
                          width="28px"
                          class="icon-checkbox"
                          aria-hidden="true"
                        >
                          <path d="M4 14l8 7L24 7"></path>
                        </svg>
                      </span>
                      <p class="checkbox__textwrapper">
                        Assignment 2: Data Structures
                      </p>
                    </label>
                  </div>
                  <div class="checkbox-wrapper-33">
                    <label class="checkbox">
                      <input
                        type="checkbox"
                        class="checkbox__trigger visuallyhidden"
                      />
                      <span class="checkbox__symbol">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1"
                          viewBox="0 0 28 28"
                          height="28px"
                          width="28px"
                          class="icon-checkbox"
                          aria-hidden="true"
                        >
                          <path d="M4 14l8 7L24 7"></path>
                        </svg>
                      </span>
                      <p class="checkbox__textwrapper">
                        Assignment 2: Building Applications With .NET(C#)
                      </p>
                    </label>
                  </div>
                  {/* Add more assignments as needed */}
                </div>
                <h3>Daily Classwork Updates</h3>

                <ul className="classwork-updates">
                  <li>Chapter 1 of .NET</li>
                  <li>Chapter 5 of Data Structures</li>
                  <li>Chapter 2 of Digital Electronics in Technology</li>
                  <li>Chapter 3 of Oprating System</li>
                </ul>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {action === "Events" ? (
            <div id="Tokyo" class="tabcontent">
              {/* <div className="event-cont row">
                <div className="column">
                  <a
                    href="https://silveroakuni.ac.in/talash-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="card card1">
                      <div>Foundation Day</div>
                    </div>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://silveroakuni.ac.in/junoon-2023-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="card card2">
                      <div>Junnon 2023</div>
                    </div>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://silveroakuni.ac.in/celebrity-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="card card3">
                      <div>Celebrities At SOU</div>
                    </div>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://silveroakuni.ac.in/seminar-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="card card4">
                      <div>Seminars</div>
                    </div>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://silveroakuni.ac.in/sport-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="card card5">
                      <div>Rangmanch 2022</div>
                    </div>
                  </a>
                </div>
                <div className="column">
                  <a
                    href="https://silveroakuni.ac.in/rass-rasiya-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div class="card card6">
                      <div>Rass Rasiya 2022</div>
                    </div>
                  </a>
                </div>
              </div> */}
              <div class="row">
                <div class="column">
                  <div class="card2">
                    <a
                      href="https://silveroakuni.ac.in/junoon-2023-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={hi} alt="junnon" />
                    </a>
                    <h3>Junnon 2023</h3>
                  </div>
                </div>

                <div class="column">
                  <div class="card2">
                    <a
                      href="https://silveroakuni.ac.in/celebrity-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={celeb} alt="celbs" />
                    </a>
                    <h3>Celebrities At SOU</h3>
                  </div>
                </div>
                <div class="column">
                  <div class="card2">
                    <a
                      href="https://silveroakuni.ac.in/seminar-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={seminars} alt="Seminars" />
                    </a>
                    <h3>Seminars</h3>
                  </div>
                </div>
                <div class="column">
                  <div class="card2">
                    <a
                      href="https://silveroakuni.ac.in/rass-rasiya-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ras} alt="Ras garba 2023" />
                    </a>
                    <h3>Rass Rasiya 2023</h3>
                  </div>
                </div>

                <div class="column">
                  <div class="card2">
                    <a
                      href="https://silveroakuni.ac.in/sport-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={sport} alt="Sports day" />
                    </a>
                    <h3>Sports Day</h3>
                  </div>
                </div>

                <div class="column">
                  <div class="card2">
                    <a
                      href="https://silveroakuni.ac.in/talash-gallery"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={talash} alt="Talash" />
                    </a>
                    <h3>Talash</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {action === "Faculty Details" ? (
            <div id="Tokyo" class="tabcontent">
              <div className="fac-cont">
                <table>
                  <thead>
                    <tr>
                      <th>Name of Faculty</th>
                      <th>Subject</th>
                      <th>E-Mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Prof. Grishma</td>
                      <td>Data Structures</td>
                      <td>grishma@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Mukti</td>
                      <td>Data Structures</td>
                      <td>mukti@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Nitwik</td>
                      <td>Data Structures</td>
                      <td>nitwik@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Vishal P</td>
                      <td>ASP.NET</td>
                      <td>vishalp@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Vishal</td>
                      <td>PHP</td>
                      <td>vishal@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Deep</td>
                      <td>ASP.NET</td>
                      <td>deep@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Lokesh Kumar</td>
                      <td>Operating System</td>
                      <td>lokesh@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Alaap Jagdale </td>
                      <td>DET</td>
                      <td>alaap@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Priyakant</td>
                      <td>Data Structures</td>
                      <td>priyakant@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Dipika</td>
                      <td>PHP</td>
                      <td>dipika@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Prof. Akash</td>
                      <td>ASP.NET</td>
                      <td>akash@gmail.com</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mini;
