import React from "react";
import styles from "./Contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

const Contact = () => {
  // Load saved data from localStorage (if exists)
  const savedData = JSON.parse(localStorage.getItem("contactFormData"));

  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phonenumber: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: savedData?.fullName || "",
      email: savedData?.email || "",
      phonenumber: savedData?.phonenumber || "",
      subject: savedData?.subject || "",
      message: savedData?.message || "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Save form data to localStorage
      localStorage.setItem("contactFormData", JSON.stringify(values));

      // Reset form
      resetForm();

      // Show success alert
      alert("Message sent successfully!");
    },
  });

  return (
    <>
      <Box className={styles.heading}>
        <Typography className={styles.title}>Contact</Typography>
        <Typography className={styles.subtitle}>Me</Typography>
      </Box>

      <Box className={styles.formBox}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            margin="normal"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phonenumber"
            margin="normal"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phonenumber && Boolean(formik.errors.phonenumber)
            }
            helperText={
              formik.touched.phonenumber && formik.errors.phonenumber
            }
          />

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            margin="normal"
            value={formik.values.subject}
            onChange={formik.handleChange}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            margin="normal"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <Button
            variant="outlined"
            type="submit"
            className={styles.btn}
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Contact;










































// import styles from "./Contact.module.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Box, Typography } from "@mui/material";

// const Contact = () => {
//   const validationSchema = Yup.object({
//     fullName: Yup.string().required("Full Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phonenumber: Yup.string().required("Phone number is required"),
//     subject: Yup.string().required("Subject is required"),
//     message: Yup.string().required("message is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       phonenumber: "",
//       subject: "",
//       message: "",
//     },
//     validationSchema,
//     onSubmit: (values,{resetForm}) => {
//       console.log("FORM DATA:", values);
//        resetForm();
//       alert("Message sent successfully!");
     
//     },
//   });

//   return (
//     <>
//       <Box className={styles.heading}>
//         <Typography className={styles.title}>Contact</Typography>
//         <Typography className={styles.subtitle}>Me</Typography>
//       </Box>

//       <Box className={styles.formBox}>
//         <Typography variant="h5" mb={2}>
        
//         </Typography>

//         <form onSubmit={formik.handleSubmit}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             name="fullName"
//             margin="normal"
            
//             value={formik.values.fullName}
//             onChange={formik.handleChange}
//             error={formik.touched.fullName && Boolean(formik.errors.fullName)}
//             helperText={formik.touched.fullName && formik.errors.fullName}
//           />

//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             margin="normal"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//           />

//           <TextField
//             fullWidth
//             label="Phone Number"
//             name="phonenumber"
//             margin="normal"
//             value={formik.values.phonenumber}
//             onChange={formik.handleChange}
//             error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
//             helperText={formik.touched.phonenumber && formik.errors.phonenumber}
//           />

//           <TextField
//             fullWidth
//             label="Subject"
//             name="subject"
//             margin="normal"
//             value={formik.values.subject}
//             onChange={formik.handleChange}
//             error={formik.touched.subject && Boolean(formik.errors.subject)}
//             helperText={formik.touched.subject && formik.errors.subject}
//           />
//            <TextField
//             fullWidth
//             label="Message"
//             name="message"
//             margin="normal"
//             value={formik.values.message}
//             onChange={formik.handleChange}
//             error={formik.touched.message && Boolean(formik.errors.message)}
//             helperText={formik.touched.message && formik.errors.message}
//           />

//           <Button
//             variant="outlined"
//             type="submit"
//             className={styles.btn}
//           >
//             Send Message
//           </Button>
//         </form>
//       </Box>
//     </>
//   );
// };

// export default Contact;
