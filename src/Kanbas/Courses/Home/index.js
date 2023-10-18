import ModuleList from "../Modules/ModuleList";
import { FaBan } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaCrosshairs } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
function Home() {
  return (
    <div className="d-flex">
      <div className="col">
        <ModuleList/>
      </div>
      <div className="d-none d-xxl-block" style={{"padding-right" : "10px"}}>  
        <h2>Course Status</h2>
        <button class="btn btn-secondary wd-gray-button" style={{"width" : "50%"}}><FaBan className="me-2"/> Unpublish</button>
        <button class="btn btn-secondary" style={{"width" : "50%", "background-color" : "green"}}><FaCircleCheck style={{"background-color" : "green", "color" : "white"}} className="me-2"/> Published</button>
        <br/><br/>
        <ul class="list-group">
            <li class="list-group-item list-group-item-secondary"><FaFileImport className="me-2"/> Import Existing Content</li>
            <li class="list-group-item list-group-item-secondary"><FaCloudArrowUp className="me-2"/> Import From Commons</li>
            <li class="list-group-item list-group-item-secondary"><FaCrosshairs className="me-2"/> Choose Home Page</li>
            <li class="list-group-item list-group-item-secondary"><FaChartSimple className="me-2"/> View Course Stream</li>
            <li class="list-group-item list-group-item-secondary"><FaBullhorn className="me-2"/> New Announcement</li>
            <li class="list-group-item list-group-item-secondary"><FaChartSimple className="me-2"/> New Analytics</li>
            <li class="list-group-item list-group-item-secondary"><FaRegBell className="me-2"/> View Course Notifications</li>
        </ul>
        <br/>
        <h2>Coming Up <a href="#" class="float-end" style={{"color" : "black", "text-decoration" : "none", "font-size" : "medium"}}><FaRegCalendar/> View Calendar</a></h2>
        <ul class="list-group">
            <li class="list-group-item"><FaRegCalendar className="me-2"/> Lecture CS4550.12631.202410 Sep 7 at 11:45am</li>
            <li class="list-group-item"><FaRegCalendar className="me-2"/> Lecture CS4550.12631.202410 Sep 11 at 11:45am</li>
            <li class="list-group-item"><FaRegCalendar className="me-2"/> Lecture CS5610 06 SP23 Lecture Sep 11 at 6pm</li>
        </ul>
        </div>
    </div>
  );
}
export default Home