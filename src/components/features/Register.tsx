import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Register = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

  };

  return (
    // <div style={{ height: "100%" , width : "30vw",
    //               padding: 0,
    //               margin: 0,  display: "flex", background: "white", 
    //                alignItems: "center", justifyContent: "center", 
    //               flexDirection: "row",
    //                }}>
    <Container component="main" sx={{
      alignItems: "center", justifyContent: "center",
      flexFlow: "column",
    }} >
      <Box sx={{ width: "10vw" }} > Demo</Box>
      <Box
        sx={{
          // bgcolor: '#cfe8fc',
          // marginTop: 8,
          // alignItems: "center",
          // justifyContent: "center",

          width: "auto"
        }}
      >
        Login
      </Box>
    </Container>
    // </div>
  );
}

export default Register;