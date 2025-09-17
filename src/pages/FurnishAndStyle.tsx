import React from 'react'
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";


export default function FurnishAndStyle(){
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  return(
    <div>
      <div className={"bg-furnish-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}>
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span className={"text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"}>
                Furnish and Style
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className={"p-8 md:p-16 w-full max-w-4xl mx-auto"}>
        <p className={"mb-8 text-p-plus text-center font-extralight leading-10"}> Tired of outdated furniture and décor
          but hesitant about renovations? Consider a refresh with our furnish and style service. We transform your space
          without any structural changes to your home.</p>
        <p className={"mb-8 text-p-plus text-center leading-10"}> Our expert designers create a personalized design
          board to capture your vision, then curate a selection of stylish furniture and décor that fits your
          budget.</p>
        <div className={"my-6 md:my-12 flex flex-wrap justify-center gap-8"}>
          <Button children={'Get a quote'} isActive={false} onClick={() => {
            goToPage('/get-a-quote')
          }}/>
        </div>
      </div>


      <div className={"p-4 flex justify-center flex-col md:flex-row lg:w-[1100px] mx-auto"}>
        <div className={"min-h-[50%] bg-cover flex-1 bg-furnish-img"} style={{aspectRatio: "1/1"}}></div>

        <div className={"min-h-[50%] py-8 sm:px-8 md:px-0 flex-1 flex flex-col justify-center"}>
          <div className={"mx-[5%] sm:mx-[10%]"}>
            <h3 className={"text-h3  mb-8 uppercase font-extralight"}>Initial Consultation</h3>
            <p className={"mb-8"}>Contact us to schedule a meeting. We will meet with you or your real estate agent to view the property
              and discuss our goals for staging.</p>
            <h3 className={"text-h3  mb-8 uppercase font-extralight"}>Service Includes:</h3>
            <p>
              <li>In-person consultation</li>
              <li>Measurements taken of your space</li>
              <li>Design board is created and presented to the client</li>
              <li>Curated selection of furniture, accessories and paint color for your project</li>
              <li>Furniture and decor procurement with designer discounts applied</li>
              <li>Installation and room styling at the completion of your project</li>
            </p>
          </div>
          <div className={"my-6 md:my-12 mx-[auto]"}>
            <Button children={'Contact us'} isActive={false} onClick={() => {
              goToPage('/contact')
            }}/>
          </div>
        </div>
      </div>


    </div>
  )
}
