import { Navbar, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import "../styles/dashboard.css";

function DashboardNavbar() {

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar className="dashboard-navbar">

      <Container fluid className="navbar-container">

        {/* LEFT */}
        <Navbar.Brand className="brand">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png"
            alt="logo"
            width="28"
            className="me-2"
          />

          Personal Budget

        </Navbar.Brand>


        {/* RIGHT */}
        <div className="user-info">

          {user && (
            <>
              <img
                src={user.avatar}
                alt="avatar"
                className="avatar"
              />

              <span>
                Signed in as <b>{user.fullName}</b>
              </span>

              <Button
                variant="link"
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}

        </div>

      </Container>

    </Navbar>
  );
}

export default DashboardNavbar;