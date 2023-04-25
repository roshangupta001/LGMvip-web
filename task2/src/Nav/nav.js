import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./nav.css";

const Navv = (props) => {
  return (
    <div>
      <Navbar bg="light" className="navbar">
        <Container className="container">
          <Navbar.Brand href="#home">
            <p className="heading">Gupta Pvt Ltd</p>
          </Navbar.Brand>

          <Nav className="me-auto box">
            <Button variant="secondary" onClick={props.onClick}>
              Get Users
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navv;
