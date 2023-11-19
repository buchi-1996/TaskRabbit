import React, { useContext, useState } from 'react'
import { AppState } from '../context/AppContext';
import axios from 'axios';

const TaskForm = () => {

    const [inputs, setInputs] = useState({ title: "", desc: "" })
    const validate = inputs.title === "" || inputs.desc === "";
    const { open, setOpen, setTasks } = useContext(AppState)



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (validate) {
                alert('Enter fields')
                return;
            }
            const body = inputs;
           const response = await axios.post('http://localhost:4000/api/v1/tasks', body)
           console.log(response)
            setTasks(prev => [...prev, body])
            setOpen(false)
        } catch (err) {
            console.log(err)
        }
        setInputs(({ title: '', desc: '' }))

    }

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <form onSubmit={handleSubmit} className=''>
            <div className='mb-4'>
                <input type="text" className='w-full bg-transparent text-white rounded ring-1 ring-white focus:ring-2 focus:ring-yellow-400  border-none outline-none' value={inputs.title} onChange={handleChange} name="title" id="title" placeholder='Title' />
            </div>
            <div className='mb-5'>
                <textarea type="text" rows={7} className='w-full bg-transparent text-white rounded ring-1 ring-white focus:ring-2 focus:ring-yellow-400  border-none outline-none' value={inputs.desc} onChange={handleChange} name="desc" id="desc" placeholder='Description' />
            </div>
           <div className='flex space-x-3'>
           <input onClick={() => setOpen(false)} type="button" value="Cancel" className='bg-[#ffffff] hover:bg-[#f0f0f0] cursor-pointer py-2 px-4 block ml-auto font-bold rounded' />
            <input type="submit" value="Add" className='bg-[#F0B229] hover:bg-[#f0dc29] cursor-pointer py-2 px-4 block ml-auto font-bold rounded' />
           </div>
        </form>
    )
}

export default TaskForm