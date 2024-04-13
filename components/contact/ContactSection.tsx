import { ContactEval } from "./ContactEval";


export function ContactSection() {
  return (
    <section id="contact" className="xl:h-screen bg-hero max-lg:h-[650px]">
      <div className="flex flex-col items-center pt-10">
        <p className="text-4xl font-semibold">CONTACT</p>
        <span className="w-[2rem] h-[5px] rounded-lg bg-[#7843E9] mt-3" />
        <ContactEval />
      </div>
    </section>
  )
}