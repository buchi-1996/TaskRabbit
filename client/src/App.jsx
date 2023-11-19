import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import TaskList from './components/TaskList';
import Header from './components/Header';
import * as Dialog from '@radix-ui/react-dialog';
import TaskForm from './components/TaskForm';
import { AppState } from './context/AppContext';


function App() {
const {open, setOpen, tasks, setTasks } = useContext(AppState)


  useEffect(() => {
    const getTasks = async () => {
      try {
        const result = await axios.get('http://localhost:4000/api/v1/tasks')
        setTasks(result.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getTasks()
  }, [])


  return (
    <div className='bg-[#010409] h-screen'>
      <Header />
      <div className="container max-w-6xl mx-auto">

        <div className='px-10 bg-[#0a0e15a5] bg-opacity-25 py-8 pb-10 rounded-lg relative'>
          <div className='mb-5 '>
            <label htmlFor="checkbox" className='text-gray-200 px-8 font-bold'>
              <input type="checkbox" id="checkbox" name="checkbox" className='w-4 h-4 mr-4 text-yellow-600 bg-gray-700 border-yellow-300 rounded focus:ring-yellow-500' />
              Mark All
            </label>
          </div>
          <div className='h-[65vh] overflow-auto scrollbar-thin scrollbar-thumb-[#F0B229] scrollbar-thumb-rounded-full [&::-webkit-scrollbar-thumb]:rounded-full scrollbar-track-rounded-full [&::-webkit-scrollbar-track]:rounded-full scrollbar-track-gray-700'>
            {tasks.map(({ _id, title, desc }) => {
              return (
                <TaskList key={_id} title={title} description={desc} />
              )
            })}
          </div>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <div className='absolute bg-[#F0B229] w-16 h-16 grid place-items-center text-black p-4 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-50'>
                <svg xmlns="http://www.w3.org/2000/svg" className='animate-ping' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className='absolute animate-ping bg-[#f0df29] text-black inset-0  rounded-full' />
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className='h-full w-full absolute inset-0 bg-yellow/50 backdrop-blur-sm' />
              <Dialog.Content className='bg-[#010409] shadow-2xl fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] focus:outline-none'>
                <div className="flex items-baseline justify-between">
                  <Dialog.Title className="text-2xl text-white font-medium mb-4">
                    Add a Task 😎
                  </Dialog.Title>
                  <Dialog.Close>
                    <div className='bg-white bg-opacity-0  text-gray-500 p-1 hover:bg-opacity-10 rounded'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </Dialog.Close>
                </div>
                  <TaskForm />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

        </div>
      </div>

    </div>
  )
}

export default App
