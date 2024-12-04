import React, { useEffect } from 'react';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
// import { auth } from './firebase'; // Comentado
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, selectUser } from "./features/UserSlice";
import MoviePage from './Pages/MoviePage';

function App() {
  // const user = useSelector(selectUser); // Comentado
  const classes = useStyles();
  // const dispatch = useDispatch(); // Comentado

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(login({
  //         uid: userAuth.uid,
  //         email: userAuth.email,
  //       }));
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  //   return unsubscribe;
  // }, [dispatch]); // Comentado todo el bloque de autenticación

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/checkout' element={<Paypal />} />
          <Route exact path='/about/:id' element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
}));

export default App;
