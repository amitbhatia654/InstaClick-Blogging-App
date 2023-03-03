import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Header from './Header'
import {useDispatch} from 'react-redux'
import { loginFunction } from '../store/LoginData'

export default function Login({ myFunc }) {

  const { handleSubmit, register, reset } = useForm()
  const [registration, setRegistration] = useState(false)
  const navigate = useNavigate()
  const dispatch=useDispatch()

  const login = async (details) => {
    const { data } = await axios.post('http://localhost:9000/login', details)
    if (data.message == 'user Found') {
      myFunc(true)
      dispatch(loginFunction(data.data))
    }
    else{
      alert(data)
    }
    reset()
  }

  const registerUser = async (details) => {
    if(details.password !== details.cpassword){
      return alert('password and confirm Password should be same')
    }
    const { data } = await axios.post('http://localhost:9000/register', details)
    reset()
    toast.success(data)
    setRegistration(false)
  }


  return (
    <div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            InstaClick BloGGing
          </div>

          <div className='col-md-5'>
            {
              registration ?

                <form onSubmit={handleSubmit(registerUser)}>
                  <table>

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
                        <input type="number"  {...register('phone')} required/>
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
                        <input type="number"  {...register('age')} required/>
                      </td>
                    </tr>

                    <tr>
                      <td>Password :</td>

                      <td> <input type="password" {...register('password')} required/></td>
                    </tr>


                    <tr>
                      <td>Confirm password:</td>
                      <td>
                        <input type="password"  {...register('cpassword')} required />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button type='submit' className='btn btn-primary'>Register</button>
                      </td>
                    </tr>

                  </table>
                </form>

                :

                <form onSubmit={handleSubmit(login)}>
                  <table>

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
                        <button type='submit' className='btn btn-primary'>Login</button>
                      </td>
                    </tr>

                  </table>
                </form>

            }


            <button className='btn btn-primary' onClick={() => setRegistration(!registration)}>{registration ? 'Login' : 'New user Registration'}</button>

          </div>
        </div>

      </div>

      <Toaster position="bottom-right" />
    </div>
  )
}
