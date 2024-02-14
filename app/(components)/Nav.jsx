import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-8">
        <h4 style={{ color: "white" }}>Ticket Dashboard</h4>
        <Link href="/" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </Link>
        <Link href="/TicketPage/new" className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <span>New Ticket</span>
        </Link>
      </div>
      {/* <div style={{ display: "flex", alignItems: "center" }}>
        <p className=" text-default-text">employee.role@email.com</p>
      </div> */}
    </nav>
  );
};

export default Nav;
