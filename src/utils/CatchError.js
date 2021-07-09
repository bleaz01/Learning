import React from 'react'


export default class Errorboundary extends React.Component{
    constructor(props){
      super(props)
      this.state = {error:false}
    }
  
    static getDerivedStadeFromError(error){
      return {error:true}
    }
  
    render(){
      if(this.state.error){
        return(
          <div>
              {this.state.error}
          </div>
        )
      }
      return this.props.children
     
    }
  
}
