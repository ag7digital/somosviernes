"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface IMotionServiceMobileProps {
  services: string[];
  title: string;
  subtitle: string;
  text: string;
  videoLink: string;
  backgroundImage: string;
  backgroundColor: string;
}

export default function MotionServiceMobile(props: IMotionServiceMobileProps) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundColor: props.backgroundColor,
        }}
        className="flex flex-col items-center py-10 w-full bg-blend-soft-light min-h-screen bg-opacity-60 bg-no-repeat bg-cover"
      >
        <h2 className="moon uppercase text-white text-3xl">{props.title}</h2>
        <h3 className="tx-gray moon uppercase text-2xl mt-2">
          {props.subtitle}
        </h3>
        <div className="flex px-10 flex-col">
          <p
            dangerouslySetInnerHTML={{ __html: props.text }}
            className="montserrat text-white text-[1.2rem] text-center my-5 font-semibold"
          ></p>
          <div className="flex items-center justify-center mt-10">
            <Button className="cardenio bg-[#91D179] hover:bg-[#91D179] text-[#36B77F] font-bold text-3xl py-8 ">
              <a
                href={props.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer"
              >
                Mira un Demo
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full items-center mt-10">
          <h3 className="cardenio text-white text-5xl font-medium">incluye:</h3>
          <div className="flex flex-col mt-5">
            <ul>
              {props.services.map((service, idx) => (
                <li key={`simple-${idx}`}>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                      className="mr-2"
                    />
                    <span className="montserrat tx-gray md:text-[1.2rem]">
                      {service}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
