import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'



export default function Home() {
  const [blogList, setBlogList] = useState([])

  useEffect(() => {
    getAllPosts()
  }, [blogList])


  async function getAllPosts() {
    const { data } = await axios.get('http://localhost:9000/posts')
    setBlogList(data)
  }


  const handleDelete = async (id) => {
    const result = await axios.delete(`http://localhost:9000/posts/${id}`)
    blogList.filter((d) => !d._id === id)
    toast.success('Blog Deleted Succesfully')

  }
  return (
    <div>
      {blogList?.map((data, index) => {
        return (
          <>

            {/* <div className='border my-4 mx-5 border-danger'>
              <div>Blog No.{index + 1}</div>
              <div>Title :{data.title}</div>
              <div>Blog :{data.blog}</div>
              <div>Location :{data.location}</div>
              <button onClick={() => handleDelete(data._id)}>Delete</button>
            </div> */}

            {/* style="width: 18rem; */}
            <div className='container my-5  '>
              <div className='row border border-primary'>
                <div className='col-md-6'>

                  <div class="card"  >
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                      <h5 class="card-title">{data?.title}</h5>
                      <p class="card-text">{data?.blog}</p>
                      <p class="card-text">{data?.location}</p>

                      
                    </div>
                  </div>
                      <button className='btn btn-primary' onClick={()=>handleDelete(data._id)}>Delete</button>

                </div>
                <div className='col-md-6'>

                </div>
              </div>
            </div>



          </>
        )
      })}
      <Toaster position="bottom-right" />
    </div>
  )
}
