import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseform/firebase';
import { Link } from 'react-router-dom';
import { Home } from './Home';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hasAccount: false,
    }
  }
  handleSubmit = ({ target: { value, id } }) => {
    this.setState({ [id]: value })
  }
  createEmailPassword = () => {
    const { email, password } = this.state
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.setState({ hasAccount: true })
        const user = userCredential.user
        console.log(user.email)
      })
      .catch((e) => console.log(e))
  }
  handleClear = (e) => {
    e.preventDefault()
    e.target.value = ''
  }
  render() {
    const { hasAccount } = this.state
    return (
      <>
        {hasAccount ?
          <Home /> :
          <div id='img'>
            <h1>Авторизация</h1>
            <div className="input-group mb-2 src">
              <input type="text" className="form-control src1" placeholder="Email"
                id="email" onChange={this.handleSubmit}
                aria-describedby="addon-wrapping" />
            </div>
            <div className="input-group mb-2 src">
              <input type="text" className="form-control src1" placeholder="Password"
                id="password" onChange={this.handleSubmit}
                aria-describedby="addon-wrapping" />
            </div>
            <input className="btn btn-primary but" type="submit"
              onClick={this.createEmailPassword} />
            <Link className='white' to="/register">зарегистрироваться</Link>
          </div>
        }
      </>
    );
  }
}