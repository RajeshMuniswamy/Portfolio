import { TypeAnimation } from "react-type-animation";

function Animation() {
  return (
    <div className="text-4xl font-bold mt-2">
      Hi, I’m <span className="text-[#FF014F]">Rajesh M</span>
      <br />
      <span className="text-[#FF014F] mt-2">a </span>
      <TypeAnimation
        sequence={["Node.js Developer", 2000, "Professional Coder", 2000]}
        speed={50}
        repeat={Infinity}
        wrapper="span"
      />
    </div>
  );
}

export default Animation;
