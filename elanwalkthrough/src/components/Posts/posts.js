import React from 'react';

// components
import Comments from './Comments.js';
import Likes from './Likes.js';



const Posts = (props) => {
    return (
        <div>
            {props.postsProps.map(eachObj => (
                <div key={eachObj.id}>
                   <div>
                      <img src={eachObj.thumbnailUrl} alt={`${eachObj.username}\'s profile`}/>
                      <p>{eachObj.username}</p>
                  </div>
                                    
                  <div>
                  <img src={eachObj.imageUrl} alt={`${eachObj.username}\'s instagram post`}/>
               </div>
               <Likes likeProps={eachObj.likes}/>
               <Comments commentProps={eachObj.comments}/>
               </div>
))}
     </div>
    )
   
}

export default Posts;
