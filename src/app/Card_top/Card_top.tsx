"use server";
import Image from 'next/image';
import Person from '../../../public/person.jpeg'
import VideoCam from '../../../public/videocam-outline.svg';
import Happy from '../../../public/happy-outline.svg';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import Profile from '../Profile/Profile';
  import Images from '../../../public/images-outline.svg';
function Card_top() {
   
  return (
     <>
      <div className="lg:w-[35%] h-fit m-auto sm:w-[70%] 2xl:w-[40%] border-2 rounded-xl mb-3 mt-3">
       <div className='flex item-center justify-between gap-1 p-2 border-b-[2px]'>
        <div>
                
              <Image
            src={Person}
            className="w-[45px] h-[45px] rounded-full object-cover"
            alt="person title"
          />
        </div>
      
      <div className='flex justify-center w-[65%] items-center border-none  '>
        <input className='bg-[whitesmoke] w-full p-3 rounded-[14px] outline-none' type="text" placeholder="what's on your mind" />
      </div>

      <div className='flex items-center justify-center gap-1 hover:cursor-pointer'>
        <Image src={Images}  className="w-[35px] h-[35px]" alt="person"/> <span className='font-mono font-bold'>Photo's</span>
      </div>
       </div>


   
      </div>
     </>
  )
}

export default Card_top