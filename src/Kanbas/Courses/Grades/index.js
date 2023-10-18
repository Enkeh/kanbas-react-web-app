import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport } from 'react-icons/fa6';
import { FaFileExport } from 'react-icons/fa6';
import { FaGear } from 'react-icons/fa6';
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div style={{"textAlign" : "right"}}>
                <button class="btn btn-secondary wd-gray-button"><FaFileImport/> Import</button>
                <button class="btn btn-secondary wd-gray-button"><FaFileExport/> Export</button>
                <button class="btn btn-secondary wd-gray-button"><FaGear/></button>
            </div>
            <hr/>
            <div className="table-responsive">
                <table className="table table-striped" style={{"table-layout": "fixed"}}>
                <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                </thead>
                <tbody>
                    {enrollments.map((enrollment) => {
                    const user = db.users.find((user) => user._id === enrollment.user);
                    return (
                        <tr>
                        <td>{user.firstName} {user.lastName}</td>
                        {assignments.map((assignment) => {
                            const grade = db.grades.find(
                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                            return (<td>{grade?.grade || ""}</td>);})}
                        </tr>);
                    })}          
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades