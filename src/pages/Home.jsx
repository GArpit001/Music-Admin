

// import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify'
// import { url } from '../App'

// const Home = () => {

//     const [data, setData] = useState([])

//     const fetchData = async () => {
//         try {

//             const responce = await fetch(`${url}/api/album/list`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             })

//             const getData = await responce.json()
//             console.log(getData.albums)
//             await setData(getData.albums)

//         } catch (error) {
//             toast.error("Error Occured", error.message)
//         }
//     }


//     useEffect(() => {
//         fetchData()
//     }, [])


//     return (
//         <div className='flex flex-wrap gap-3'>

//             {
//                 data.map((item, index) => {
//                     return (
//                         <div className="flip-card" key={index}>
//                             <div className="flip-card-inner">
//                                 <div className="flip-card-front">
//                                     <p className="title">{item.name}</p>
//                                     <p>Hover Me</p>
//                                 </div>
//                                 <div className="flip-card-back">
//                                     {/* <p className="title">BACK</p>
//                 <p>Leave Me</p> */}
//                                     <img src={item.image} alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })
//             }






//         </div>


//     )
// }

// export default Home

import React from 'react'

const Home = () => {
  return (
    <div className='h-[85.2vh] flex gap-5 flex-col justify-center items-center  '>
        <h1 className='text-5xl text-transparent bg-clip-text text-flow  font-extrabold  '>TUNE WAVE MUSIC</h1>
        <p className='text-3xl '>Feel the Music.</p>
        <p className='text-2xl font-bold'>Enjoy ...</p>
    </div>
  )
}

export default Home