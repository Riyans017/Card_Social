"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Person from "../../../public/person.jpeg";
import React from "react";
import Heart from "../../../public/heart-outline.svg";
import Share from '../../../public/share-outline.svg';
import Message from "../../../public/chatbox.svg";
import Flower from "../../../public/flower.jpeg";
function Cards() {
  const [like, setLike] = useState(1),
    [islike, setisLike] = useState(false);

  let Clicked = () => {
    setLike(like + (islike ? 1 : -1));
    setisLike(!islike);
  };
  return (
    <Card className=" lg:w-[35%] h-fit m-auto sm:w-[70%] 2xl:w-[40%]">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Image
            src={Person}
            className="w-[45px] h-[45px] rounded-full object-cover"
            alt="person title"
          />
          <div className="ml-2 flex flex-col">
              <div className="text-[0.9rem] font-semibold w-full">
                <p>Shree Mahunyal secondary school</p>
              </div>
              <div className="p-0 m-0 box-border">
                <span className="text-start font-light text-[0.8rem] ">
                  10pm
                </span>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="ml-1 text-black">
          <p className="mb-1">
            Met after a long time so good to see each other
          </p>
          <Image
            className="w-[100%] rounded-[6px] h-[40%] lg:object-cover lg:w-full "
            src={Flower}

            alt="photo of flower"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex p-[0.9rem] border-t-2 pt-[0.9rem] justify-around ">
        <div className="flex gap-1 items-center " onClick={Clicked}>
          <Image
            src={Heart}
            className="liked w-[20px] h-[20px] hover:cursor-pointer"
            alt="heart"
          />{" "}
          <span className="text-[1.1rem]"> {like} </span>
        </div>
        <div className="border-r-2 "></div>
        <div className="flex items-center">
          <Image
            src={Message}
            className=" w-[20px] h-[20px] hover:cursor-pointer"
            alt="messaging"
          />
        </div>
        <div className="border-r-2"></div>
        <div className="flex items-center">
        <Image
            src={Share}
            className=" w-[20px] h-[20px] hover:cursor-pointer"
            alt="messaging"
          />
          
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

export default Cards;
