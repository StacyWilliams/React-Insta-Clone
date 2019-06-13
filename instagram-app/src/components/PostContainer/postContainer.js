import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import "./postContainer.css";
import CommentSection from "../CommentSection/commentSection";
import AddComment from "../AddComment/addComment";
import styled from 'styled-components'


const Horizontal = styled.div`
border-bottom: 1px solid rgb(180, 179, 179);
margin: 0 1rem;
`;

const PostContainerDiv = styled.div`
width: 70%;
box-shadow: 1px 1px 1px 1px rgb(180, 179, 179);
text-align: left;
box-sizing: border-box;
margin: 2rem 1rem;
padding-top: .5rem;
`;

const userContainer = styled.div`
  padding-left: 1rem;
  display: flex;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      comments: this.props.data.comments,
      likes: this.props.data.likes,
      newComment: ''
    };
  }
  onChange = event => {
    console.log(8675309)
     this.setState({
    newComment: event.target.value
  });
};
addNewComment = (event) => {
  event.preventDefault();
  const newCommentDetails = {
    username: "Savage",
    text: this.state.newComment
  };
  const data = {
    ...this.state.data,
    comments: this.state.data.comments.concat(newCommentDetails)
  };

  this.setState({
    data
  });
};

increaseLike = () => {
  const data = {
    ...this.state.data,
    likes: this.state.data.likes + 1
  };
  this.setState({
    data
  });
};

  render() {

    const {
        comments,
        imageUrl,
        likes,
        thumbnailUrl,
        timestamp,
        username
      } = this.state.data;


    return (
        <PostContainerDiv>
         <userContainer>
           <img src={thumbnailUrl} alt="profile" />
            <p>{username}</p>
        </userContainer>

        <img className="main_image" src={imageUrl} alt="banner" />
      
        <i className="far fa-heart" 
            onClick={() => this.props.addLikes(this.state.data.id)}/>
        <i className="far fa-comment" />
        <p className='likes'>{likes} likes</p>
             {comments.map(comment => {
                return <CommentSection key={uuid()} comment={comment} />;
      })}

          <p >{timestamp}</p>
            <Horizontal>
               <AddComment
                 addNewComment={this.addNewComment}
                 id={this.props.id}
                 onChange={this.onChange}
                 value={this.state.newComment}
                 />
            </Horizontal>
       </PostContainerDiv>
  );
};
}
    
PostContainer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
}

export default PostContainer;