"use client"
import { useInView } from "react-intersection-observer"
import Experience from "@/components/Experience"
import Image from "next/image"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import Link from "next/link"
import LinkIcon from "@mui/icons-material/Link"

export default function Home() {
  const [refMain, inMainView] = useInView({
    threshold: 0.75,
  })
  const [refAboutPage, inAboutView] = useInView({
    threshold: 0.75,
  })
  const [refSkillPage, inSkillView] = useInView({
    threshold: 0.75,
  })
  return (
    <div className="md: mt-32 text-xl">
      <div className="flex flex-col items-center justify-center gap-[300px]">
        <div className="md: mt-16 flex justify-center gap-[300px]">
          <div className="mt-48 hidden md:flex">
            <div className="relative hidden md:flex md:h-72 md:w-96">
              <Image
                width={500}
                height={500}
                priority
                src={"/svg/logo.svg"}
                alt="Portfolio logo"
              />
            </div>
          </div>
          <div
            className={`flex flex-col justify-center transition  duration-[1000ms]  md:mr-48  ${
              inMainView
                ? "opacity-1 blur-none	"
                : "translate-x-[100%] opacity-0	blur-sm	"
            }`}
            ref={refMain}
          >
            <div className="md:text-9xl">
              Yernar <br /> Mukayev
            </div>
            <div className="mt-4 border border-white" />
            <div className="mt-6 flex animate-bounce gap-10">
              <Link
                href="https://www.linkedin.com/in/yernar-mukayev/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  fontSize="large"
                  sx={{ "& :hover": { color: "yellow" } }}
                />
              </Link>
              <Link
                href="https://github.com/yernii"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon
                  fontSize="large"
                  sx={{ "& :hover": { color: "yellow" } }}
                />
              </Link>
              <Link href="mailto:ym2098@nyu.com">
                <EmailIcon
                  fontSize="large"
                  sx={{ "& :hover": { color: "yellow" } }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-8 flex  flex-col items-center gap-16 md:mb-48">
          <div id="about" className="md: text-3xl ">
            <span className="text-orange-500">A</span>bout
          </div>
          <div
            ref={refAboutPage}
            className={` w-full   transition duration-[1000ms] ${
              inAboutView ? "opacity-1 blur-none	" : "opacity-1 	blur-sm	"
            }`}
          >
            I am a Senior student at
            <span className="text-orange-500">NYU Abu Dhabi</span>, majoring in
            Computer Science with an interest in
            <span className="text-orange-500">web programming.</span>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-4 md:mb-48 md:flex-row md:items-center md:gap-24">
          <div id="skills" className=" mb-4 md:mb-0 md:mr-16 md:text-3xl">
            <span className="text-orange-500">S</span>kills
          </div>
          <div
            ref={refSkillPage}
            className={`flex flex-row gap-4 transition  duration-1000 md:gap-8 ${
              inSkillView
                ? "opacity-1 blur-none "
                : "translate-x-[100%] opacity-0	blur-sm 	"
            }`}
          >
            <Image
              src="/logos/ts.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/cpp.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/python.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/js.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/react.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/mysql.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/git.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            <Image
              src="/logos/tailwind.png"
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>
        </div>
        <Experience />
        <div className="mb-48 flex flex-col items-center text-sm md:text-xl">
          <div id="projects" className="mb-16 md:text-3xl">
            <span className="text-orange-500">P</span>rojects
          </div>
          <div className="border-medium-orange group relative h-56 w-screen overflow-hidden border-2 border-l-0 border-r-0 md:h-48">
            <div className="bg-medium-orange absolute inset-0 translate-y-full  transition-transform duration-500 group-hover:translate-y-0"></div>
            <div className="relative z-10 mx-20 mt-5 flex justify-between">
              <div className="flex flex-col justify-center gap-10">
                <div>
                  <span>Project 1</span>
                </div>
                <div className="text-2xl md:text-5xl">
                  Automation of the measurement of crystal image dimensions
                </div>
              </div>
              <div>
                <Link href="https://github.com/yernii/image-segmentation">
                  <LinkIcon className="animate-pulse" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-medium-orange group relative h-56 w-screen overflow-hidden border-2 border-l-0 border-r-0 md:h-48">
            <div className="bg-medium-orange absolute inset-0 translate-y-full  transition-transform duration-500 group-hover:translate-y-0"></div>
            <div className="relative z-10 mx-20 mt-5 flex justify-between">
              <div className="flex flex-col justify-center gap-10">
                <div>
                  <span>Project 2</span>
                </div>
                <div className="text-2xl md:text-5xl">
                  3-D Portfolio webisite
                </div>
              </div>
              <div>
                <Link href="https://yernii.github.io/">
                  <LinkIcon className="animate-pulse" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-medium-orange group relative h-56 w-screen overflow-hidden border-2 border-l-0 border-r-0 md:h-48">
            <div className="bg-medium-orange absolute inset-0 translate-y-full  transition-transform duration-500 group-hover:translate-y-0"></div>
            <div className="relative z-10 mx-20 mt-5 flex justify-between">
              <div className="flex flex-col justify-center gap-10">
                <div>
                  <span>Project 3</span>
                </div>
                <div className="text-2xl md:text-5xl">
                  Bet to keep daily habit alive
                </div>
              </div>
              <div>
                <Link href="">
                  <LinkIcon className="animate-pulse" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-medium-orange group relative h-56 w-screen overflow-hidden border-2 border-l-0 border-r-0 md:h-48">
            <div className="bg-medium-orange absolute inset-0 translate-y-full  transition-transform duration-500 group-hover:translate-y-0"></div>
            <div className="relative z-10 mx-20 mt-5 flex justify-between">
              <div className="flex flex-col justify-center gap-10">
                <div>
                  <span>Project 4</span>
                </div>
                <div className="text-2xl md:text-5xl">
                  App to avoid screen fatigue
                </div>
              </div>
              <div>
                <Link href="https://github.com/cswpy/screen-helper">
                  <LinkIcon className="animate-pulse" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
