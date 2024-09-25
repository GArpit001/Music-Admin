import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import { url } from '../App'


const AddSong = () => {

    const [image, setImage] = useState(false)
    const [song, setSong] = useState(false)
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [album, setAlbum] = useState("none")
    const [loading, setLoading] = useState(false)
    const [albumData, setAlbumData] = useState([])




    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {

            setLoading(true)

            const formData = new FormData()
            formData.append('name', name)
            formData.append('desc', desc)
            formData.append('album', album)
            formData.append('image', image)
            formData.append('audio', song)

            const responce = await fetch(`${url}/api/song/add`, {
                method: 'POST',
                body: formData,
            })

            const data = await responce.json();

            if (data.success) {
                console.log("Yes", data);
                toast.success("Song added")
                // Reset form fields
                setName("");
                setDesc("");
                setAlbum("");
                setImage(false);
                setSong(false);

            } else {
                console.error("Something went wrong: ", data.message || "Unknown error");
            }
            setLoading(false)
        } catch (error) {
            console.error("Error occurred during the request: ", error);
        }


    }


    const loadAlbumData = async () =>{
        try{
            const responce = await fetch(`${url}/api/album/list` , {
                method : "GET",
                headers: {
                    "Content-Type": "application/json"
                  }
            })

            const getAlbumData = await responce.json()
            
            if(getAlbumData.success){
                setAlbumData(getAlbumData.albums)
            }else{
                toast.error("Unalbe to load album data")
            }


        }catch(error){
                toast.error("Error Occured")
        }
    }



    useEffect(()=>{
        loadAlbumData()
    },[])




    return loading ? (
        <div className='grid place-items-center min-h-[80vh]'>

            <div className='w-16 h-16 place-self-center border border-gray-400 border-t-green-800 rounded-full animate-spin'></div>

        </div>
    ) : (
        <form className='flex flex-col items-start gap-6 text-gray-600' onSubmit={onSubmitHandler} >
            <div className='flex gap-8'>
                <div className='flex flex-col gap-4'>
                    <p>Upload Song</p>
                    <input type="file" onChange={(e) => setSong(e.target.files[0])} id='song' accept='audio/*' hidden />
                    <label htmlFor="song">
                        <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' alt="" />
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <p>Upload Image</p>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} id='image' accept='image/*' hidden />
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
                    </label>
                </div>
            </div>


            <div className="flex flex-col gap-2.5 ">

                <p>Song name</p>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Type Here' required className='bg-transparent outline-green-600 border-2 border-gray-400 p-1.5 w-[max(40vw,250px)]' />

            </div>


            <div className="flex flex-col gap-2.5 ">

                <p>Song description</p>
                <input type="text" placeholder='Type Here' onChange={(e) => setDesc(e.target.value)} value={desc} required className='bg-transparent outline-green-600 border-2 border-gray-400 p-1.5 w-[max(40vw,250px)]' />

            </div>

            <div className='flex flex-col gap-2.5'>

                <p>Album</p>
                <select onChange={(e) => setAlbum(e.target.value)} value={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-1.5 w-[150px]'>
                    <option value="none">None</option>
                    {
                        albumData.map((item , index)=>(
                            <option key={index} value={item.name}>{item.name}</option>
                        ))
                    }
                </select>

            </div>


            <button type='submit' className="text-base bg-black text-white py-1.5 px-14 cursor-pointer">
                Add
            </button>



        </form>
    )
}

export default AddSong