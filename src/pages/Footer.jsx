import React from "react";
import { GitHub, LinkedIn, Instagram, Email } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";

function Footer() {
  const navigate = useNavigate();

  return (
    <Box className={styles.footercontainer}>
      
      {/* Social Icons */}
      <Box className={styles.socialicons}>
        <a
          href="https://github.com/foziaabbasali94-wq"
          target="_blank"
         
        >
          <GitHub />
        </a>

        <a href="foziaabbasali94@gmail.com">
          <Email />
        </a>

        <a
          href="https://www.instagram.com/your-instagram"
          target="_blank"
     
        >
          <Instagram />
        </a>

        <a
          href="https://www.linkedin.com/in/fozia-abbas-4a4772207/
"
          target="_blank"
          
        >
          <LinkedIn />
        </a>
      </Box>

      {/* Footer Links */}
      <Box className={styles.footerlinks}>
        <Box onClick={() => navigate("/")}>Home</Box>
        <Box onClick={() => navigate("/about")}>About</Box>
        <Box onClick={() => navigate("/skills")}>Skills</Box>
        <Box onClick={() => navigate("/projects")}>Projects</Box>
        <Box onClick={() => navigate("/contact")}>Contact</Box>
      </Box>

      {/* Copyright */}
      <Typography className={styles.intro}>
        © 2025 Fozia Abbas | All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;






















































// import {GitHub,LinkedIn,Instagram,Email} from "@mui/icons-material";
// import { Box,Typography} from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import styles from "./About.module.css";
// function Footer() {
//     const navigate= useNavigate();
//     return(
//         <Box className={styles.footercontainer}>
//             <Box className={styles.socialicons}>
//                 <GitHub/> <Email/> <Instagram/> <LinkedIn/> 
//             </Box>
//             <Box className={styles.footerlinks}>
//                  <Box onClick={() => navigate( '/' )}>Home</Box>
//                   <Box onClick={() => navigate( '/about' )}>About</Box>
//                    <Box onClick={() => navigate( '/skills' )}>Skills</Box>
//                    <Box onClick={() => navigate( '/projects' )}>Projects</Box>
//                     <Box onClick={() => navigate( '/contact' )}>Contacts</Box>
           
//             </Box>
//             <Typography className={styles.intro}>
//                 @ 2025 Fozia Abbas | All Rights Reserved
//             </Typography>
//         </Box>
//     )
// }

// export default Footer;