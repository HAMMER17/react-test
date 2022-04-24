import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseform/firebase'
import boss from '../images/boss.png';
import About from './About';


export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      account: false,
    }
  }
  addValue = ({ target: { value, id } }) => {
    this.setState({ [id]: value })
  }
  addEmailPassword = () => {
    // e.preventDefault()
    const { email, password } = this.state
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        this.setState({ account: true })
        const user = response.user
        console.log(user)
      })
      .catch((e) => console.log(e))
  }

  render() {
    const { account } = this.state
    return (
      <div>
        {account ?
          <About />
          :
          <div className="form">
            <h1>Регистрация</h1>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="email" onChange={this.addValue} />

            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" className="form-control" id="password" onChange={this.addValue} />

            <button className="btn btn-primary el" type="submit" onClick={this.addEmailPassword}>зарегистрироваться</button>
          </div>
        }
        <img src={boss} alt="boss" />
      </div>
    )
  }
}

export default Register;