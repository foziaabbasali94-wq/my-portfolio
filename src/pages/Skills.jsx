import React from "react";
import styles from "./Skills.module.css";
import { Box, Typography } from "@mui/material";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 90 },
  { name: "Java Script", percent: 80 },
  { name: "React.js", percent: 80 },
  
];

function Skills() {
  return (
    
     <>
      <Box className={styles.sprskill}>
        <Typography className={styles.skill}>My</Typography>
        <Typography className={styles.skill}>Skills</Typography>
      </Box>

      <Box className={styles.skillCard}>
        {skills.map((skill, index) => (
          <Box key={index} className={styles.skillBox}>
            
            <Box className={styles.skillHeader}>
              <Typography className={styles.skillName}>
                {skill.name}
              </Typography>
              <Typography className={styles.percent}>
                {skill.percent}%
              </Typography>
            </Box>

            <Box className={styles.barContainer}>
              <Box
                className={styles.barFill}
                style={{ width: `${skill.percent}%` }}
              />
            </Box>

          </Box>
        ))}
      </Box>
    </>
  )
}


export default Skills;
