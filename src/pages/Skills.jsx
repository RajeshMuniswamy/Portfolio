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
    <div
      ref={ref}
      className=" bg-[#ecf0f3] px-4 py-8 md:py-2 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Title */}
      <div className="mb-6 text-center">
        <h2 className="font-bold tracking-[4px] text-gray-500">SKILLS</h2>
        <h1 className="font-bold text-3xl md:text-4xl">
          My <span className="text-[#FF014F]">Tech Stack</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid gap-4 md:px-20 md:grid-cols-2 pb-6">
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
