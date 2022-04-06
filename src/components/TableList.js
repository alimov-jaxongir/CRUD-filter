import React from 'react'
import TableItem from './TableItem';
import TableHeader from './TableHeader';

export default function TabliList({posts ,remove}) {
 
  if(!posts.length){
    return(
      <h6 className='text-center'>Not Found</h6>
    )
  }
  return (
   <>
    <h5 className='text-center'> Favourite Programming Language</h5>
  <table className='table table-striped'>
    <TableHeader/>
    <tbody>
      {
        posts.map((post,index)=>(
             <TableItem remove={remove} number={index+1} posts={post} key={post.id} />
        ))
     
      }
     
  
    </tbody>
  </table>
   </>
  )
}

