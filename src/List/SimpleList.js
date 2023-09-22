import React from 'react'
import ListItem from './ListItem';


function SimpleList(props) {
    const {
        data,
        onAction
    }=props
  return (
    <div className="app-list">
          {data.map((item, index) => {
            return (
              <ListItem
                key={index}
                title={item.title}
                descr={item.descr}
                isActive={item.isActive}
                onDelete={()=>{
                  onAction(item)
                }}
              />
            );
          })}
        </div>
  )
}

export default SimpleList