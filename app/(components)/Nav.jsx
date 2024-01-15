import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <h4 style={{ color: "white" }}>Ticket Dashboard</h4>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p className=" text-default-text">employee.role@email.com</p>
      </div>
    </nav>
  );
};

export default Nav;
