import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import { url } from '../App'

const AddAlbum = () => {

  const [image, setImage] = useState(false)
  const [color, setColor] = useState("black")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [loading, setLoading] = useState(false)


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // console.log(e)


    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('name', name)
      formData.append('desc', desc)
      formData.append('image', image)
      formData.append('bgColor', color)


      const responce = await fetch(`${url}/api/album/add`, {
        method: "POST",
        body: formData
      })


      const getData = await responce.json()

      // console.log(getData)

      if (getData.success) {
        toast.success("Successfully Added the Album")
      } else {
        toast.error("Some error occurred")
      }


      setLoading(false)


    } catch (error) {
      console.error("Error occurred during the request: ", error);
    }





  }




  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>

      <div className='w-16 h-16 place-self-center border border-gray-400 border-t-green-800 rounded-full animate-spin'></div>

    </div>
  ) : (
    <form className='flex flex-col items-start gap-6 text-gray-600' onSubmit={onSubmitHandler} >
      <div className='flex gap-8'>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} id='image' accept='image/*' hidden />
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 ">

        <p>Album name</p>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Type Here' required className='bg-transparent outline-green-600 border-2 border-gray-400 p-1.5 w-[max(40vw,250px)]' />

      </div>


      <div className="flex flex-col gap-2.5 ">

        <p>Album description</p>
        <input type="text" placeholder='Type Here' onChange={(e) => setDesc(e.target.value)} value={desc} required className='bg-transparent outline-green-600 border-2 border-gray-400 p-1.5 w-[max(40vw,250px)]' />

      </div>

      <div className='flex flex-col gap-2.5'>

        <p>Background Color</p>
        <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
      </div>


      <button type='submit' className="text-base bg-black text-white py-1.5 px-14 cursor-pointer">
        Add
      </button>



    </form>
  )
}

export default AddAlbum