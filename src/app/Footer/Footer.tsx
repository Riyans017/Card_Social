import React from 'react'
import Image from 'next/image';
import Nepal_gov from '../../../public/nepal-spn.png';
import Nepal_sps from '../../../public/first_sponsor.jpeg';
function Footer() {
    return (
        <>
            <div className='text-white  bg-black w-full h-[250px] mt-3'>
                <div className='flex w-full  justify-evenly items-center  flex-wrap md:h-full h-full font-mono'>
                    <div>
                        <ul>
                            <li className='hover:border-b-2 hover:border-white  hover:transition  hover:duration-1000 hover:cursor-pointer'>Home</li>
                            <li className='hover:border-b-2 hover:border-white  hover:transition  hover:duration-1000 hover:cursor-pointer'>Community</li>
                            <li className='hover:border-b-2 hover:border-white  hover:transition  hover:duration-1000 hover:cursor-pointer'>Problems</li>
                            <li className='hover:border-b-2 hover:border-white  hover:transition  hover:duration-1000 hover:cursor-pointer'>About us</li>
                        </ul>
                    </div>
                    <div className='flex flex-col h-full items-center justify-center font-mono'>
                       <p> Address : Bardagoriya Kailali </p>
                         <p>School : Shree Mahunyal Secondary School</p>
                    </div>
                    <div>
                        <h2 className='text-xl mb-2 text-center text-[28px] font-bold font-mono'>Sponsors</h2>
                        <div className='flex w-full justify-between mt-2'>
                            <Image className='w-[40%] h-[80px] object-contain' src={Nepal_gov} alt="nothing is too good" />
                            <Image className='w-[40%] h-[80px] object-contain'  src={Nepal_sps} alt="imageg of the sponsor" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer