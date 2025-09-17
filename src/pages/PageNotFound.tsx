
import React from 'react';
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";

export default function PageNotFound(){
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  return(
    <div className={"max-w-[740px] mx-auto p-[6%] md:px-0"}>
      <h2 className={"text-h2 text-primary mb-8 uppercase font-extralight "}>It appears the page you were looking for
        doesn't exist or has moved.</h2>
      <p className={"mb-8"}>Please use the main navigation to find what you need or click below to return to the home
        page.</p>
      <div className={"my-6 md:my-12 text-center"}>
        <Button children={'Go Home'} isActive={false} onClick={() => {
          goToPage('/')
        }}/>
      </div>
    </div>
  )
}
