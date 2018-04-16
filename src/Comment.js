import React from 'react'

// functional stateless components

const Comment = (props) => 
  <div className='card'>
    <div className='card-header'>
      <img src={props.comment.user.photo} alt={props.comment.user.name} className='rounded float-leftt' width='30' height='30'/>
      <span className='card-text'>{props.comment.user.name}</span>
    </div>
    <div className='card-body'>
      <p className='card-text'>{props.comment.comment}</p>
    </div>
  </div>

export default Comment
