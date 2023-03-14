import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

export default function Home() {
  const [blogList, setBlogList] = useState([])
  var userId = {}

  useSelector((data) => userId = data.cart[0]._id)

  useEffect(() => {
    getAllPosts()
  }, [])


  async function getAllPosts() {
    const { data } = await axios.get(`http://localhost:9000/posts/${userId}`)
    setBlogList(data)
  }

  return (
    <div>
      {blogList?.map((data, index) => {
        return (
          < div key={index}>
            <div className='container my-5 homePage '>
              <div className='row '>
                <div className='col-md-7 border border-primary'>

                  <h4>{data?.userName} </h4>
                  <span><i class="fa-solid fa-location-dot"></i> {data?.location}</span>

                  <div className="card"  >
                    <img src={`http://localhost:9000/${data?.imageUrl}`} className="card-img-top allImages img-fluid" />
                    <div>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{data?.title}</h6>

                    </div>
                  </div>

                </div>
                <div className='col-md-6'>

                </div>
              </div>
            </div>
          </div>
        )
      })}
      <Toaster position="bottom-right" />
    </div>
  )
}
