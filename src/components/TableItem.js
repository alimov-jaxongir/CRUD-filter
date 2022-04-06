import React from 'react'
import MyButton from './UI/Button/MyButton'

export default function TableItem(props) {
  return (
     <tr>
         <td>{props.number}</td>
         <td>{props.posts.title}</td>
         <td>{props.posts.stack}</td>
         <td>
<MyButton className='btn btn-outline-danger w-100' onClick={()=>props.remove(props.posts)}>Delete</MyButton>
         </td>
       </tr>
     
  
  )
}

