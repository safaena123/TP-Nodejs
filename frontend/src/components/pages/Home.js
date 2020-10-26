import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <form className="form" >
          <h1>Bienvenue {userData.user.displayName}</h1>
          </form>
      ) : (
        <div id="container">
            
            <form method="POST">
              <h2>Vous n'êtes pas connecté</h2>
              <Link to="/login">Se connecter</Link>
            </form>
        </div>
      )}
    </div>
  );
}