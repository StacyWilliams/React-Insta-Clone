import React from 'react'

//components
import Comments from './Comments.js'
import Likes from './Likes.js'


const Posts = props => {
    console.log(props.postsProps)
    return (
        <div>
            {props.postsProps.map(eachObj => (
                <div className='firstMap' key={eachObj.id}>
                    <div className='user'> 
                        <img className='profilePic' src={eachObj.thumbnailUrl} alt={`${eachObj.username}\`s profile`}/> 
                        <p>{eachObj.username}</p>  
                    </div>
                     <div>
                        <img className='postPic'src={eachObj.imageUrl} alt={`${eachObj.username}\`s instagram post`}/>
                    </div>

                    <Likes likeProps={eachObj.likes}/>
                    <Comments commentsProps={eachObj.comments}/>
                </div>
            ))}
        </div>
    )
}

export default Posts
