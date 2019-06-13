import React from 'react';
import uuid from 'uuid';
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/searchBar";
import PostContainer from './postContainer';
import styled from 'styled-components'


const AppStyle = styled.div`
width: 900px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`;


class PostsPage extends React.Component {
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
         <SearchBar onchangeValue={this.searchItems}/>
          {this.state.data.map(data => {
             return <div><PostContainer key={uuid()} data={data} id={uuid()}/></div>
        
        })}
        </AppStyle>
     );
     }
   }
   export default PostsPage;