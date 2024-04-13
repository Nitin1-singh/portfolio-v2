import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/react"

export function ButtonEvery({ text, href }: { text: string, href: string }) {
  return (
    <Button as={Link}
      href={href} radius="sm" color="secondary" className="w-[200px] h-[50px] text-white text-lg font-semibold">{text}</Button>
  )
}