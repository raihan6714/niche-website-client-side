import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@restart/ui/esm/Button';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBike from '../AddBike/AddBike';
import ManageBookings from '../ManageBookings/ManageBookings';
import Review from '../Review/Review';
import MyBooking from '../MyBooking/MyBooking';
const drawerWidth = 200;

const Dashboard = (props) => {
    const { user, handleLogout } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);
    const { window } = props;
    let { path, url } = useRouteMatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const drawer = (
        <div>
            {
                user?.email && <Typography variant="h6" noWrap component="div">
                    <img style={{ verticalAlign: 'middle', borderRadius: '50%' }} src={user?.photoURL} alt="Avatar" className="ms-5" />
                    <h5 className="ms-5">{user.displayName}</h5>
                </Typography>

            }
            <Toolbar />
            <Divider />
            <Link className="ms-4 mb-5 text-decoration-none fs-5" to={`${url}`}> Dashboard </Link>
            <Link className="ms-4 mb-5 text-decoration-none fs-5" to={`${url}/myBooking`}>MyBooking</Link>
            <br />
            <Link className="ms-4 mb-5 text-decoration-none fs-5" to={`${url}/review`}>Add Review</Link>
            <Divider />
            <Link className="ms-4 mb-5 text-decoration-none fs-5" to={`${url}/addBike`}>Add Bikes</Link>
            <br />
            <Link className="ms-4 mb-5 text-decoration-none fs-5" to={`${url}/makeAdmin`}>Add Admin</Link>
            <br />
            <Link className=" mb-4 text-decoration-none fs-5" to={`${url}/managebooking`}>Manage Bookings</Link>
            <NavLink to="/login">
                <Button onClick={handleLogout} className="btn btn-info ms-5 mt-4" variant="dark">Logout</Button>
            </NavLink>
        </div>
    );
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container =
        window !== undefined ? () => window().document.body : undefined;
    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <Link className="ms-4 mb-5 text-decoration-none fs-5 text-light" to="/motobikes"> Moto Bikes </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/myBooking`}>
                        <MyBooking />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/addbike`}>
                        <AddBike />
                    </Route>
                    <Route path={`${path}/managebooking`}>
                        <ManageBookings />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

Dashboard.propTypes = { window: PropTypes.func };
export default Dashboard;