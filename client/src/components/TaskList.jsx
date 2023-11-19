import React from 'react'
import { Button, IconButton } from '@radix-ui/themes'

const TaskList = ({ title, description }) => {
    return (
        <div className='flex flex-row items-center gap-4 justify-between bg-gradient-to-r mr-10 transform transition-all duration-100 ease-in hover:scale-[0.98] from-[#1C170F] to-[#110E1D] py-5 px-8 rounded-lg mb-2'>
            <div className='flex flex-1 gap-4 items-baseline'>
                <input type="checkbox" className='w-4 h-4 text-yellow-600 bg-gray-700 border-yellow-300 rounded focus:ring-yellow-500' />
            
            <div>
                <h4 className='text-xl font-medium text-white'>{title}</h4>
                <p className='text-gray-500 text-sm'>{description}</p>
            </div>
            </div>
            <button className='bg-yellow-400 bg-opacity-20  text-yellow-500 p-1.5 hover:bg-opacity-25 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
    )
}

export default TaskList