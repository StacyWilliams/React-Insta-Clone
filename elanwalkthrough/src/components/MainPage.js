import React from 'react';
import dummyData from "../dummy-data";
import Search from './Search/search';
import Posts from './Posts/posts'

class MainPage extends React.Component {
   constructor() {
       super();
       this.state = {
          posts: dummyData
       }
   }

   componentDidMount(){
    this.setState({
        posts: dummyData
    })
}

   render(){
       return(
           <div>
             <Search />
             <Posts postsProps={this.state.posts}/>
           </div>
       )
   }
}

export default MainPage;