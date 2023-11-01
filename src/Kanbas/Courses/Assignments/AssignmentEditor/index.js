import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  if (assignmentId !== "New") {
    let {title, description, until, from, due} = assignments.find((assignment) => assignment._id === assignmentId);
    var aTitle = title;
    var aDescription = description;
    var aUntil = until;
    var aFrom = from;
    var aDue = due;
  } else {
    var aTitle = "New Module 123";
    var aDescription = "New Description";
  }
  const handleSave = () => {
    if (assignmentId !== "New") {
      dispatch(updateAssignment({course: courseId, title: aTitle, description: aDescription, until: aUntil, from: aFrom, due: aDue, _id: assignmentId })); 
    } else {
      dispatch(addAssignment({ course: courseId, title: aTitle, description: aDescription, until: aUntil, from: aFrom, due: aDue}));
    }
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  }
  return (
    <div>
      <div className="ms-3 mb-3 col-3">
        <input defaultValue={aTitle} className="form-control" title="Assignment Title" onChange={(e) => aTitle = e.target.value}/>
        <textarea defaultValue={aDescription} className="form-control" title="Assignment Description" onChange={(e) => aDescription = e.target.value}/>
        <div className="input-group">
          <input defaultValue={aFrom} className="form-control" type="date" title="From Date" onChange={(e) => aFrom = e.target.value} />
          <input defaultValue={aUntil} className="form-control" type="date" title="Until Date" onChange={(e) => aUntil = e.target.value} />
          <input defaultValue={aDue} className="form-control" type="date" title="Due Date" onChange={(e) => aDue = e.target.value} />
        </div>
      </div>
      <hr/>
      <div style={{"textAlign": "right"}}>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}className="btn btn-secondary wd-gray-button">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-secondary wd-red-button me-2">
          Save
        </button>
        <hr/>
      </div>
    </div>
  );
}
export default AssignmentEditor