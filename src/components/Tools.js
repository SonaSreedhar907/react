import React,{Component} from 'react'
import './Tools.css'

// here we are discussed about the children component.listItem is  a children component.

class Tools extends Component{
    render(){
        const {
            children,
            onAction
        }=this.props
        return (
            <div className='list-tools'>
{/* its not a controlled component */}

                <div className='list-header'>
                    <select onChange={onAction} name="status">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="non-active">Not Active</option>

                    </select>
                </div>
                {children}
                <div className='list-footer'>some info here</div>
            </div>
        )
    }
}



export default Tools