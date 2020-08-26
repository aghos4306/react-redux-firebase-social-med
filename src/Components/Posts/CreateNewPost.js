import React from 'react';

class CreateNewPost extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="input-field">
            <input id="postTitle" type="text" className="validate" />
            <label for="postTitle">Title</label>
          </div>
          <div className="input-field">
            <textarea id="postContent" className="materialize-textarea" data-length="550"></textarea>
            <label for="postContent">Content</label>
          </div>
          <button type="submit" className="btn waves-effect waves-light" name="action">
            Submit Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreateNewPost;
