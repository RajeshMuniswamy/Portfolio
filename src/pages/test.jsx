import React, { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-[#ecf0f3] py-24 flex justify-center">
      <div className="max-w-6xl w-full px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm tracking-[4px] text-gray-500 font-bold">
            PORTFOLIO
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            My <span className="text-[#FF014F]">Projects</span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* ServiceWRK */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">ServiceWRK</h3>
            <p className="text-gray-500 text-sm">
              Backend platform designed to manage service workflows and
              operations. Built scalable REST APIs using Node.js and AWS
              serverless technologies including Lambda, API Gateway, and
              DynamoDB.
            </p>
          </div>

          {/* PharmaWRK */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">PharmaWRK</h3>
            <p className="text-gray-500 text-sm">
              Cloud-based healthcare workflow platform enabling pharmaceutical
              operations. Developed secure backend services and scalable APIs
              using Node.js, AWS Lambda, and DynamoDB.
            </p>
          </div>

          {/* Intervwd */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Intervwd</h3>
            <p className="text-gray-500 text-sm">
              AI-powered interview platform designed to streamline candidate
              assessment and evaluation. Developed backend APIs and integrated
              scalable AWS services to support real-time interview workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
