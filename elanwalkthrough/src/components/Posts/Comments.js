import React from 'react';



class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            comments: props.commentProps,
            typedComment: ''
        }
    }
    
    
// handleChange = e => {
//     console.log(this.state.typedComment)
//     this.setState({
//         [e.target.name]: e.target.value,
//     })
// }

// newComment = e => {
//    e.preventDefault()

//    const newObj = {
//        id: Date.now(),
//        username: 'Savage',
//        text: this.state.typedComment
//    }

//    this.setState({
//        comments: [...this.state.comments, newObj]
//    })
// }

    render() {
        console.log({COMMENTS: this.state.comments})
        return (
            <div>
              {this.state.comments.map(eachCommentObj => (
                   <div key={eachCommentObj.id}>
                       <h3>{eachCommentObj.username}</h3>
                       <p>{eachCommentObj.text}</p>
                   </div>
               ))}

              <form onSubmit={this.newComment}>
                  <input 
                  placeholder='comments'
                  onChange={this.handleChange}
                  value={this.state.typedComment}
                    />
              </form>

            </div>
        )
    }
   
}

export default Comments;