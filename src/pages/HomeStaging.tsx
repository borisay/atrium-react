import React from 'react'
import Button from "../components/Button/Button";
import {useNavigate} from "react-router-dom";
export default function HomeStaging() {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    navigate(path);
  };
  return(
    <div>
      <div className={"bg-staging-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}>
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span className={"text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"}>
                Home Staging
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className={"p-8 md:p-16 w-full max-w-4xl mx-auto"}>
        <p className={"mb-8 text-p-plus text-center font-extralight leading-10"}> Tired of outdated furniture and décor
          but hesitant about renovations? Consider a refresh with our furnish
          and style service. We transform your space without any structural changes to your home.</p>
        <p className={"mb-8 text-p-plus text-center leading-10"}> Our expert designers create a personalized design
          board to capture your vision, then curate a selection of
          stylish furniture and décor that fits your budget.</p>
        <div className={"my-6 md:my-12 flex flex-wrap justify-center gap-8"}>
          <Button children={'Get a quote'} isActive={false} onClick={() => {
            goToPage('/get-a-quote')
          }}/>
        </div>
      </div>

      <div className={"p-4 flex justify-center flex-col md:flex-row lg:w-[1100px] mx-auto"}>
        <div className={"min-h-[50%] flex-1 sm:px-8 md:px-0 "}>
          <div className={"mx-[5%] sm:mx-[10%]"}>
            <h2 className={"text-h2 text-primary text-left mb-8 uppercase font-extralight"}>Our staging process
            </h2>
          </div>
          </div>

          <div className={"min-h-[50%] py-8 sm:px-8 md:px-0 flex-1 flex flex-col justify-center"}>
            <div className={"mx-[5%] sm:mx-[10%]"}>
              <h3 className={"text-h3  mb-4 uppercase font-extralight"}>Initial Consultation</h3>
              <p className={"mb-4"}>Contact us to schedule a meeting. We will meet with you or your real estate agent to view the
                property and discuss our goals for staging.</p>
              <h3 className={"text-h3  mb-4 uppercase font-extralight"}>Staging project development</h3>
              <p className={"mb-4"}>Based on our initial consultation, we will create a comprehensive staging plan that includes the
                timeline, a list of recommended repairs or improvements, outline of the staging elements (furniture,
                decor, etc.) needed for each room, and pricing.</p>
              <h3 className={"text-h3  mb-4 uppercase font-extralight"}>The Contract</h3>
              <p className={"mb-4"}>Once you have agreed to use our staging services, we require a signed contract before scheduling your
                staging. Payment is due at the time of staging.</p>
              <h3 className={"text-h3  mb-4 uppercase font-extralight"}>Staging</h3>
              <p className={"mb-4"}>We will deliver all furniture and decor as necessary to the property. You do not need to be present,
                but you do need to provide access to the property.</p>
              <h3 className={"text-h3  mb-4 uppercase font-extralight"}>De-staging and Cleanup</h3>
              <p className={"mb-4"}>Once the property has sold, you will need to schedule a de-stage with us. We will remove all decor
                and furniture and clean up the space, leaving it in excellent condition for its new residents.</p>
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
