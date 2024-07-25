/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

import NewPost from '../NewPost/NewPost';
import Post from '../Post/Post';
import styles from './PostList.module.css';
import Modal from '../Modal/Modal';

const PostList = ({ isVisible, hideModal }) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((prev) => [postData, ...prev]);
  }

  return (
    <>
      {isVisible && (
        <Modal hideModal={hideModal}>
          <NewPost hideModal={hideModal} addPostHandler={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <h2>There are no post yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostList;
