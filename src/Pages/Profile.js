import React from "react";
import { Typography } from "@mui/material";
import Header from "../Components/Header";
import { makeStyles } from "@mui/styles";
import user from "../Images/user.png";
import { NetflixButton } from "../Styled/styledcomponents";
import { auth } from "../firebase";
import { useNavigate } from "react-router";

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const signout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          Perfil de Usuario
        </Typography>
        <div className={classes.profileCard}>
          <img src={user} alt="User Avatar" className={classes.avatar} />
          <div className={classes.userInfo}>
            <Typography variant="h6" className={classes.userText}>
              Usuario: <span>{auth.currentUser?.email}</span>
            </Typography>
            <Typography variant="h6" className={classes.userText}>
              Contraseña: <span>********</span>
            </Typography>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <NetflixButton radius wide="fullWidth" onClick={signout}>
            Cerrar Sesión
          </NetflixButton>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141414",
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
    color: "#e50914",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
  profileCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid #e50914",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
  userText: {
    color: "#fff",
    fontSize: "16px",
    marginBottom: "10px",
    "& span": {
      fontWeight: "bold",
      color: "#e50914",
    },
  },
  buttonContainer: {
    width: "100%",
    maxWidth: "500px",
  },
}));

export default Profile;
