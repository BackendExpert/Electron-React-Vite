import React, { useState } from 'react'

const HomePage = () => {
    const [btnClicked, setbtnClicked] = useState(false)

    const ClickButton = () => {
        setbtnClicked(true)
    }
  return (
    <div className='text-black text-2xl bg-gray-200 py-8 px-4 min-h-screen'>
        {
            btnClicked ?
                <button onClick={ClickButton} className='bg-red-500 text-white rounded py-2 px-4'>Click me to Blue</button>
            :
                <button onClick={ClickButton} className='bg-blue-500 text-white rounded py-2 px-4'>Click me to red</button>
        }

    </div>
  )
}

export default HomePage