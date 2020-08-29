import React from 'react';
import PostSummary from './PostSummary';
import { connect } from 'react-redux';
import { removePosts, getPosts } from '../../store/actions/postActions';

class AllPosts extends React.Component {
  componentDidMount = () => {
    this.props.getPosts();
  };
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.removePost}>
          Remove All Posts
        </button>
        {this.props.posts.length > 0 ? this.props.posts.map((post) => <PostSummary post={post} key={Math.random() * 99} />) : 'Loading...'}
      </div>
    );
  }
}

//export default AllPosts;
const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: () => {
      dispatch(removePosts());
    },
    getPosts: () => {
      dispatch(getPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
