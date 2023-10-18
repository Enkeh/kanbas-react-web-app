import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h4>Assignment Name</h4>
      <input defaultValue={assignment.title} className="form-control mb-2" />
      <hr/>
      <div style={{"textAlign" : "right"}}>
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