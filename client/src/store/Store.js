import {configureStore} from '@reduxjs/toolkit'

import LoginData from './LoginData'

const store =configureStore({
    reducer:{
        cart:LoginData
    }
})

export default store