import React from 'react';
import styles from "./Aboutsection.module.css";
import { Box,Typography,Button } from "@mui/material";
function About() {
  return (
    <>
    <Box className={styles.sprabt}>
    <Typography className={styles.abt}>About</Typography>
     <Typography className={styles.abt1}>Me</Typography>
     </Box>
     <Box className={styles.superdetail}>
     <Box className={styles.detail}>
      I am Fozia Abbas, a passionate front-end web developer specializing in React.js, and JavaScript. With a strong command of Material-UI, I craft intuitive and user-friendly web experiences. My focus is on building modern, responsive designs that deliver a seamless user experience.

     </Box>
     <Box className={styles.detail}>
      I completed my matriculation at BISE Bahawalpur in 2011. Following that, I pursued my intermediate studies in FSc Pre-medical at BISE Bahawalpur. I later graduated with a degree in Botany from the Islamia University of Bahawalpur (IUB) in 2017.
     </Box>
     <Box className={styles.detail}>
      I am a professional web developer with experience in designing and developing responsive, high-performance websites and web applications. I specialize in modern front-end technologies and focus on writing clean, maintainable code. I am committed to delivering efficient, user-centric solutions that meet business and client requirements.
     </Box>
     </Box>
     </>
  )
}

export default About;