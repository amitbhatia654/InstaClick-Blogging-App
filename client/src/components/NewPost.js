import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


export default function NewPost() {
  const { handleSubmit, register, reset } = useForm()

  async function addPost(data) {
    const result = await axios.post('http://localhost:9000/posts', data)
    toast.success('Blog Added Succesully')
    reset()
  }
  return (
    <div>

      <form onSubmit={handleSubmit(addPost)}>
        Title<input type="text"  {...register('title')} /> <br />
        Blog<input type="text"  {...register('blog')} /><br />
        Location<input type="text"  {...register('location')} /><br />
        <button> Submit</button>
      </form>
      <Toaster position="bottom-right" />

    </div>
  )
}
