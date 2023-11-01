import { React } from "react";
import { Link } from "react-router-dom";
import { FaBorderAll } from 'react-icons/fa6';
import { FaEllipsisVertical } from 'react-icons/fa6';
function Dashboard({ courses }) {
  const colors = ["blue", "red", "green", "darkblue", "gray", "lightgreen", "purple","yellow","darkred","lightblue","orange","darkgreen","black","magenta"];
  return (
    <div>
        <h2 className="ms-3 mt-3">Dashboard</h2>
        <hr />
        <h4 className="ms-3"><Link to="/Kanbas/CourseEditor"><button className="btn btn-secondary wd-gray-button">Edit</button></Link> <span className="ps-2">Published Courses ({courses.length})</span></h4>
        <hr />
        <div className="d-flex flex-wrap me-3" style={{"max-width" : "1200px"}}>
            {courses.map    ((course) => {
            let tempColor = colors[courses.indexOf(course)];
            return (
            <div className="card ms-3 mb-3" style={{"width" : "250px"}}>
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                    <div style={{"background-color" : tempColor, "height": "120px"}} className="card-img-top">
                        <FaEllipsisVertical className="float-end m-2" style={{"color" : "white"}}/>
                    </div>
                    <div class="card-body mb-10">
                        <h6 className="card-title" style={{"color" : tempColor}}>{course.number} {course.name}</h6>
                        <p className="card-text">
                        {course.startDate} | {course.endDate} <br/><FaBorderAll style={{"fontSize" : "x-small"}}/>
                        </p>
                    </div>
                </Link>
            </div>)})}
        </div>
    </div>
    );
}
export default Dashboard