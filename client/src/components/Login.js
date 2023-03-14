import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { loginFunction } from '../store/LoginData'
//const data =require('../Images/bloggingApp')

export default function Login({ myFunc }) {

  const { handleSubmit, register, reset } = useForm()
  const [registration, setRegistration] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = async (details) => {
    const { data } = await axios.post('http://localhost:9000/login', details)
    //console.log(data.data, 'the login data is ')
    if (data.message == 'user Found') {
      myFunc(true)
      dispatch(loginFunction(data.data))
    }
    else {
      alert(data)
    }
    reset()
  }

  const registerUser = async (details) => {
    if (details.password !== details.cpassword) {
      return alert('password and confirm Password should be same')
    }
    const { data } = await axios.post('http://localhost:9000/register', details)
    reset()
    toast.success(data)
    setRegistration(false)
  }


  return (
    <div>

      <div className='container-fluid bg-primary mainDiv'>
        <div className='row  '>
          <h1 className='logo'> InstaClick BloGGing  </h1>
          <div className='col-md-8 '>

            <img
              className='img-fluid max-width: 100% '
              src='https://cdn.pixabay.com/photo/2015/03/16/08/18/hex-675576_960_720.jpg' alt="" />
          </div>

          <div className='col-md-3 bg-primary text-white py-4 border border-warning border-2 rounded'>
            {
              registration ?

                <form onSubmit={handleSubmit(registerUser)}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>
                          <input type="text"  {...register('name')} required />
                        </td>
                      </tr>

                      <tr>
                        <td>Email :</td>
                        <td> <input type="email" {...register('email')} required /></td>
                      </tr>

                      <tr>
                        <td> Phone:</td>
                        <td>
                          <input type="number"  {...register('phone')} required />
                        </td>
                      </tr>

                      <tr>
                        <td>City:</td>
                        <td>
                          <input type="text"  {...register('city')} required />
                        </td>
                      </tr>

                      <tr>
                        <td> Age:</td>
                        <td>
                          <input type="number"  {...register('age')} required />
                        </td>
                      </tr>

                      <tr>
                        <td>Password :</td>

                        <td> <input type="password" {...register('password')} required /></td>
                      </tr>


                      <tr>
                        <td>Confirm password:</td>
                        <td>
                          <input type="password"  {...register('cpassword')} required />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button type='submit' className='btn btn-warning my-2'>Register</button>
                        </td>
                      </tr>

                    </tbody>

                  </table>
                </form>

                :

                <form onSubmit={handleSubmit(login)}>
                  <table>

                    <tbody>

                      <tr>
                        <td>Email :</td>
                        <td> <input type="email" {...register('email')} required /></td>
                      </tr>


                      <tr>
                        <td>Password :</td>
                        <td> <input type="password" {...register('password')} required /></td>
                      </tr>

                      <tr>
                        <td>
                          <button type='submit' className='btn btn-warning my-2'>Login</button>
                        </td>
                      </tr>

                    </tbody>

                  </table>
                </form>

            }


            <button className='btn btn-warning' onClick={() => setRegistration(!registration)}>{registration ? 'Login' : 'New user Registration'}</button>

          </div>
        </div>

      </div>

      <Toaster position="bottom-right" />
    </div>
  )
}
