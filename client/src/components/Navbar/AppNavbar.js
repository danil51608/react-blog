//IMPORT MODULES
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

//IMPORT COMPONENTS
import SocialLinks from "./SocialLinks";
import Login from "./Login";
import Profile from "./Profile";

//IMPORT REQUIREMENTS
import { Context } from "../../context/Context";

//IMPORT STYLE
import classes from "./Navbar.module.css";

const AppNavbar = () => {
  //import user from context
  const { user } = useContext(Context);

  return (
    <Navbar bg="light" expand="lg" className={classes.navbar}>
      <Container fluid={true} className={classes.container}>
        <Navbar.Brand>
          {!user && <Login />}
          {user && <Profile />}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.menuBtn}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" className={classes.navbar}>
            <Nav.Link>
              <Link to="/">HOME</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/aboutme">ABOUT</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/aboutme">CONTACT</Link>
            </Nav.Link>
            <Nav.Link>{user && <Link to="/create">WRITE</Link>}</Nav.Link>
          </Nav>
          <SocialLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
