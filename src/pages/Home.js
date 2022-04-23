import React, { useContext, useEffect, useState } from "react";
import { Form } from "../components/Form";
import { Loader } from "../components/Loader";
import { AlertContext } from "../contex/alert/alertContext";
import { FirebaseContext } from "../contex/firebase/firebaseContext";

export const Home = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)
  const submitHandler = (event) => {
    event.preventDefault()
    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Заметка создана', 'success')
      }).catch(() => alert.show('Что то пошло не так...', 'danger'))
      setValue('')
    } else {
      alert.show('Заполните поле')
    }

  }
  const { notes, loading, fetchNotes, removeNote } = useContext(FirebaseContext)
  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <form onSubmit={submitHandler} className="input-group mt-5">
        <input className="form-control"
          placeholder="Ваш текст..."
          value={value}
          onChange={e => setValue(e.target.value)} />
      </form>
      <hr />
      {loading ?
        <Loader /> :
        <Form notes={notes} removeNote={removeNote} />
      }
    </>
  );
}
