import React from 'react'
import { Routes, Route, Link ,useNavigate} from 'react-router-dom'
import About from './About'
import Home from './Home'
import NewPost from './NewPost'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutFunction } from '../store/LoginData'


export default function Header({myFunc}) {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    var loginUser={}
    useSelector((state)=>loginUser=state.cart[0])

    function handleLogout(){
        navigate('/')
        myFunc(false)
        dispatch(logoutFunction(loginUser))
    }
   
    return (
        <div>
            <div className='container-fluid bg-warning bg-gradient'>
                <div className='row'>
                    <div className='col-md-10'>
                        <ul className='list-inline myHeader'>
                            <li className='logo'>InstaClickS </li>
                            <li><Link to='/' className='list-inline-item mylink'><i class="fa-solid fa-house"></i> Home</Link></li>
                            <li><Link to='/post' className='list-inline-item mylink'><i class="fa-solid fa-plus"></i>  Create</Link ></li>
                            <li><Link  to='/about' className='list-inline-item mylink'> <i class="fa-regular fa-circle-user"></i> Profile</Link ></li>
                           
                        </ul>                        
                    </div>

                    <div className='col-md-2 my-3'> Welcome <b>{loginUser.name} </b>  
                    <button  className='btn btn-primary' onClick={()=>handleLogout()}>Logout</button> </div>
                </div>
            </div>

            <Routes>
                <Route  path='/' element={<Home />}> </Route>
                <Route path='/about' element={<About />}> </Route>
                <Route path='/post' element={<NewPost />}> </Route>
                {/* <Route path='/login' element={<Login />}> </Route> */}
                

            </Routes>
        </div>
    )
}
