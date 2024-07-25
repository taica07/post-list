/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './NewPost.module.css';

const NewPost = ({ hideModal, addPostHandler }) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitPostHandler(event) {
    event.preventDefault();

    const postData = {
      id: Date.now(),
      body: enteredBody,
      author: enteredAuthor,
    };

    addPostHandler(postData);

    console.log(postData);

    hideModal();
  }

  return (
    <form onSubmit={submitPostHandler} className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={changeBodyHandler} id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input onChange={changeAuthorHandler} type="text" id="name" required />
      </p>
      <p className={styles.actions}>
        <button onClick={hideModal} type="button">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
