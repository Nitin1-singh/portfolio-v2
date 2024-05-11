"use client"
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
export function CustomNavbar() {
  const [visible, setVisible] = useState<boolean>(true)
  const [width, setWidth] = useState<number>(0)

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const width = window.innerWidth
    setWidth(width)
  }, [])

  return (
    <nav className="fixed top-0 z-[100] bg-opacity-50 backdrop-blur-lg w-screen sm:px-10 lg:ps-0" >
      <div className="nav relative flex flex-row justify-between items-center h-20">
        <div className="max-sm:ms-8 max-sm:basis-full max-sm:justify-between basis-1/4 text-xl font-bold flex justify-center">
          <h1 className="hover:cursor-pointer">NITIN SINGH NEGI</h1>
          <div className="max-sm:me-8">
            <Image src={visible ? "./list.svg" : "./x.svg"} width={30} height={30} radius="none" className="sm:hidden" alt="menu" onClick={toggleVisibility} />
          </div>
        </div>
        {
          <div style={{ display: width < 600 ? visible ? "none" : "flex" : "flex" }} className={`sm:flex max-sm:bg-opacity-50 max-sm:z-[10000]  max-sm:backdrop-blur-lg max-sm:w-screen max-sm:h-52  max-sm:absolute max-sm:top-16 basis-1/2  flex-row place-content-end text-xs font-semibold flex`}>

            <div className="flex flex-row max-sm:flex-col max-sm:w-1/2 max-sm:items-end max-sm:pe-8 max-sm:my-5 max-sm:ps-5 justify-between w-full lg:w-3/4">
              <Link className="text-black text-base hover:text-purple-700" onClick={() => setVisible(true)} href="#home">HOME</Link>
              <Link className="text-black text-base hover:text-purple-700" onClick={() => setVisible(true)} href="#about">ABOUT</Link>
              <Link className="text-black text-base hover:text-purple-700" onClick={() => setVisible(true)} href="#project">PROJECTS</Link>
              <Link className="text-black text-base hover:text-purple-700" onClick={() => setVisible(true)} href="#contact">CONTACT</Link>
            </div>
          </div>
        }
      </div>
    </nav >
  );
}

{/* <div className="max-sm:bg-opacity-50 max-sm:backdrop-blur-lg max-sm:w-screen max-sm:h-52  max-sm:absolute max-sm:top-16 basis-1/2 flex flex-row place-content-end text-xs font-semibold">
  <div className="flex flex-row max-sm:flex-col max-sm:w-1/2 max-sm:items-end max-sm:pe-3 max-sm:ps-5 justify-between w-3/4">
    <Link className="text-black text-base hover:text-purple-700" href="#">HOME</Link>
    <Link className="text-black text-base hover:text-purple-700" href="#">ABOUT</Link>
    <Link className="text-black text-base hover:text-purple-700" href="#">PROJECTS</Link>
    <Link className="text-black text-base hover:text-purple-700" href="#">CONTACT</Link>
  </div>
</div> */}
