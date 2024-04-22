import { useState } from 'react'
import Box from '../Components/Box'

function Main() {
    const [count, setCount] = useState(0);

    const random = Math.floor(Math.random()*6 + 1);
    const arrNum = [1,2,3,4,5,6]

    console.log(count)
    return (
        <>
        <div className='flex justify-between'>
            <div className='Score w-80 mt-16'>
                <div className="num text-8xl font-semibold text-center">0</div>
                <div className="text-2xl font-semibold text-center">Total Score</div>
            </div>
            <div className='Selection w-[40vw] m-14'>
                <div className='flex'>

                    <div className='flex'>
                        {arrNum.map((value, i)=>(
                            <div key={i} onClick={()=>{
                                setCount(value)
                                if(value == random){
                                    parseInt(document.querySelector('.num'))
                                    document.querySelector('.num').innerHTML = parseInt(document.querySelector('.num').innerHTML) + 1
                                }
                            }}>
                                <Box num={value}/>
                            </div>                            
                        ))}
                    </div>


                    {/* <div className='1' onClick={()=>{setCount(count+1)}}>
                        <Box num='1' />
                    </div>
                    <div className='2' onClick={()=>{setCount(count+1)}}>
                        <Box num='2' />
                    </div>
                    <div className='3' onClick={()=>{setCount(count+1)}}>
                        <Box num='3' />
                    </div>
                    <div className='4' onClick={()=>{setCount(count+1)}}>
                        <Box num='4' />
                    </div>
                    <div className='5' onClick={()=>{setCount(count+1)}}>
                        <Box num='5' />
                    </div>
                    <div className='6' onClick={()=>{setCount(count+1)}}>
                        <Box num='6' />
                    </div> */}
                </div>
                <div className='flex justify-end'>
                    <div  className='text-xl font-bold px-4'>
                        Select Number
                    </div>
                </div>
                <div className='blood invisible'>

                </div>
            <div className='thunder text-8xl font-semibold max-w-64 m-auto'>
                {random}
            </div>
            </div>
        </div>
        
    </>
    )
}

export default Main