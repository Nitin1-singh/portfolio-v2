import { ProjectItem } from "./ProjectItem";

export function ProjectSection() {
  return (
    <section id="project" className="min-h-screen flex flex-col items-center bg-[#fafafa]">
      <div className="flex flex-col justify-center items-center min-h-screen mt-20">
        <div className="flex flex-col justify-center items-center mb-20">
          <p className="text-4xl font-semibold">PROJECT</p>
          <span className="w-[2rem] h-[5px] rounded-lg bg-[#7843E9] mt-2" />
          <p className="w-3/4 text-center mt-5">Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>
        </div>
        <div className="mb-20">
          <div className="w-3/4 flex flex-col mx-auto gap-20">
            <ProjectItem href="https://github.com/Nitin1-singh/leplit" src="/project/leplit.png" title="Leplit" content="Leplit is an online IDE that leverages cutting-edge web development technologies such as Next.js, React, TypeScript,docker,Node js,Socket io to create a robust and scalable solution" />
            <ProjectItem href="https://github.com/Nitin1-singh/play.com" src="/project/play.png" title="Play.com" content="Play.com is an online chess playing game that leverages cutting-edge web development technologies such as Next.js, React, TypeScript,docker,Node js,Socket io to create a robust and scalable solution" />
            
          </div>
        </div>
      </div>
    </section>
  )
}