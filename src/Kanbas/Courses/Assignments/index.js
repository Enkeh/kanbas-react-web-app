import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus } from 'react-icons/fa6';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { FaGripVertical } from 'react-icons/fa6';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div style={{"padding" : "10px"}}>
        <div class = "wd-flex-row-container" style={{"display": "inline"}}>
            <input name="assignment-name" placeholder="Search for Assignment" className="form-control" style={{"display": "inline", "width": "40%"}}/>
        </div>
        <div class="float-end">
            <button className="btn btn-secondary wd-gray-button"><FaPlus/> Group</button>
            <button className="btn btn-secondary wd-red-button"><FaPlus/> Assignment</button>
            <button className="btn btn-secondary wd-gray-button"><FaEllipsisVertical/></button>
        </div>
        <hr/>
        <ul className="list-group">
            <li className="list-group-item list-group-item-secondary"><h4>ASSIGNMENTS</h4> </li>
            {courseAssignments.map((assignment) => (
            <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{"text-decoration": "none"}}>
                <li key={assignment._id} className="list-group-item" style={{"border-left": "4px green solid"}}>        
                    <h4 className = "wd-raise-icons ps-1"><FaGripVertical/><span className = "ps-3"></span>{assignment.title}<span/></h4>
                </li>
            </Link>
            ))}
        </ul>
    </div>
  );
}
export default Assignments