import React from 'react';
import dummyData from "../dummy-data";
import Search from './Search/search';
import Posts from './Posts/posts';
import Login from './Auth/login';
import WithAuth from './Auth/WithAuth';

class MainPage extends React.Component {
   constructor() {
       super();
       this.state = {
          posts: [],
          searchedPosts: [],
          search: ''
       }
   }


    searchInputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    searchFilter = e => {
        this.searchInputHandler(e)

        this.setState(prevState => {
            const filtered = prevState.posts.filter(eachObj => eachObj.username.toLowerCase().includes(prevState.search.toLowerCase()))
            return {searchedPosts : filtered}
        })

//          const noPrevStateFilter = this.state.posts.filter(eachObj => eachObj.username.toUpperCasae().includes(this.state.search.toUpperCase()))
//         this.setState({
//    searchedPosts : noPrevStateFilter
//         })
    }


   componentDidMount(){
    this.setState({
        posts: dummyData
    })
}

   render(){
       return(
           <div>
              
             <Search filter={this.searchFilter} value={this.state.search}/>
             {/* ternerary operator is the same things as an 
            IF conditional */}
             <Posts postsProps={this.state.searchedPosts.length > 0 ? this.state.searchedPosts : this.state.posts}/>
           </div>
       )
   }
}

export default WithAuth(MainPage)(Login);