// import React, { forwardRef, useState } from "react";

// const Skills = forwardRef((props, ref) => {
//   const skills = [
//     {
//       title: "Backend",
//       items: [
//         "Node.js",
//         "Express.js",
//         "RESTful APIs",
//         "GraphQL",
//         "Event-Driven Architecture",
//         "Webhooks",
//         "MQTT",
//       ],
//     },
//     {
//       title: "Cloud & Serverless (AWS)",
//       items: [
//         "AWS Lambda",
//         "API Gateway",
//         "Cognito",
//         "DynamoDB",
//         "S3",
//         "SQS",
//         "EventBridge",
//         "SES",
//       ],
//     },
//     {
//       title: "Database",
//       items: ["DynamoDB", "MongoDB", "PostgreSQL"],
//     },
//     {
//       title: "Frontend (Working Knowledge)",
//       items: ["React", "Tailwind CSS", "HTML", "CSS"],
//     },
//     {
//       title: "Tools & Platforms",
//       items: ["VS Code", "Git", "GitHub", "Postman"],
//     },
//   ];

//   return (
//     <div ref={ref} className="h-screen bg-[#ecf0f3] py-25">
//       <div>
//         <div className="mb-5">
//           <h2 className="text-center font-bold tracking-[4px] text-gray-500">
//             SKILLS
//           </h2>
//           <h1 className="text-center font-bold text-4xl">
//             My
//             <span className="text-[#FF014F]"> Tech Stack</span>
//           </h1>
//         </div>
//         <div className="grid gap-5 mx-35 md:grid-cols-2">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-xl p-3 hover:shadow-lg transition"
//             >
//               <h3 className="font-semibold text-lg mb-3">{skill.title}</h3>

//               <div className="flex flex-wrap gap-2">
//                 {skill.items.map((item, i) => (
//                   <span
//                     key={i}
//                     className="bg-gray-200 text-gray-700 px-5 py-1 rounded-full text-sm"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Skills;

import React, { forwardRef } from "react";

import {
  FaNodeJs,
  FaAws,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiGraphql,
  SiMqtt,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbWebhook } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

const Skills = forwardRef((props, ref) => {
  const skills = [
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
        {
          name: "Event Driven",
          icon: <BsLightningCharge className="text-yellow-500" />,
        },
        { name: "Webhooks", icon: <TbWebhook /> },
        { name: "MQTT", icon: <SiMqtt /> },
      ],
    },
    {
      title: "Cloud & Serverless (AWS)",
      items: [
        { name: "AWS Lambda", icon: <FaAws className="text-orange-500" /> },
        { name: "API Gateway", icon: <FaAws className="text-orange-500" /> },
        { name: "Cognito", icon: <FaAws className="text-orange-500" /> },
        { name: "SQS", icon: <FaAws className="text-orange-500" /> },
        { name: "DynamoDB", icon: <FaAws className="text-orange-500" /> },
        { name: "S3", icon: <FaAws className="text-orange-500" /> },
        { name: "EventBridge", icon: <FaAws className="text-orange-500" /> },
        { name: "SES", icon: <FaAws className="text-orange-500" /> },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "DynamoDB", icon: <FaAws className="text-orange-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
      ],
    },
    {
      title: "Frontend (Working Knowledge)",
      items: [
        { name: "React", icon: <FaReact className="text-cyan-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-500" />,
        },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <div ref={ref} className="min-h-screen bg-[#ecf0f3] py-24">
      {/* Section Title */}
      <div className="mb-5">
        <h2 className="text-center font-bold tracking-[4px] text-gray-500">
          SKILLS
        </h2>

        <h1 className="text-center font-bold text-4xl">
          My <span className="text-[#FF014F]">Tech Stack</span>
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 mx-10 md:mx-30 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-4">{skill.title}</h3>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm"
                >
                  {item.icon}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
