import { Box,Typography,Button,TextField } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [login, signup] = useState('false')
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
  return (
    <Box sx={{width:'100vw', height:'100vh'}}>
<Box sx={{width:'50vw', backgroundColor:'yellow'}}>
<Box>
    Showwcase
</Box>
<Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            padding: "5px",
          }}
        >
          <Typography
            fontSize="1.8rem"
            textAlign="center"
            color="#0000FF"
            fontWeight="bold"
            fontFamily="Poppins"
          >
            LOGIN
          </Typography>

          <form action="">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontSize="1.2rem" color="gray">
                UserName
              </Typography>
              <TextField
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                size="small"
                sx={{ width: "24rem", marginTop: ".6rem" }}
              />
              <Typography
                fontSize="1.2rem"
                color="gray"
                sx={{ marginTop: ".6rem" }}
              >
                Password
              </Typography>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="small"
                type="password"
                sx={{ width: "24rem", marginTop: ".6rem" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="contained"
                //   onClick={handleSignIn}
                  sx={{
                    backgroundColor: "#ad23db",

                    width: "12rem",

                    "&:hover": {
                      backgroundColor: "#4f0269",
                      boxShadow: "none",
                      color: "white",
                    },
                  }}
                >
                  SignIn
                </Button>
              </Box>
              <Typography
                sx={{
                  marginTop: "1rem",
                  alignContent: "center",
                  marginLeft: "8rem",
                }}
              >
                Didn't Registered yet?
                <span
                //   onClick={handleRegister}
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  SignUp
                </span>
              </Typography>
            </Box>
          </form>
        </Box>
</Box>
<Box sx={{width:'50vw', backgroundColor:'teal'}}></Box>
    </Box>
  )
}

export default Login