import React, { Component } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseform/firebase';
import { Link } from 'react-router-dom';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    return (
      <>
        <h1>Авторизация</h1>
        <div id='img'>
          <div className="input-group m-3 mb-2 src">
            <input type="text" className="form-control src1" placeholder="Email"
              id="email" onChange={this.handleSubmit}
              aria-describedby="addon-wrapping" />
          </div>
          <hr />
          <div className="input-group m-3 mb-2 src">
            <input type="text" className="form-control src1" placeholder="Password"
              id="password" onChange={this.handleSubmit}
              aria-describedby="addon-wrapping" />
          </div>
          <input className="btn btn-primary but" type="submit"
            onClick={this.createEmailPassword} />
          <Link className='white' to="/Register">зарегистрироваться</Link>
        </div>
      </>
    );
  }
}