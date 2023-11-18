import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import CourseEditor from "./Dashboard/CourseEditor";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
function Kanbas() {
   const [courses, setCourses] = useState([]);
   const URL = "http://localhost:4000/api/courses";
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);
   const [course, setCourse] = useState({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
   });
   const addNewCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([response.data, ...courses, /* { ...course, _id: new Date().getTime().toString() } */]);
   };
   const deleteCourse = (courseId) => {
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = async () => {
      const response = await axios.put(
         `${URL}/${course._id}`,
         course
       );   
      setCourses(
         courses.map((c) => {
         if (c._id === course._id) {
            return response.data;
         } else {
            return c;
         }
         })
      );
   };
    return(
      <Provider store={store}>
         <div className="d-flex">
            <div className="overflow-y-scroll position-fixed" style={{"background-color" : "black", "height" : "100%"}}>
               <KanbasNavigation/>
            </div>
            <div style={{"margin-left" : "82px", "width" : "100%"}}>
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={<Dashboard courses={courses} />} />
                  <Route path="CourseEditor" element={<CourseEditor
                     courses={courses}
                     course={course}
                     setCourse={setCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse}/>}/>
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
               </Routes>
            </div>
         </div>
      </Provider>
    );
 }
 export default Kanbas