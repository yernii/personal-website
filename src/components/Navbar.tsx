"use client"
import { useState } from "react"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="m-8 flex items-center justify-between p-2 md:p-4 md:uppercase">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
        <div className="ml-4 text-lg text-orange-500">Yerni</div>
      </div>

      <div className=" hidden flex-col md:absolute  md:left-96 md:top-6 md:flex md:gap-6">
        <Link
          href="#about"
          className="relative before:absolute before:left-0 before:top-5 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-orange-600 before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-gray-500 before:hover:scale-x-50"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="relative before:absolute before:left-0 before:top-5 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-orange-600 before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-gray-500 before:hover:scale-x-50"
        >
          Skills
        </Link>
        <Link
          href="#experience"
          className="relative before:absolute before:left-0 before:top-5 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-orange-600 before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-gray-500 before:hover:scale-x-50"
        >
          Experience
        </Link>
        <div>
          <Link
            href="#projects"
            className="relative before:absolute before:left-0 before:top-5 before:block before:h-[2px] 
              before:w-full before:origin-top-left before:scale-x-0
              before:bg-orange-600 before:transition before:duration-300
              before:ease-in-out before:content-[''] hover:text-gray-500 before:hover:scale-x-50"
          >
            Projects
            <KeyboardArrowRightIcon className="mb-[3px] group-hover:rotate-180" />
          </Link>
        </div>
      </div>
      <div className=" hidden md:flex md:space-x-6">
        <a
          href="mailto:ym2098@nyu.com"
          className="rounded-2xl border border-gray-400 p-2 px-4 uppercase transition duration-300  ease-in-out hover:border-none hover:bg-red-700 "
        >
          Contact
        </a>
      </div>
      <div className="md:mr-16 md:hidden">
        <button onClick={toggleMenu} className=" focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-72 top-16 rounded-lg  bg-gray-pearl  p-4 md:hidden">
          <Link href="#about" className="my-2 block">
            About
          </Link>
          <Link href="#skills" className="my-2 block">
            Skills
          </Link>
          <Link href="#project" className="my-2 block">
            Project
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
