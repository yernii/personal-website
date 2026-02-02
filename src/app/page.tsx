"use client"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from "@mui/icons-material/Email"
import Link from "next/link"
import LinkIcon from "@mui/icons-material/Link"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">
      {/* Header with social links */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/yernar-mukayev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="medium" />
          </Link>
          <Link
            href="https://github.com/yernii"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon fontSize="medium" />
          </Link>
          <Link href="mailto:ym2098@nyu.com">
            <EmailIcon fontSize="medium" />
          </Link>
        </div>
      </div>

      {/* Work and Education in same row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Work Experience */}
        <div className="space-y-6 hover:bg-gray-600 hover:bg-opacity-20 p-4 rounded-lg transition-colors">
          <h2 className="text-lg font-medium">Work</h2>
          <div className="space-y-4">
            <div>
              <div className="font-medium text-medium-orange">AWS</div>
              <div className="text-sm text-gray-400 mb-2">Sofware Engineer</div>
              <div className="text-sm text-gray-300">Network Availability team</div>
            </div>
            <div>
              <div className="font-medium text-medium-orange">THG</div>
              <div className="text-sm text-gray-400 mb-2">Software Engineer</div>
              <div className="text-sm text-gray-300">Data engineering team</div>
            </div>
          </div>
        </div>

        {/* University */}
        <div className="space-y-4 hover:bg-gray-600 hover:bg-opacity-20 p-4 rounded-lg transition-colors">
          <h2 className="text-lg font-medium">Education</h2>
          <div>
            <div className="font-medium text-medium-orange">NYU Abu Dhabi</div>
            <div className="text-sm text-gray-400 mb-2">Computer Science</div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        <h2 className="text-lg font-medium">For fun</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-transparent border border-white border-opacity-30 p-6 rounded-lg hover:border-opacity-60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-medium-orange">AFK - Quit Gaming Now</h3>
              <Link href="https://apps.apple.com/us/app/afk-quit-gaming-now/id6746816353" target="_blank">
                <LinkIcon className="text-gray-400 hover:text-white" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">Gaming mobile app to help users quit gaming addiction</p>
          </div>
          <div className="bg-transparent border border-white border-opacity-30 p-6 rounded-lg hover:border-opacity-60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-medium-orange">Invoker Play</h3>
              <Link href="https://invokerplay.com/" target="_blank">
                <LinkIcon className="text-gray-400 hover:text-white" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">Practice mechanical Dota skills in web</p>
          </div>
          <div className="bg-transparent border border-white border-opacity-30 p-6 rounded-lg hover:border-opacity-60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-medium-orange">Follow4Follow</h3>
              <Link href="https://www.follow4follow.org/" target="_blank">
                <LinkIcon className="text-gray-400 hover:text-white" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">SMM project for social media growth</p>
          </div>
          <div className="bg-transparent border border-white border-opacity-30 p-6 rounded-lg hover:border-opacity-60 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium text-medium-orange">Screen Helper</h3>
              <Link href="https://github.com/cswpy/screen-helper" target="_blank">
                <LinkIcon className="text-gray-400 hover:text-white" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">App to avoid screen fatigue</p>
          </div>
        </div>
      </div>
    </div>
  )
}
