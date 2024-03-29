"use client";
import Image from "next/image";
import { MaskContainer } from "../ui/svg-mask-effect";
import "./Club.css";
export default function Club() {
  return (
    <div className=" select-none flex pt-12 px-10 lg:px-14  items-center justify-center bg-hero md:h-[80vh] overflow-hidden">
      <div className="flex flex-col  gap md:flex-row items-center max-w-8xl">
        <div className="w-full lg:pr-20">
          <MaskContainer
            revealText={
              <div>
                <p className=" text-gray-400 text-justify font-bold text-2xl md:pr-40 ">
                  At TUDAR Club, we are on a mission to celebrate, preserve, and
                  propagate the vibrant heritage of the Tulu language. Rooted in
                  the cultural mosaic of coastal Karnataka, Tulu is a language
                  that encapsulates centuries of tradition, folklore, and a
                  unique identity.
                </p>
              </div>
            }
            className="h-[30rem] ">
            <p className="relative mb-4 md:mb-0 md:text-2xl">
              ತುಡರ್ ಕೂಟೊಡು, ತುಳುನಾಡ ಪೊರ್ಲ ಪರತಿರಿನ್, ಒರಿಪಾವೊಡು ಬುಲೆಪಾವೊಡು ಪನ್ಪಿ
              ಅಂಗಲಪ್ಪುಡು ಎಂಕುಲು ಉಲ್ಲ. ತುಳು ಬಾಸೆ ಅವು ಸಾರ ವರ್ಸರ್ದಿಂಚ ತನ್ನಾಲ್ಮೆಡೇ
              ಬೊಲ್ಲಗ್ ಎದುರಾದ್ ಮೀಂದೊಂದು ಬೈದಿನವು.
            </p>
          </MaskContainer>
        </div>
        <div className="w-full md:w-1/4 flex justify-center ">
          <Image
            width={250}
            height={300}
            src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/klqbxupxjh776obmsubz"
            alt=""
            className="pr-0 md:pr-4 m-0"
          />
        </div>
      </div>
    </div>
  );
}
