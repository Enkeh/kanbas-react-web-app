import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { FaBars } from 'react-icons/fa6';
import "./Modules/index.css";

function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div style={{"padding-left" : "10px", "padding-right" : "10px", "padding-top" : "10px"}}>
      <h3 style={{"color" : "red"}}>
        <nav style={{"--bs-breadcrumb-divider" : ">"}} aria-label = "breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item wd-raise-icons"> <FaBars/> <span className = "ps-2">{course.number} {course.name}</span></li>
                {path.length>5 ? <><li className="breadcrumb-item">{path[4]}</li><li className="breadcrumb-item active">{path[5]}</li></> : <li className="breadcrumb-item active">{path[4]}</li>}
            </ol>
        </nav>
      </h3>
      <hr/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses