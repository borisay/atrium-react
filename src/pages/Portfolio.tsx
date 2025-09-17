import React from 'react';
import MasonryGallery from '../components/MasonryGallery/MasonryGallery';
import {sampleGalleryItems} from '../data/galleryItems';
import "yet-another-react-lightbox/styles.css";

export default function Portfolio() {
  return(
    <div>
      <div className={"bg-portfolio-bkg min-h-[40vw] bg-cover lg:bg-fixed mb-8"}>
        <div className={"bg-gradient-to-r from-black50"}>
          <div className={"flex justify-center min-h-[40vw] items-center"}>
            <h1 className={"flex flex-col"}>
              <span className={"text-white text-h2-plus text-center font-Ubuntu uppercase font-extralight"}>
                Portfolio
              </span>
            </h1>
          </div>
        </div>
      </div>
      <MasonryGallery items={sampleGalleryItems}/>
    </div>
  )
}
