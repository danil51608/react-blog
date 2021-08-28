import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import PagesList from "./PagesList";
import SocialLinks from "./SocialLinks";
import Login from "./Login";
import Profile from "./Profile";

import classes from "./Navbar.module.css";

// const Navbar = props => {
//     const {user} = useContext(Context)
//     return (
//         // <nav className={classes['nav-body']}>
//         //     <SocialLinks />
//         //     <PagesList />
//         //     {!user && <Login />}
//         //     {user && <Profile />}
//         // </nav>
//     )
// }

const AppNavbar = (props) => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="light" expand="lg">
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
