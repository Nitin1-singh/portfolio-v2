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
            <ProjectItem href="https://github.com/Nitin1-singh/3YH" src="/project/3yh.png" title="3YH" content="3YH is an hackathon platform that leverages cutting-edge web development technologies such as Next.js, Flask, React, and TypeScript to create a robust and scalable solution for data science challenges competitions." />
          </div>
        </div>
      </div>
    </section>
  )
}