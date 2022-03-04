import React from 'react'
import {motion} from 'framer-motion'


const Movie = ({title,path}) => {
  return (
    <motion.div
     layout
     animate={{opacity:1,scale:1}}
       intial={{opacity:0,scale:0}}
       exit={{opacity:0,scale:0}}
       transition={{duration:0.4}}
      className='po'>
     <p>{title}</p>
     <img src={"https://image.tmdb.org/t/p/w500"+path} alt="" />

    </motion.div>
  )
}

export default Movie