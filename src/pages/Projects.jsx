import styles from "./Projects.module.css";
import { Box, Typography,Button } from "@mui/material";
import deliveryboy from "../assests/deliveryboy.png";
import job from "../assests/job.webp";
import kfc from "../assests/kfc.webp";
import lifeScript from "../assests/lifeScript.webp";
import logo from "../assests/spiritual.svg";
import tdc from "../assests/tdc.webp";
import vedio from "../assests/logo (1).svg";
const project=[
        { img: deliveryboy, title: "Deliver X" ,detail:"KFC, or Kentucky Fried Chicken, is a fast-food chain that serves fried chicken.",link:"https://deliver-x-nu.vercel.app/"},
        { img: job, title: "JobJelly",detail:"Track your progress, improve your resume, and see how you match up to your dream job.",link:"https://www.jobjelly.io/" },
        { img: kfc, title: "KFC",detail:"KFC, or Kentucky Fried Chicken, is a fast-food chain that serves fried chicken.",link:"https://kfc-web.vercel.app/" },
        { img: lifeScript, title: "Life Script",detail:"We ask thoughtful questions about their life, compiling their answers into a beautifully crafted keepsake book to be treasured for generations.",link:"https://thelifescript.com/" },
        { img: logo, title: "Spiritual Healer",detail:"Welcome to Your Healing Journey. Experience the uplifting power of Spiritual Healing and restore your balance.",link:"https://thespiritualhealers.com/" },
        { img: tdc, title: "The Dev Corporate",detail:"We Engineer Smart Tech Soutions. Global software partner helping businesses create innovative & fundable products.",link:"https://thedevcorporate.com/" },
      ]
function Projects() {
  return (
    <Box className={styles.projectsGrid}>
      {project.map((item, index) => (
        <Box key={index} className={styles.card}>
          <div className={styles.circleImg}>
            <img src={item.img} alt={item.title} />
          </div>
          <Typography className={styles.cardTitle}>
            {item.title}
          </Typography>
           <Typography className={styles.carddetail}>
            {item.detail}
          </Typography>
          <Button className={styles.btn} onClick={() => window.open(item.link, "_blank")}>Click Here</Button>

        </Box>
      ))}
    </Box>
  );
}

export default Projects;
