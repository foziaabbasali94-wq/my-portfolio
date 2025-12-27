import React, { useEffect, useState } from 'react';
import styles from "./Aboutsection.module.css";
import { Box, Typography } from "@mui/material";

function About() {
  // State to hold contact form data from localStorage
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    // Load saved data from localStorage
    const savedData = JSON.parse(localStorage.getItem("contactFormData"));
    if (savedData) {
      setContactData(savedData);
    }
  }, []);

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

        {/* Display Contact Form Data from localStorage */}
        {contactData && (
          <Box className={styles.detail}>
            {/* <Typography variant="h9">Last Contact Form Submission:</Typography> */}
            <Typography><strong>Full Name:</strong> {contactData.fullName}</Typography>
            <Typography><strong>Email:</strong> {contactData.email}</Typography>
            <Typography><strong>Phone Number:</strong> {contactData.phonenumber}</Typography>
            <Typography><strong>Subject:</strong> {contactData.subject}</Typography>
            <Typography><strong>Message:</strong> {contactData.message}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default About;









































// import React from 'react';
// import styles from "./Aboutsection.module.css";
// import { Box,Typography,Button } from "@mui/material";
// function About() {
//   return (
//     <>
//     <Box className={styles.sprabt}>
//     <Typography className={styles.abt}>About</Typography>
//      <Typography className={styles.abt1}>Me</Typography>
//      </Box>
//      <Box className={styles.superdetail}>
//      <Box className={styles.detail}>
//       I am Fozia Abbas, a passionate front-end web developer specializing in React.js, and JavaScript. With a strong command of Material-UI, I craft intuitive and user-friendly web experiences. My focus is on building modern, responsive designs that deliver a seamless user experience.

//      </Box>
//      <Box className={styles.detail}>
//       I completed my matriculation at BISE Bahawalpur in 2011. Following that, I pursued my intermediate studies in FSc Pre-medical at BISE Bahawalpur. I later graduated with a degree in Botany from the Islamia University of Bahawalpur (IUB) in 2017.
//      </Box>
//      <Box className={styles.detail}>
//       I am a professional web developer with experience in designing and developing responsive, high-performance websites and web applications. I specialize in modern front-end technologies and focus on writing clean, maintainable code. I am committed to delivering efficient, user-centric solutions that meet business and client requirements.
//      </Box>
//      </Box>
//      </>
//   )
// }

// export default About;