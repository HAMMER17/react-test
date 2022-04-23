import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseform/firebase'
import boss from '../images/boss.png';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  addValue = ({ target: { value, id } }) => {
    this.setState({ [id]: value })
  }
  addEmailPassword = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((e) => console.log(e))
  }

  render() {
    return (
      <div>
        <h1>Регистрация</h1>

        <form className="form">

          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" className="form-control" id="email" onChange={this.addValue} />

          <label htmlFor="password" className="form-label">Password</label>
          <input type="text" className="form-control" id="password" onChange={this.addValue} />

          <button className="btn btn-primary el" type="submit" onClick={this.addEmailPassword}>зарегистрироваться</button>

        </form>
        <img src={boss} alt="" />
      </div>
    )
  }
}

export default Register;