import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


export default function About() {
  const [mypost, setMyPost] = useState([])

  useEffect(() => {
    getMyPosts()
  }, [])
  var aboutMe = {}
  useSelector((data) => aboutMe = data.cart[0])

  const getMyPosts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:9000/myposts/${aboutMe._id}`)
      setMyPost(data)
    }

    catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>{aboutMe.name}</td>
            </tr>

            <tr>
              <td>Email :</td>
              <td>{aboutMe.email}</td>
            </tr>

            <tr>
              <td>Phone :</td>
              <td>{aboutMe.phone}</td>
            </tr>

            <tr>
              <td>Age :</td>
              <td>{aboutMe.age}</td>
            </tr>

            <tr>
              <td>City :</td>
              <td>{aboutMe.city}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>My Post</h2>
      <div className='container-fluid'>
        <div className='row'>

        

          {
            mypost?.map((data) => {
              return (
                <div className='col-md-3 border'>

                  <div className=''>

                    <div className="card "  >
                      <img src={`http://localhost:9000/${data?.imageUrl}`} className="card-img-top myimages img-fluid" />
                    </div>
                  </div>
                </div>
              )
            })
          }

</div>
      </div>

        


    </div>
  )
}
