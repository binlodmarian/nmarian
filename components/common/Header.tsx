"use client"
import { path } from "@/constant/link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ButtonToggle";
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const currentPath = usePathname();
  const [ isOpen , setIsOpen ] = useState(false)  

  return (
    <header className="fixed top-0 left-0 z-50 h-20 backdrop-blur-md shadow-lg flex w-full items-center justify-between gap-x-10 px-20 bg-white/50 dark:bg-black/50">
      <div className="font-extrabold text-xl md:text-2xl w-24">Marian</div>
      <div className="flex lg:hidden absolute right-20 justify-end items-center gap-5">
        {
          isOpen ? (
            <div className="flex gap-5 items-center">
              <X onClick={ () => setIsOpen(false) } className="cursor-pointer hover:text-primary transition-colors"/>
              <ModeToggle />
            </div>
            
          ) : (
            <div className="flex gap-5 items-center">
              <Menu onClick={ () => setIsOpen(true) } className="cursor-pointer hover:text-primary transition-colors"/>
              <ModeToggle />
            </div>
          ) 
        }
      </div>
      <div className={`fixed left-0 top-20 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-black/80 lg:hidden transition-all duration-300 ease-in-out transform origin-top ${isOpen ? "scale-y-100 opacity-100": "scale-y-95 opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col gap-4 items-center justify-center font-bold py-6">
          {
            path.map( (data, index) => (
              currentPath === data.path ?
              <li key={index} className="text-primary underline decoration-2 underline-offset-4 transition-all duration-200 hover:scale-105">
                <Link href={data.path} onClick={ () => setIsOpen(false) } >
                  {data.name}
                </Link>
              </li>
              :
              <li key={index} className="transition-all duration-200 hover:text-primary hover:scale-105">
                <Link href={data.path} onClick={ () => setIsOpen(false) }>
                  {data.name}
                </Link>
              </li>
            ) )
          }
        </ul>
      </div>
      <div className="flex-1 hidden lg:flex flex justify-center font-extrabold items-center text-center gap-10">
        <ul className="flex gap-10 items-center">
          {
            path.map( (data, index) => (
              currentPath === data.path ?
              <li key={index} className="text-primary underline decoration-2 underline-offset-4 transition-all duration-200">
                <Link href={data.path}>
                  {data.name}
                </Link>
              </li>
              :
              <li key={index} className="transition-all duration-200 hover:text-primary cursor-pointer">
                <Link href={data.path} className="relative group">
                  {data.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ) )
          }
        </ul>
      </div>
      <div className="hidden lg:flex w-24 justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}