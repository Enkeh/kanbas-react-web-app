import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaCircleUser } from 'react-icons/fa6';
import { FaGauge } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa6';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { FaInbox } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import { FaSquareYoutube } from 'react-icons/fa6';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaCircleQuestion } from 'react-icons/fa6';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [<FaCircleUser size={28}/>,<FaGauge size={28}/>,<FaBook size={28}/>,<FaRegCalendarDays size={28}/>,<FaInbox size={28}/>,<FaClock size={28}/>,<FaSquareYoutube size={28}/>,<FaArrowRightFromBracket size={28}/>,<FaCircleQuestion size={28}/>]
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigator">
        <div className="list-group">
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`wd-navigator-item ${pathname.includes(link) && "active"} ${link==="Account" && "account"}`}>
            <span>{icons[index]}</span><br/>
            {link}
            </Link>
        ))}
        </div>
    </div>
  );
}
export default KanbasNavigation