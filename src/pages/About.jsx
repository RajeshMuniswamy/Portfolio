import React, { forwardRef } from "react";
import Animation from "./Animation";
import profile from "../assets/RajeshProfile1.PNG";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[90vh] bg-[#ecf0f3] flex justify-center items-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center px-10">
        {/* LEFT */}
        <div className="flex-1">
          <div className="mt-30 text-sm text-gray-500 font-bold tracking-[4px]">
            WELCOME TO MY WORLD
          </div>

          <Animation />

          <div className="mt-6 text-gray-500 leading-7 max-w-xl">
            I’m a Senior Backend Engineer with 3.5+ years of experience building
            scalable serverless applications on AWS. I specialize in developing
            high-performance REST APIs using Node.js, AWS Lambda, API Gateway,
            and DynamoDB. My focus is on designing reliable backend
            architectures, implementing secure authentication with AWS Cognito,
            and building event-driven systems using SQS and EventBridge. I enjoy
            turning complex requirements into efficient backend solutions that
            power modern applications.
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={profile}
            alt="Rajesh"
            className="mt-30 w-72 rounded-xl shadow-xl hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
});

export default About;
