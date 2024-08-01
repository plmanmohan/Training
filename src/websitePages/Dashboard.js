import { Container, Typography } from "@mui/material";

const Dashboard = (props) => {
    return (
        <Container>
            <Typography variant="h2">Dashboard</Typography>
            <Typography variant="body1">This is the DashBoard Page</Typography>
            <Typography variant="body1">My name is {props.profileName}</Typography>
        </Container>
    );
}
export default Dashboard;