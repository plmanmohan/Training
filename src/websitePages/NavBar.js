import { AppBar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>My portfolio</Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About Me</Button>
            <Button color="inherit" component={Link} to="/conactme">Contact Me</Button>
            <Button color="inherit" component={Link} to="/project">Project</Button>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </AppBar>
    );
}

export default Navbar;