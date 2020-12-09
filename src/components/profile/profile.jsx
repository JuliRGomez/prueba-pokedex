import React from "react";
import pngegg from "../imagenLogin/pngegg.png";
// import { useHistory } from "react-router-dom";
import "./profile.css";
import firebase, {auth} from "../firebase/config";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('/')
      this.setState({uid: firebase.auth().currentUser.uid})
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <div className="profile">
        <img src={pngegg} alt="imagen perfil" width="20px" height="20px"/>
        <h5>Vane</h5>
        <h6 onClick={() => this.signOut()}>Cerrar sesión</h6>
      </div>
    );
  }
}

  
