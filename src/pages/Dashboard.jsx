import Form from "react-bootstrap/Form";
import search from "../assets/search.svg";
import "../App.css";
import Button from "../component/Button";
import Tables from "../component/Table";
const Dashboard = () => {
  return (
    <>
      <h3 className="title">Student management System</h3>
      <section className="search-section">
        <div className="search">
          <Form.Control
            placeholder="Search"
            type="password"
            id="inputPassword5"
            className="search-input"
            aria-describedby="passwordHelpBlock"
          />
          <img src={search} alt="search" className="search-icon" />
        </div>
        <div>
          <Button variant="primary" className="add-btn">
            ADD
          </Button>
        </div>
      </section>
      <section>
        <Tables />
      </section>
    </>
  );
};

export default Dashboard;
