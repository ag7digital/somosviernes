"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

export default function IndustriesImage() {
  return (
    <>
      {/* DESKTOP */}
      <div className="only-desktop items-end">
        <motion.div
          className="flex flex-col w-full gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link
              href="https://youtube.com/playlist?list=PLCBy57mI0AAG33aUZMbhk1xf56wVs4Edr&si=TNj_JH8Q9b_FnIyZ"
              target="_blank"
              rel="noopener noreferer"
            >
              hesq
            </Link>
          </Button>
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAHRHwVBOHilEQijXzdstZz9&si=NMQrfe8xJe0feKdN">
              Oil & Gas
            </Link>
          </Button>
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAFhkaApIKZFJcuAC519TSbG&si=MkqBe8EPqtNssti7">
              Agricultura
            </Link>
          </Button>
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAFVx1qQqafM8IZwammNrQ7D&si=moLyRBTUpdW_GKLy">
              construcción
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="only-desktop items-end  ml-20">
        <motion.div
          className="flex flex-col w-full gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGC8D2yHREYwmWBj72jrdQi&si=9FyUp1ycg6iWfnNf"
              target="_blank"
              rel="noopener noreferer"
            >
              Sostenibilidad
            </Link>
          </Button>
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&si=uq-ToqJYh_gNTRTF"
              target="_blank"
              rel="noopener noreferer"
            >
              Talento Humano
            </Link>
          </Button>
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&si=uq-ToqJYh_gNTRTF"
              target="_blank"
              rel="noopener noreferer"
            >
              Comunicación interna
            </Link>
          </Button>
          <Button className="cardenio tx-gray font-semibold text-3xl py-7 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179] w-[300px]">
            <Link
              href="https://youtube.com/playlist?list=PLCBy57mI0AAGh8K0yYrS4ufHUwNvVkNVI&si=Bv-zhN_rVExgslDz"
              target="_blank"
              rel="noopener noreferer"
            >
              marketing farmacéutico
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="only-mobile flex-col px-10 md:none lg:none sm:flex"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link
            href="https://youtube.com/playlist?list=PLCBy57mI0AAG33aUZMbhk1xf56wVs4Edr&si=TNj_JH8Q9b_FnIyZ"
            target="_blank"
            rel="noopener noreferer"
          >
            hesq
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAHRHwVBOHilEQijXzdstZz9&si=NMQrfe8xJe0feKdN">
            Oil & Gas
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAFhkaApIKZFJcuAC519TSbG&si=MkqBe8EPqtNssti7">
            Agricultura
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAFVx1qQqafM8IZwammNrQ7D&si=moLyRBTUpdW_GKLy">
            construcción
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGC8D2yHREYwmWBj72jrdQi&si=9FyUp1ycg6iWfnNf">
            sostenibilidad
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&si=uq-ToqJYh_gNTRTF">
            Human Resources
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGV4ji8KOwz67u7FzCGLvKj&si=uq-ToqJYh_gNTRTF">
            comunicación interna
          </Link>
        </Button>
        <Button className="cardenio tx-gray font-semibold text-[1.4rem] py-5 px-5 mb-5 bg-[#91D179] hover:bg-[#91d179]">
          <Link href="https://youtube.com/playlist?list=PLCBy57mI0AAGh8K0yYrS4ufHUwNvVkNVI&si=Bv-zhN_rVExgslDz">
            marke
          </Link>
        </Button>
      </motion.div>
    </>
  );
}
