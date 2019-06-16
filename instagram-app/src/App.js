import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import ComponentFromWithAuthenticate from './components/authentication/withAuthenticate';
import PostsPage from "./components/PostContainer/postsPage";



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
    <div className="App">
      
       <ComponentFromWithAuthenticate {...this.state.data}/>
       
     </div>
  );
  }
}
export default App;
