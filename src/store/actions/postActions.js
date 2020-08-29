export const removePosts = () => ({ type: 'REMOVE_ALL_POSTS' });

export const createPost = function (post) {
  return {
    type: 'CREATE_NEW_POST',
    post: post,
  };
};
