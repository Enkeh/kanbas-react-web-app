import axios from "axios";
import React, { useEffect, useState } from "react";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/../a5/assignment`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios.get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    const updateScore = async () => {
      const response = await axios.get(`${URL}/score/${assignment.score}`);
      setAssignment(response.data);
    };
    const updateCompleted = async () => {
      const response = await axios.get(`${URL}/completed/${assignment.completed}`);
      setAssignment(response.data);
    };
    useEffect(() => {
      fetchAssignment();
    }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />

      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number" />

      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed
      </a>
      <input
        checked={assignment.completed}
        onClick={(e) => setAssignment({ ...assignment,
          completed: !assignment.completed })}
        className="mb-2"
        type="checkbox" />
        
      <br/><br/>
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
          Update Title to: {assignment.title}
      </button>
      <button onClick={updateScore} className="w-100 btn btn-primary mb-2">
          Update Score to: {assignment.score}
      </button>
      <button onClick={updateCompleted} className="w-100 btn btn-primary mb-2">
          Update Completed to: {(assignment.completed).toString()}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
          Fetch Assignment
      </button>
      <h4>Retrieving Properties</h4>
      <a
        href={URL + "/title"}
        className="btn btn-primary me-2">
        Get Title
      </a>
      <h4>Retrieving Objects</h4>
      <a href={URL}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
    </div>
  );
}
export default WorkingWithObjects