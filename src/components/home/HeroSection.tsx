import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8 text-6xl font-bold md:text-7xl"
      >
        AI Resume Analysis Platform
      </motion.h1>

      <div className="h-20 text-2xl text-cyan-300">
        <TypeAnimation
          repeat={Infinity}
          speed={50}
          sequence={[
            "✔ ATS Score Analysis", 1500,
            "✔ Skill Gap Detection", 1500,
            "✔ Resume Parsing", 1500,
            "✔ AI Suggestions", 1500,
            "✔ Job Match Intelligence", 1500,
            "✔ Resume Improvement Tips", 1500,
          ]}
        />
      </div>
    </>
  );
}