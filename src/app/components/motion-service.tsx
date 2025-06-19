"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface IMotionServiceProps {
  services: string[];
  avatarImg: string;
  title: string;
  subtitle: string;
  text: string;
  position: "L" | "R";
  videoLink: string;
  backgroundImage: string;
}

export default function MotionService(props: IMotionServiceProps) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.backgroundImage})` }}
        className="flex bg-no-repeat bg-cover min-h-screen"
      >
        {props.position === "L" && (
          <div className="flex items-center justify-center mx-10">
            <Image
              src={props.avatarImg}
              width={369}
              height={1068}
              alt="Motion - Keep it simple avatar"
              sizes="(max-width: 1920px) 100vw, 1920px, (max-width: 440px) 100vw, 440px"
            />
            <div className="flex flex-col w-[100%]">
              <h2 className="moon uppercase text-white md:text-4xl">
                {props.title}
              </h2>
              <h3 className="tx-gray moon uppercase md:text-4xl mt-5">
                {props.subtitle}
              </h3>
              <div className="flex flex-col w-[60%] mt-10">
                <p
                  dangerouslySetInnerHTML={{ __html: props.text }}
                  className="montserrat text-white md:text-2xl my-5 font-semibold"
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
            </div>
            <div className="flex flex-col w-[60%]">
              <h3 className="cardenio tx-green md:text-5xl font-medium">
                incluye:
              </h3>
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
        )}

        {props.position === "R" && (
          <div className="flex items-center justify-center ml-20">
            <div className="flex flex-col w-full">
              <h3 className="cardenio tx-green md:text-5xl font-medium">
                incluye:
              </h3>
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
            <div className="flex flex-col w-full ml-12">
              <h2 className="moon uppercase text-white md:text-4xl">
                {props.title}
              </h2>
              <h3 className="tx-gray moon uppercase md:text-4xl mt-5">
                {props.subtitle}
              </h3>
              <div className="flex flex-col w-full mt-10">
                <p
                  dangerouslySetInnerHTML={{ __html: props.text }}
                  className="montserrat text-white md:text-2xl my-5 font-semibold"
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
            </div>
            <Image
              src={props.avatarImg}
              width={369}
              height={1068}
              alt="Motion - Keep it simple avatar"
              sizes="(max-width: 1920px) 100vw, 1920px, (max-width: 440px) 100vw, 440px"
              className="mr-10"
            />
          </div>
        )}
      </div>
    </>
  );
}
