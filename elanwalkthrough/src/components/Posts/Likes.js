import React from 'react';



class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
           likes: props.likeProps,
           clicked: false
        }
    }
    
    likeBTN = e => {
        e.preventDefault()


       if(this.state.clicked === false) {
        this.setState({
            likes: this.state.likes + 1,
            clicked: true
        })
     } else {
        this.setState({
           likes: this.state.likes -1,
           clicked: false
        })
    }
} 
    render() {
        return (
            <div onClick={this.likeBTN} className={`notClicked ${this.state.clicked === false ? '' : 'clicked'}`}>
              {this.state.likes}
            </div>
        )
    }
   
}

export default Likes;