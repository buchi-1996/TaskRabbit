import React, {createContext, useState} from 'react'

export const AppState = createContext();




const AppContext = ({children}) => {
    const [open, setOpen] = useState(false)
    const [tasks, setTasks] = useState([])

    console.log(open)


  return (
    <AppState.Provider value={{open, setOpen, tasks, setTasks}}>
        {children}
    </AppState.Provider>
  )
}

export default AppContext