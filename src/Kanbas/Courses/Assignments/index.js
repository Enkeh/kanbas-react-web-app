import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus } from 'react-icons/fa6';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { FaGripVertical } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa6';
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./assignmentsReducer";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const handleDeleteAssignment = async (assignmentId) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  return (
    <div style={{"padding" : "10px"}}>
        <div class = "wd-flex-row-container" style={{"display": "inline"}}>
            <input name="assignment-name" placeholder="Search for Assignment" className="form-control" style={{"display": "inline", "width": "40%"}}/>
        </div>
        <div class="float-end">
            <button className="btn btn-secondary wd-gray-button"><FaPlus/> Group</button>
            <button className="btn btn-secondary wd-red-button"> <Link to={`/Kanbas/Courses/${courseId}/Assignments/New`} style={{"text-decoration": "none", "color": "white"}}>      
              <FaPlus/> Assignment</Link>
            </button>
            <button className="btn btn-secondary wd-gray-button"><FaEllipsisVertical/></button>
        </div>
        <hr/>
        <ul className="list-group">
            <li className="list-group-item list-group-item-secondary"><h4>ASSIGNMENTS</h4> </li>
            {assignments.filter((assignment) => assignment.course === courseId).map((assignment) => (
                <li key={assignment._id} className="list-group-item" style={{"border-left": "4px green solid", "display":"inline"}}>
                  <div className="float-end me-2">
                    <button className="btn btn-secondary wd-gray-button" onClick={() => handleDeleteAssignment(assignment._id)}><FaTrash /></button> 
                  </div>
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{"text-decoration": "none", "color": "black"}}>      
                    <h4 className = "wd-raise-icons ps-1"><FaGripVertical/><span className = "ps-3">{assignment.title}</span></h4>
                    <p className="ms-2">{assignment.description} | Available {assignment.from} to {assignment.until} | Due {assignment.due}</p>
                  </Link>
              </li>
            ))}
        </ul>
    </div>
  );
}
export default Assignments