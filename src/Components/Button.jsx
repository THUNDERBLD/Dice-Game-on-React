// import React from 'react'


function Button({name}) {
  return (
    <div>
        <div className='button bg-black text-white w-56 text-center p-3 px-10 shadow-xl text-2xl font-semibold rounded-lg'>
            {name}
        </div>
    </div>
  )
}

export default Button