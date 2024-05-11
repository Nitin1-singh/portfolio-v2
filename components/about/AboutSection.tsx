import { Image } from "@nextui-org/image";
import { ButtonEvery } from "../project/ButtonEvery";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen">
      <div className="flex flex-row justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center max-sm:justify-between sm:my-16 max-sm:my-10">
          <p className="text-4xl font-semibold">ABOUT ME</p>
          <span className="w-[2rem] h-[5px] rounded-lg bg-[#7843E9] mt-3" />
          <div className="w-11/12 flex  xl:flex-row xl:justify-evenly items-center xl:my-14 max-lg:flex-col max-lg:mt-10">
            <div className="w-5/12 max-lg:w-full">
              <Image className="fit-content" src="./about.webp" alt="about" isZoomed />
            </div>
            <div className="sm:basis-6/12 flex flex-col justify-evenly gap-7 px-3 max-lg:text-center max-sm:w-full max-sm:mt-10 max-lg:mt-16">
              <h1 className="text-3xl font-bold">FULL STACK WEB DEVELOPER</h1>
              <p className="basis-1/2 text-[#555] text-lg">
                I{'\''}m a Full Stack Focused Web Developer Check out some of my work in the Projects section.
                I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin. I{'\''}m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don{'\''
                }t hesitate to contact me.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <ButtonEvery href="#contact" text="CONTACT" />
          </div>
        </div>
        <div>
        </div>
      </div>
    </section>
  )
}