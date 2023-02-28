import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate,Route,Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Header from './Header'

export default function Login({myFunc}) {

  const { handleSubmit, register, reset } = useForm()
  const [registration, setRegistration] = useState(false)
  const navigate=useNavigate()
 
  
  const login = (data) => {
    myFunc(true)

  }

  const registerUser = async (regis) => {

    const { data } = await axios.post('http://localhost:9000/register', regis)
    reset()
    //alert(data)
    toast.success(data)
    setRegistration(false)
  }
  
  const handleChange = () => {
    //console.log("func callled")
    //navigate('about',{replace:true})
    //redirect('/post')

  
    
  }
  return (
    <div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            Instagram
          </div>

          <div className='col-md-5'>
            {
              registration ?

                <form onSubmit={handleSubmit(registerUser)}>
                  <table>

                    <tr>
                      <td>Name:</td>
                      <td>
                        <input type="text"  {...register('name')} />
                      </td>
                    </tr>

                    <tr>
                      <td>Email :</td>
                      <td> <input type="text" {...register('email')} /></td>
                    </tr>

                    <tr>
                      <td> Phone:</td>
                      <td>
                        <input type="number"  {...register('phone')} />
                      </td>
                    </tr>

                    <tr>
                      <td>City:</td>
                      <td>
                        <input type="text"  {...register('city')} />
                      </td>
                    </tr>

                    <tr>
                      <td> Age:</td>
                      <td>
                        <input type="number"  {...register('age')} />
                      </td>
                    </tr>

                    <tr>
                      <td>Password :</td>

                      <td> <input type="password" {...register('password')} /></td>
                    </tr>


                    <tr>
                      <td>Confirm password:</td>
                      <td>
                        <input type="text"  {...register('cpassword')} />
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
                      <td> <input type="text" {...register('email')} /></td>
                    </tr>


                    <tr>
                      <td>Password :</td>
                      <td> <input type="password" {...register('password')} /></td>
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
