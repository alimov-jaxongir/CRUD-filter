import React,{useState,useMemo} from 'react';
import TableList from './components/TableList';
import PostForm from './components/PostForm';
import FilterAndSearch from './components/FilterAndSearch';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/Button/MyButton';

function App() {
  const [posts,setPosts]=useState([
    {id:1,title:'JavaScript',stack:' Frontend'},
    {id:2,title:'Python',stack:'Full Stack'},
    {id:3,title:'Java',stack:'Mobile'},
    {id:4,title:'PHP',stack:' Beckend'},
  ])
  const[filter,setFilter]=useState({sort:'',query:''})
  const [modal,setModal]=useState(false)
const sortPosts=useMemo(()=>{
   if(filter.sort){
  return  [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts

},[filter.sort,posts])

const sortedAndSearchPosts=useMemo(()=>{
  return  sortPosts.filter(post=>post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
},[filter.query,sortPosts])
 
  const createPost=(newPost)=>{
    setPosts([...posts,newPost])
    setModal(false )
  }
  const removePost=(post)=>{
          setPosts(posts.filter(s=>s.id!==post.id))
      }

      
return(
  <div className='app w-50 mx-auto'>
    <div className='d-flex justify-content-center mb-2'>
      <MyButton className='btn btn-primary w-50'
    onClick={()=>setModal(true)}
    >Add Posts</MyButton></div>
    
   <MyModal modal={modal} setModal={setModal}><PostForm  createPost={createPost} / ></MyModal>
    
    <FilterAndSearch filter={filter} setFilter={setFilter} />
      {
        
        <TableList remove={removePost} posts={sortedAndSearchPosts}/>
       
      }
   
  </div>
)

}

export default App;
