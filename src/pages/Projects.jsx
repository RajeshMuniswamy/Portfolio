import React, { forwardRef } from "react";
import servicewrk from "../assets/ServiceWRK1.jpeg";
import pharmawrk from "../assets/PharmaWRKLogo1.png";
import intervwd from "../assets/Intervwd-logo.png";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen bg-[#ecf0f3] flex justify-center py-25">
      <div className="max-w-6xl w-full px-6">
        <div className="mb-5 text-center">
          <div className="text-sm text-gray-500 font-bold tracking-[4px]">
            PROJECTS
          </div>
          <h1 className="text-4xl font-bold ">
            Things I<span className="text-[#FF014F]">'ve Built</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-3 pl-6 rounded-xl shadow-md hover:shadow-2xl transition">
            <img src={servicewrk} alt="" className="h-15 mx-auto" />
            <h3 className="text-xl text-center font-semibold mb-2">
              ServiceWRK
            </h3>

            <ul className="text-gray-500 text-sm list-disc pl-2">
              <li>
                Built a multi-tenant SaaS service management platform on AWS
                serverless architecture.
              </li>
              <li>
                Developed an intelligent ticketing system integrating WhatsApp,
                Email, and Phone requests.
              </li>
              <li>
                Implemented automated ticket assignment and workflow lifecycle
                management.
              </li>
            </ul>
            {/*  bg-[#dce9f2] rounded-xl */}

            <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600 font-semibold">
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Node.js</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Lambda</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">
                REST APIs
              </span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Cognito</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">GraphQL</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">SQS</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">
                EventBridge
              </span>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://servicewrk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-400 px-23 py-1 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
              >
                Visit ServiceWRK →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition">
            <img src={pharmawrk} alt="" className="h-15 mx-auto mt-2" />
            <h3 className="text-xl text-center font-semibold mb-2">
              PharmaWRK
            </h3>
            <ul className="text-gray-500 text-sm list-disc pl-7">
              <li>
                Built real-time field activity tracking backend for
                pharmaceutical representatives.
              </li>
              <li>
                Developed scalable APIs for territory and activity management.
              </li>
              <li>Implemented location-based performance analytics.</li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-2 text-xs text-gray-600 font-semibold ml-6">
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Node.js</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Lambda</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">
                Postgres
              </span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">
                Rest APIs
              </span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">SES</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">S3</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">
                DynamoDB
              </span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">SNS</span>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://pharmawrk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-400 px-23 py-1 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
              >
                Visit PharmaWRK →
              </a>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-2xl transition">
            <img src={intervwd} alt="" className="h-15 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">Intervwd</h3>
            <ul className="text-gray-500 text-sm list-disc pl-7">
              <li>
                Built an AI-driven interview automation platform using AWS
                Bedrock.
              </li>
              <li>
                Implemented AI-generated interview questions and response
                evaluation.
              </li>
              <li>
                Automated candidate scoring and interview report generation.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-600 font-semibold">
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Node.js</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Lambda</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">
                REST APIs
              </span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Bedrock</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">Cognito</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">GraphQL</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">SES</span>
              <span className="bg-[#dce9f2] px-3 py-1 rounded-lg">...</span>
            </div>

            <div className="mt-5 text-center">
              <a
                href="https://intervwd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-400 px-23 py-1 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
              >
                Visit Intervwd →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
