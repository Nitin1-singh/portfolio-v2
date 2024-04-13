import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link";


export function ProjectItem({ src, title, content, href }: { src: string, title: string, content: string, href: string }) {
  return (
    <div className="flex xl:flex-row gap-10 max-lg:flex-col max-lg:justify-center">
      <div className="w-1/2 max-lg:w-full">
        <Image radius="none" src={src} />
      </div>
      <div className="w-1/2 flex flex-col justify-around max-lg:w-full max-lg:text-center">
        <h1 className="font-bold xl:text-2xl">{title}</h1>
        <p className="text-[#333] text-xl max-lg:mt-5">{content}</p>
        <Button as={Link} href={href} radius="sm" color="secondary" className="w-[200px] h-[50px] text-white text-lg font-semibold max-lg:mx-auto max-lg:my-10">PROJECT LINK</Button>
      </div>
    </div>
  )
}