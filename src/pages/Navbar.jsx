import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./Nav.module.css";
import logo from "../assests/logo.webp";

function Navbar() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");

    };

    const handleAbout = () => {
        navigate("/about");
    };
    const handleProjects = () => {
        navigate("/projects");

    };
    const handleSkills = () => {
        navigate("/skills");

    };
    const handleContact = () => {
        navigate("/contact");

    };
    return (

        <Box className={styles.nav}>
            <Box className={styles.img}>
            <img src={logo} alt="logo" className={styles.logo}/>
            </Box>
            <Box>
            <Box className={styles.navhead}>
            <Box onClick={handleHome}>Home</Box>
            <Box onClick={handleAbout}>About</Box>
            <Box onClick={handleProjects}>Projects</Box>
            <Box onClick={handleSkills}>Skills</Box>
            <Box onClick={handleContact}>Contacts</Box>
            </Box>
</Box>
        </Box>
    );
}
export default Navbar;