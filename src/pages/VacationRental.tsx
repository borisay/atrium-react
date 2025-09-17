import React from 'react'
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";

export default function VacationRental(){
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div className={"bg-vacation-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}>
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span className={"text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"}>
                VACATION RENTALS
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className={"p-8 md:p-16 w-full max-w-4xl mx-auto"}>
        <p className={"mb-8 text-p-plus text-center font-extralight leading-10"}> Stunning short-term rental property is
          not just a place to stay, it's an experience.</p>
        <p className={"mb-8 text-p-plus text-center leading-10"}> Even with fantastic amenities and a prime location, an
          unattractive short-term rental loses out on potential guests. Avoid this costly mistake: professional design
          can maximize your income by creating a beautiful, functional, and marketable space for your guests.</p>
        <p className={"mb-8 text-p-plus text-center leading-10"}> Allow us to design a warm and inviting place with our
          vacation rental design and styling services. We begin this process by creating a design board to capture the
          desired look and feel of a space and then provide you with a detailed shopping list for everything you will
          need to create a beautiful space — from furniture to accessories.</p>
        <div className={"my-6 md:my-12 flex flex-wrap justify-center gap-8"}>
          <Button children={'Contact us'} isActive={false} onClick={() => {
            goToPage('/contact')
          }}/>
          <Button children={'Get a quote'} isActive={false} onClick={() => {
            goToPage('/get-a-quote')
          }}/>
        </div>

      </div>

      <div className={"p-4 flex justify-center flex-col md:flex-row lg:w-[1100px] mx-auto"}>
        <div className={"m-4 min-h-[50%] bg-cover flex-1 bg-vacation-img1"} style={{aspectRatio: "1/1"}}></div>
        <div className={"m-4 min-h-[50%] bg-cover flex-1 bg-vacation-img2"} style={{aspectRatio: "1/1"}}></div>
      </div>

    </div>


  )
}
