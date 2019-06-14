import React from 'react';


const WithAuth  = FirstComponentParam => SecondComponentParam => class extends React.Component {
    constructor() {
        super();
        this.state= {
            loggedIn: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('User Name') && localStorage.getItem('Password')) { 
            this.setState({ loggedIn : true})
        } else {
            this.setState({loggedIn: false})
        }
    }

    render() {
         
      if(this.state.loggedIn === false){
          return <SecondComponentParam />
      } else {
          return<FirstComponentParam />
      }
  
        
    }
}

export default WithAuth;