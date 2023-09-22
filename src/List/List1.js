import React, { Component } from "react";
import Tools from "../components/Tools";
import SimpleList from "./SimpleList";

const arr = [
  {
    id:1,
    title: "appointment to october",
    descr: "the patient is rescheduled to october",
    isActive: false,
  },
  {
    id:2,
    title: "appointment to novemeber",
    descr: "the patient is rescheduled to november",
    isActive: true,
  },
  {
    id:3,
    title: "appointment to december",
    descr: "the patient is rescheduled to december",
    isActive: false,
  },
];

class List1 extends Component {
  constructor(props){
    super(props);
    this.state={
      data:arr,
      activeState:'all'
    }
  }
  onListChange=(event)=>{
    console.log(event.target.value);
    const value=event.target.value
    this.setState({
      activeState:value
    })
  }

  // delete a particular box
  handleDelete=(item)=>{
    console.log("delete yes",item)
    const newList=this.state.data.filter((element)=>element.id!==item.id)
    this.setState({
      data:newList
    })
  }

  render() {
    const {
      data,
      activeState,   
    }=this.state
 const newList=data.filter((item)=>{
      if(activeState==='all'){
        return true
      }
      if(activeState==='active'){
        return item.isActive===true
      }
      if(activeState==='non-active'){
        return item.isActive===false
      }
      return false
    })
    return (
      <Tools onAction={this.onListChange}>
        <SimpleList data={newList} onAction
        ={this.handleDelete}/>


{/* the simple list is a controlled component */}
{/* ee oru simplelist enna component ne complete control cheydirikunathu props ane .without the props its not contain data */}


      </Tools>
    );
  }
}

export default List1;
