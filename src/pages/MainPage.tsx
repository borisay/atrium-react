import React from 'react'
import Button from '../components/Button/Button'
import {useNavigate} from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  // const [now, setNow] = useState(new Date());
  return(
    <div className={"all"}>

      <div className={"main mb-1"}>
        <div className={"bg-hero-pattern min-h-1/2 bg-cover md:bg-fixed mb-8"}>
          <div className={"bg-gradient-to-r from-black50"}>
            <div className={"flex justify-center min-h-1/2 items-center"}>
              <h1 className={"flex flex-col"}>
                <span className={"text-white text-h1 text-center font-Ubuntu uppercase font-extralight"}>Atrium </span>
                <span className={"text-white text-h2-plus text-center font-Eyesome"}>Staging & Design</span>
              </h1>
            </div>
          </div>
        </div>

        <div className={"p-8 md:p-16 w-full max-w-4xl mx-auto"}>
          <h2 className={"text-h2 text-primary text-center mb-8 uppercase font-extralight"}>About Us</h2>
          <p className={"mb-8 text-p-plus text-center font-extralight leading-10"}>Atrium Design is an interior design
            studio
            specializing in premier staging services for vacant or occupied
            properties.</p>
          <p className={"mb-8 text-p-plus text-center leading-10"}>We create beautiful and stylish spaces that are
            tailored to meet
            the unique needs and preferences of our
            clients.</p>
          <p className={"mb-8 text-p-plus text-center leading-10"}>Our team of professional interior designers will
            collaborate with
            you to develop a
            customized staging plan
            that will highlight your property's best features and potential.</p>

          <div className={"my-6 md:my-12 flex flex-wrap justify-center gap-8"}>
            {/*<button type="submit" className={"px-8 py-3 border rounded hover:border-primary hover:text-primary transition-all"}>Contact us</button>*/}
            {/*<button type="submit">Get a quote</button>*/}
            <Button children={'Contact us'} isActive={false} onClick={() => {
              goToPage('/contact')
            }}/>
            <Button children={'Get a quote'} isActive={false} onClick={() => {
            }}/>
          </div>
          {/*<div className={"divide-solid divide-y-4 divide-gray-light"} divide->*/}
          {/*  <div></div>*/}
          {/*  <div></div>*/}
          {/*</div>*/}
        </div>

        <div className={"flex justify-center flex-col md:flex-row"}>
          <div className={"bg-staging min-h-1/2 bg-cover flex-1"} style={{aspectRatio: "1/1"}}></div>
          <div className={"p-8 md:p-16 flex-1 flex flex-col justify-center bg-gray-light"}>
            <h2 className={"text-h2 text-primary mb-8 uppercase font-extralight"}>Home staging</h2>
            <p>Our home staging service is designed to transform spaces into beautiful and inviting showcases that will
              capture the hearts of potential buyers.</p>
            <div className={"my-6 md:my-12"}>
              <Button children={'Contact us'} isActive={false} onClick={() => {
                goToPage('/contact')
              }}/>
            </div>
          </div>
        </div>

        <div className={"flex justify-center flex-col-reverse md:flex-row"}>
          <div className={"p-8 md:p-16 flex-1 flex flex-col justify-center bg-gray-light"}>
            <h2 className={"text-h2 text-primary mb-8 uppercase font-extralight"}>Furnish and Style</h2>
            <p>
              This service is ideal for those looking to update their home's look with new furniture and accessories
              without making any major renovations.
            </p>
            <div className={"my-6 md:my-12"}>
              <Button children={'Contact us'} isActive={false} onClick={() => {
                goToPage('/contact')
              }}/>
            </div>
          </div>
          <div className={"bg-furnish min-h-1/2 bg-cover flex-1"} style={{aspectRatio: "1/1"}}></div>
        </div>

        <div className={"flex justify-center flex-col md:flex-row"}>
          <div className={"bg-vacation min-h-1/2 bg-cover flex-1"} style={{aspectRatio: "1/1"}}></div>
          <div className={"p-8 md:p-16 flex-1 flex flex-col justify-center bg-gray-light"}>
            <h2 className={"text-h2 text-primary mb-8 uppercase font-extralight"}>Vacation Rentals</h2>
            <p>
              Maximize your rental income and bookings with our expert help in transforming your short-term rental
              property into attractive and beautiful space.
            </p>
            <div className={"my-6 md:my-12"}>
              <Button children={'Contact us'} isActive={false} onClick={() => {
                goToPage('/contact')
              }}/>
            </div>
          </div>
        </div>
      </div>
      <div className={"h-10"}></div>
    </div>

  )
}

