import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '../App'


const ListAlbum = () => {

  const [data, setData] = useState([])


  const fetchAlbum = async () => {

    try {
      const responce = await fetch(`${url}/api/album/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const getAlbumdata = await responce.json()
      console.log(getAlbumdata.albums)
      await setData(getAlbumdata.albums)

    } catch (error) {
      toast.error("Error Occured")
    }

  }



  const removeAlbum = async (id) => {

    // console.log(id)

    try {

      const responce = await fetch(`${url}/api/album/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: id
        })
      })

      const removeData = await responce.json()
      console.log(removeData)

      if (removeData.success) {
        toast.success("Album removed successfully")
         fetchAlbum()
      } else {
        toast.error("Something went worng")
      }

    } catch (error) {
      toast.error("Error Occured " , error.message)
    }
  }


  useEffect(() => {
    fetchAlbum()
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
          <b>Album Name</b>
          <b>Description</b>
          <b>Background Color</b>
          <b className='text-center'>Action</b>

        </div>

        {
          data.map((item, index) => {
            return (
              <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
                <img src={item.image} className='w-12' alt="" />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type="color" value={item.bgColor} />
                <p className='text-center flex justify-center items-center' onClick={() => removeAlbum(item._id)}>
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

export default ListAlbum