"use client"
import { NextUIProvider } from '@nextui-org/react'

export function NextUiCustom({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}