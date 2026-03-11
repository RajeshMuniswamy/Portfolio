// import React, { forwardRef } from "react";

// const Experience = forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="min-h-screen bg-[#ecf0f3] py-35 flex justify-center"
//     >
//       <div className="max-w-6xl w-full px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-sm tracking-[4px] text-gray-500 font-bold">
//             EXPERIENCE
//           </h2>
//           <h1 className="text-4xl font-bold mt-2">
//             My <span className="text-[#FF014F]">Professional Journey</span>
//           </h1>
//         </div>

//         <div className="relative">
//           <div className="mb-12 ml-6">
//             <p className="text-sm text-gray-500">2022 – Present</p>

//             <h3 className="text-xl font-semibold mt-1">
//               Senior Backend Engineer
//             </h3>

//             <p className="text-gray-500 mt-2 leading-7">
//               Designing and developing scalable backend systems using Node.js
//               and AWS serverless technologies including AWS Lambda, API Gateway,
//               and DynamoDB. Leading backend development for multiple projects,
//               architecting REST APIs, and guiding the team in implementing
//               secure authentication, event-driven architectures, and
//               cloud-native solutions to deliver reliable, production-grade
//               applications.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Experience;

import React, { forwardRef } from "react";

const Experience = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-[#ecf0f3] py-40 flex justify-center">
      <div className="max-w-6xl w-full px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm tracking-[4px] text-gray-500 font-bold">
            EXPERIENCE
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            My <span className="text-[#FF014F]">Professional Journey</span>
          </h1>
        </div>

        <div className="relative mt-10">
          <div className="mb-10 ml-6">
            <p className="text-sm text-gray-500">2022 – Present</p>

            <h3 className="text-xl font-semibold mt-1">
              Senior Backend Engineer
            </h3>

            <p className="text-gray-500 mt-3 leading-7">
              Designing and developing scalable backend systems using Node.js
              and AWS serverless technologies including AWS Lambda, API Gateway,
              and DynamoDB. Leading backend development for multiple projects,
              architecting REST APIs, and guiding the team in implementing
              secure authentication, event-driven architectures, and
              cloud-native solutions to deliver reliable, production-grade
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
