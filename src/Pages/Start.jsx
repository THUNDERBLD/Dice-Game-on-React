// import React from 'react'
import Button from '../Components/Button'
import { NavLink } from 'react-router-dom'

function Start() {
  return (
    <div className='flex justify-center items-center'>
        <img className='w-96 mt-36' src="https://rukminim2.flixcart.com/image/850/1000/jndhrbk0/board-game/f/4/y/dice-for-playing-pmw-original-imafafc9hzahj64a.jpeg?q=90&crop=false" alt="" />
        <div className='m-20'>
        <div className='text-8xl mt-16 font-bold'>
            DICE GAME
        </div>
        <NavLink  to='/Main' className={({isActive}) => isActive?'mt-10 flex justify-end cursor-pointer':'bg-black text-white mt-4'}>
            <Button name="Play Now"/>
        </NavLink>
        </div>
    </div>
  )
}

export default Start