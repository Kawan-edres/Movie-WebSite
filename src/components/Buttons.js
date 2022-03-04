import React from 'react'
import { useEffect } from 'react'

const Buttons = ({movies,setFilter,active,setActive}) => {

    useEffect(()=>{
        if(active===0){
            setFilter(movies);
            return;
        }
        const filtered=movies.filter((movie)=>movie.genre_ids.includes(active));
        setFilter(filtered);
    },[active])

  return (
    <div className='buttons'>
        <button className={active===0 ?"active":""} onClick={()=>setActive(0)}>All</button>
        <button  className={active===35 ?"active":""} onClick={()=>setActive(35)} >Comedy</button>
        <button  className={active===28 ?"active":""} onClick={()=>setActive(28)}>Action</button>
    </div>
  )
}

export default Buttons