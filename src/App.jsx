import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  Box,
  CssBaseline,
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme()

const App = () => {
  const [currentSection, setCurrentSection] = useState("home")

  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "50rem",
    },
    contentContainer: {
      width: "100vw",
      height: "50vh",
    },
    container: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
  }
  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Typography variant="h4">Welcome to the Home Page!</Typography>
      case "about":
        return <Typography variant="h4">About Us</Typography>
      case "contact":
        return (
          <Box
            component="form"
            sx={styles.form}
            onSubmit={(e) => {
              e.preventDefault()
              alert("Form Submitted")
            }}
          >
            <Typography variant="h4">Contact Us</Typography>
            <TextField label="Name" variant="outlined" required />
            <TextField label="Email" variant="outlined" type="email" required />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Responsive Webpage
          </Typography>
          <Button color="inherit" onClick={() => setCurrentSection("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => setCurrentSection("about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => setCurrentSection("contact")}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={styles.contentContainer}>
        <Container sx={styles.container}>{renderSection()}</Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
