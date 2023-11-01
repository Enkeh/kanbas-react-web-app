import { React, useState } from "react";
import { Link } from "react-router-dom";
function CourseEditor({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}) {
  const colors = ["blue", "red", "green", "darkblue", "gray", "lightgreen", "purple","yellow","darkred","lightblue","orange","darkgreen","black","magenta"];
  return (
    <div>
        <h2 className="ms-3 mt-3">Dashboard</h2>
        <hr />
        <h4 className="ms-3"><Link to="/Kanbas/Dashboard"><button className="btn btn-secondary wd-red-button">Save</button></Link> <span className="ps-2">Edit Courses</span></h4> 
        <hr />
        <div className="ms-3 mb-3 col-3"> 
            <input value={course.name} className="form-control" title="Course Name"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control" title="Course Number"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date" title="Start Date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date" title="End Date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <div className="d-flex">
                <button onClick={addNewCourse} className="btn btn-secondary" style={{"width" : "50%", "background-color" : "green"}}>Add</button>
                <button onClick={updateCourse} className="btn btn-secondary wd-gray-button" style={{"width" : "50%"}}>Update</button>
            </div>
        </div>
        <hr />
        <div className="list-group ms-3 mb-3 me-3 col-3">
            {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                {course.name}
                <div className="float-end">
                    <button
                        className="btn btn-secondary wd-gray-button"
                        onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                        }}>
                        Edit
                    </button>
                    <button
                        className="btn btn-secondary wd-red-button"
                        onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                        }}>
                        Delete
                    </button>
                </div>
            </Link>
            ))}
        </div>
    </div>
    );
}
export default CourseEditor