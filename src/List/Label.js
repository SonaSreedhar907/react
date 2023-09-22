import React from 'react'
import './Label.css'

class Label extends React.Component{
    render(){
       console.log(this.props.isActive)
        const style=this.props.isActive?{background:'green'}:{background:'orange'}
            
      return <span className='list-label-item' style={style}>{this.props.isActive?"Active":"NotActive"}</span>

    }
}

export default Label