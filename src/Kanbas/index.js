import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
function Kanbas() {
    return(
      <div className="d-flex">
         <div className="overflow-y-scroll position-fixed" style={{"background-color" : "black", "height" : "100%"}}>
            <KanbasNavigation/>
         </div>
         <div style={{"margin-left" : "82px", "width" : "100%"}}>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
         </div>
      </div>
    );
 }
 export default Kanbas