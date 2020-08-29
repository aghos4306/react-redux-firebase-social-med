import Firebase from 'firebase';

const db = Firebase.firestore();

export const createPost = (post) => {
  return (dispatch) => {
    db.collection('posts')
      .add(post)
      .then(() => {
        dispatch({ tyype: 'CREATE_POST_SUCCESSFUL' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_POST_ERR' }, err);
      });
  };
};
