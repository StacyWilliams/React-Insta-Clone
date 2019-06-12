import React from 'react';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from "./components/SearchBar/searchBar";
import './App.css';
import PostContainer from './components/PostContainer/postContainer';



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
    const newCommentDetails = {
      username: "User's Name",
      text: this.state.newComment
    };

    

    
  }


render() {
  return (
    <div className="App">
      <SearchBar onchangeValue={this.searchItems}/>
     
        {this.state.data.map(data => {
          return <div><PostContainer key={uuid()} data={data} id={uuid()}/></div>
      })}
     </div>
  );
  }
}
export default App;
