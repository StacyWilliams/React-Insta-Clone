import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import styled from 'styled-components'
import PostsPage from "./components/PostContainer/postsPage";

const AppStyle = styled.div`
width: 900px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;

class App extends React.Component {
 constructor(props) {
 super(props);
   this.state = {
     data: [],
     newComment: ''
 };
}

componentDidMount() {
  this.setState({ data: dummyData })}

searchItems = (event) => {
  if (event .target.value !== '') {
    const enteredValue = event.target.value
    return enteredValue;
  }
}

  onChange = event => {
      this.setState({
     [event.target.name]: event.target.value,
      newComment: 'newComment'
    });
  };

  addNewComment = (event) => {
    event.preventDefault();
    if (this.state.newComment === "") {
      alert("Enter a comment");
    }
    

    

    
  }


render() {
  return (
    <AppStyle>
      
       <PostsPage {...this.state.data}/>
       
       </AppStyle>
  );
  }
}
export default App;
