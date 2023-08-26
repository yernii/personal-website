export default function Experience() {
  return (
    <div id="experience" className="md:mx-16 md:mb-24">
      <div className="mx-4 mb-8 flex justify-center md:text-3xl">
        <span className="text-orange-500">E</span>xperience
      </div>

      <ol className="relative mx-4 border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2020 – May 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Research Assistant Intern
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Delivered and documented Python script that fully automates the
            image segmentation process of the research, saving 100+ hours of
            manual measurements for the batch of around 10000 images. Achieved a
            2x decrease in systematic error of the measurements by optimizing
            the image segmentation algorithm via Image Masking. Proposed and
            completed Geometric Image Transformation in Python for the
            calibration of the ruler from the images instead of manual
            computing.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2021 – June 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Research Assistant Intern at Communication Networks Lab
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Classified JavaScript scripts, with a team of 4 researchers,
            affecting the performance of the websites into critical and
            non-critical classes through a custom-made JavaScript Analyzer tool.
            Reduced overfitting of the Transformer model by Normalizing input
            dataset with feature scaling method and designing neural network
            layers.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2022 – August 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Software Engineer Intern at Integerly (MathForces) startup
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Rebuilt the front-end for the main "Math Pages" with additional
            features and mobile responsive design, resulting in UX improvements
            of users&apos; workflow and improved maintainability (React.js,
            TypeScript, Lerna.js). Accelerated development process for teammates
            by 30% via building reusable React.js components for tab-bar, search
            and filter functionalities. Integrated 10+ new API endpoints to the
            assigned web pages enabling appropriate user authorization
            privileges and error handling using React.js monorepo.
          </p>
        </li>
      </ol>
    </div>
  )
}
