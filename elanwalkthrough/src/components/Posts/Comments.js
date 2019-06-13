import React from 'react'

class Comments extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            comments: props.commentsProps,
            typedComment: '',
        }
    }

    handleChange = e => {
        console.log(this.state.typedComment)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    floatingProp = e => {
        e.preventDefault()

        const newObj = {
            id: Date.now(),
            username: 'Savage',
            text: this.state.typedComment
        }
        
        this.setState({
            comments: [...this.state.comments, newObj]
        })
    }

    render() {
        console.log({COMMENTS: this.state.comments})
        return (
            <div className='comments'>
                <div className='bottomBorder'>
                {this.state.comments.map(eachCommentObj => (
                    <div className='secondMap' key={eachCommentObj.id}>
                        <h3>{eachCommentObj.username}</h3>
                        <p>{eachCommentObj.text}</p>
                    </div>
                ))}
                </div>

                <form className='commentsForm' onSubmit={this.floatingProp}>
                    <input 
                      className='commentInput'
                      placeholder='Add a Comment'
                      onChange={this.handleChange}
                      value={this.state.typedComment}
                      name='typedComment'
                    />
                </form>
            </div>
        )
    }
}

export default Comments