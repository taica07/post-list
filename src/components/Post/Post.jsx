/* eslint-disable react/prop-types */
import styles from './Post.module.css';

const Post = ({ author, body }) => {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  );
};

export default Post;
