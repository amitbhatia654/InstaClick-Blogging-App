import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'


export default function NewPost() {
  const { handleSubmit, register, reset } = useForm()
  const [image, setImage] = useState('')
  var userId = {}
  useSelector((data) => userId = data.cart[0])

  async function addPost(data) {
    const formData = new FormData()
    // formData.append('image', image)
    // formData.append('title', data.title)
    // formData.append('location', data.location)
    // formData.append('userId', userId._id)
    // formData.append('userName', userId.name)

    formData.append("lp_campaign_id", "64fb5e8071caf");
    formData.append("lp_campaign_key", "67yJhdf3cpzxXQqYHrFb");
    formData.append("name", "test");
    formData.append("lp_response", "JSON");


    //const res = await axios.post('http://localhost:9000/posts', formData)
    const res = await axios.post('https://emailagencyinc.leadspediatrack.com/post.do', formData)


    console.log(res, 'the res is')
    toast.success('Blog Added Succesully')
    reset()
  }
  return (
    <div>

      {/* <div className='addPost container-fluid'>
        <div className='row'>
          <div className='col-md-3'>

            <form onSubmit={handleSubmit(addPost)} enctype="multipart/form-data">
              <table >
                <tbody>
                  <tr>
                    <td>Title </td>
                    <td><input type="text"  {...register('title')} /> </td>
                  </tr>
                  <tr>
                    <td>Image</td>
                    <td><input type="file" onChange={(e) => setImage(e.target.files[0])} /></td>
                  </tr>

                  <tr>
                    <td>Location</td>
                    <td>
                      <input type="text"  {...register('location')} />
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td><button> Submit</button></td>
                  </tr>

                </tbody>
              </table>

            </form>
          </div>
        </div>
      </div> */}


      <div className='container-fluid '>
        <div className='row border'>

          <form onSubmit={handleSubmit(addPost)} enctype="multipart/form-data" >



            <div className='col-75'>
              <label >Name</label>
              <input type="text" {...register('title')} />
            </div>


            <div className='col-25'>
              <label for="">Image</label>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>

            <div className='col-75'>
              <label for="location">Location</label>
              <input type="text"  {...register('location')} />
            </div>

            <div className='col-75'>
              <button> Submit</button>

            </div>

          </form>
        </div>

      </div>
      <Toaster position="bottom-right" />

    </div>
  )
}
