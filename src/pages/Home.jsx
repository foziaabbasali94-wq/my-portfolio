import React from 'react';
import styles from "./About.module.css";
import { Box,Typography,Button } from "@mui/material";
import pic from "../assests/pic.png";

function Home() {
  return (
    <>
    <Box className={styles.superhead}>
<Box className={styles.head}>
    <Typography className={styles.title}>Hi,I am</Typography>
     <Typography className={styles.title1}>Fozia Abbas</Typography>
      <Typography className={styles.detail}>I am Fozia Abbas, a dedicated and detail-oriented Web Developer with a strong foundation in frontend development and a growing expertise in modern web technologies. I specialize in building responsive, accessible, and performance-focused web applications that deliver a seamless user experience.
My technical skill set includes HTML, CSS, JavaScript, and React.js.
I am committed to producing high-quality work, meeting project requirements, and collaborating effectively to deliver reliable and scalable solutions. I am currently seeking opportunities to contribute to real-world projects where I can add value while continuing to grow as a professional web developer.</Typography>

</Box>

<Box className={styles.head1}>
<img src={pic} alt="pic" className={styles.pic}/>
</Box>

</Box>
<Box className={styles.herobuttons}>

            <button className={styles.btngradient}>Contact</button>
            <button className={styles.btngradient}>Download CV</button>
          </Box>

</>

  );
}
export default Home;