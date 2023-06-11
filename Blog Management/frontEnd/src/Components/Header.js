import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Blogs.com</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/blogs">Home</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/addBlog">Add</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
