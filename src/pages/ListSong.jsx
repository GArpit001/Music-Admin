import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '../App'


const ListSong = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const responce = await fetch(`${url}/api/song/list`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const getData = await responce.json()
            await setData(getData.songs)
            // await console.log(data[0]._id)

        }
        catch (err) {
            toast.error("Error Occured")
        }
    }

    const removeSong = async (id) => {
        // console.log("HEllo")

        console.log(id)

        try {

            const responce = await fetch(`${url}/api/song/remove`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id
                })

            })
            const data = await responce.json()
            if (data.success) {
                toast.success("Song Removed")
                fetchData()
            } else {
                toast.error("Something went wrong")
            }




        } catch (error) {
            toast.error("Error Occured")
        }



    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <p>
                All Songs List
            </p>

            <br />

            <div className='flex flex-col gap-2'>
                <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>

                    <b>Image</b>
                    <b>Name</b>
                    <b>Album</b>
                    <b>Duration</b>
                    <b className='text-center'>Action</b>

                </div>

                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                                <img src={item.image} className='w-12' alt="" />
                                <p>{item.name}</p>
                                <p>{item.album}</p>
                                <p>{item.duration}</p>
                                <p className='text-center flex justify-center items-center' onClick={() => removeSong(item._id)}>
                                    <span className='border border-slate-500 rounded px-1.5 flex justify-center items-center cursor-pointer hover:bg-gray-300 '>x</span>
                                </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ListSong