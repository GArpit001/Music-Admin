import React from 'react'
import { assets } from "../assets/assets"
import { Link, useNavigate } from "react-router-dom"
import LOGO  from "../assets/a-logo-of-a-music-player-with-a-play-button-in-the-n18YzA__QzyXkA8MsGKVjA-KgmALzTYTU2-hWV1sbyigA.jpeg"
import LOGO2  from "../assets/a-music-player-logo-with-a-stylized-musical-note-t-gXeg1E4iQ5i31rXwHgfLLA-KgmALzTYTU2-hWV1sbyigA.jpeg"
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className='sidebar-Flow min-h-screen pl-[4vw] border-r-2 border-gray-800'>
            <img src={LOGO} onClick={()=> navigate("/")} className='mt-5 w-[max(10vw,100px)] hidden sm:block rounded-full' alt="" />

            <img src={LOGO2} onClick={()=> navigate("/")} className='mt-5 w-[max(5vw,40px)] mr-5 sm:hidden block rounded-full' alt="" />

            {/* <h1 className='mt-5 w-[max(10vw,100px)] hidden sm:block text-3xl font-bold '>TUNEWAVE</h1> */}

            {/* https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=646824f2b7b86caffec1d0b16ea77f79 */}


            <div className='flex flex-col gap-5 mt-10'>

                <Link to="/add-song" className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.add_song} className='w-5' alt="" />
                    <p className="hidden sm:block">Add Song</p>

                </Link>

                <Link to="/list-song" className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.song_icon} className='w-5' alt="" />
                    <p className="hidden sm:block">List Song</p>

                </Link>


                <Link to="/add-album" className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.add_album} className='w-5' alt="" />
                    <p className="hidden sm:block">Add Album</p>

                </Link>


                <Link to="/list-album" className='flex item-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw,10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium'>
                    <img src={assets.album_icon} className='w-5' alt="" />
                    <p className="hidden sm:block">List Album</p>

                </Link>





            </div>
        </div>
    )
}

export default Sidebar