import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaBars, FaChartLine } from "react-icons/fa";
import {
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
} from "react";
import { uploadResume } from "../api/resumeApi";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {

  const [open, setOpen] =
    useState(false);

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [dragActive, setDragActive] =
    useState(false);

  const [selectedFile, setSelectedFile] =
  useState<File | null>(null);

  const [
    analysisMode,
    setAnalysisMode,
  ] = useState<
    "resume" | "resume-jd"
  >("resume");

  const [
    jobDescription,
    setJobDescription,
  ] = useState("");

   const [loading, setLoading] = useState(false);
  

  const[analysisResult, setAnalysisResult] = useState<any>(null);

    const handleFile = (
      file: File | null
    ) => {

    if (!file) return;

    if (
      file.type !==
      "application/pdf"
    ) {

      alert(
        "Only PDF files allowed"
      );

      return;

    }


    setSelectedFile(file);

  };



  const handleDrop = (
    e: DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

    setDragActive(false);

    const file =
      e.dataTransfer.files?.[0];

    handleFile(file);

  };

  const handleDragOver = (
    e: DragEvent<HTMLDivElement>
  ) => {

    e.preventDefault();

    setDragActive(true);

  };

  const handleDragLeave = () => {

    setDragActive(false);

  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0] ||
      null;

    handleFile(file);

  };

  const stats = [
    {
      value: "12,500+",
      label:
        "Resumes Processed",
    },
    {
      value: "94%",
      label:
        "Matching Accuracy",
    },
    {
      value: "520+",
      label: "Companies",
    },
    {
      value: "3 sec",
      label:
        "Average Analysis Time",
    },
    {
      value: "85%",
      label:
        "ATS Improvement Rate",
    },
    {
      value: "2,000+",
      label:
        "Daily Analyses",
    },
  ];

  const analysisCards = [
    {
      role:
        "Frontend Developer",
      score: "82%",
    },
    {
      role:
        "Java Backend",
      score: "91%",
    },
    {
      role:
        "Full Stack Developer",
      score: "78%",
    },
    {
      role:
        "DevOps Engineer",
      score: "84%",
    },
  ];



  const handleAnalyze = async () => {


    if (!selectedFile) {
      alert("Please upload a resume first");
      return;
    }

    try {
      setLoading(true);
      const result = await uploadResume(selectedFile);

      setAnalysisResult(result);
    }catch (error: any) {
     

      console.error("Upload failed");

      alert("Failed to upload resume. Please try again.");
    } finally {
      setLoading(false);
    }
    };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND */}

      <div className="fixed inset-0 -z-10">

        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      </div>

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
            SkillScan AI
          </h1>

          <div className="hidden items-center gap-8 lg:flex">

            <a className="cursor-pointer hover:text-cyan-400">
              Home
            </a>

            <a className="cursor-pointer hover:text-cyan-400">
              Features
            </a>

            <a className="cursor-pointer hover:text-cyan-400">
              Dashboard
            </a>

            <a className="cursor-pointer hover:text-cyan-400">
              Pricing
            </a>

            <button className="rounded-xl border border-white/20 px-5 py-2">
              Login
            </button>

            <button className="rounded-xl bg-cyan-500 px-5 py-2">
              Register
            </button>

          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <FaBars size={24} />
          </button>

        </div>

        {open && (

          <div className="bg-slate-900 px-6 pb-6 lg:hidden">

            <div className="flex flex-col gap-5">

              <a>Home</a>
              <a>Features</a>
              <a>Dashboard</a>
              <a>Pricing</a>
              <a>Login</a>
              <a>Register</a>

            </div>

          </div>

        )}

      </nav>

      {/* HERO */}

<section className="py-32">

  <div className="mx-auto max-w-7xl px-6 text-center">

    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
      mb-8
      text-6xl
      font-bold
      md:text-7xl
      "
    >

      AI Resume Analysis Platform

    </motion.h1>

    <div className="h-20 text-2xl text-cyan-300">

      <TypeAnimation
        repeat={Infinity}
        speed={50}
        sequence={[
          "✔ ATS Score Analysis",
          1500,

          "✔ Skill Gap Detection",
          1500,

          "✔ Resume Parsing",
          1500,

          "✔ AI Suggestions",
          1500,

          "✔ Job Match Intelligence",
          1500,

          "✔ Resume Improvement Tips",
          1500,
        ]}
      />

    </div>


    <div className="mt-12 flex flex-col items-center gap-8">

      {/* MODE */}

      <div className="flex flex-wrap justify-center gap-5">

        <button
          onClick={() =>
            setAnalysisMode(
              "resume"
            )
          }
          className={`
          rounded-2xl
          px-8
          py-4

          ${
            analysisMode ===
            "resume"

              ? `
              bg-cyan-500
              text-white
              `

              : `
              border
              border-white/20
              bg-white/5
              `
          }
          `}
        >

          Resume Analysis

        </button>

        <button
          onClick={() =>
            setAnalysisMode(
              "resume-jd"
            )
          }
          className={`
          rounded-2xl
          px-8
          py-4

          ${
            analysisMode ===
            "resume-jd"

              ? `
              bg-purple-600
              text-white
              `

              : `
              border
              border-white/20
              bg-white/5
              `
          }
          `}
        >

          Resume + JD

        </button>

      </div>


      {/* FILE INPUT */}

      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".pdf"
        onChange={
          handleInputChange
        }
      />

      <div
        onDrop={handleDrop}
        onDragOver={
          handleDragOver
        }
        onDragLeave={
          handleDragLeave
        }
        onClick={() =>
          fileInputRef.current?.click()
        }
        className={`
        w-full
        max-w-3xl
        cursor-pointer
        rounded-3xl
        border-2
        border-dashed
        p-12
        text-center
        backdrop-blur-xl

        ${
          dragActive

            ? `
            border-cyan-400
            bg-cyan-500/10
            scale-105
            `

            : `
            border-white/20
            bg-white/5
            `
        }
        `}
      >

        <h3 className="text-3xl font-bold">

          Upload Resume PDF

        </h3>

        <p className="mt-4 text-slate-400">

          Drag & Drop Resume

        </p>

        <p className="mt-2 text-sm text-slate-500">

          Click to choose file

        </p>

        {
          selectedFile && (

            <div
              className="
              mt-6
              rounded-2xl
              bg-green-500/10
              px-6
              py-4
              text-green-400
              "
            >

              Selected:

              {" "}

              {
                selectedFile.name
              }

            </div>

          )
        }

      </div>


      {/* JD */}

      {
        analysisMode ===
        "resume-jd" && (

          <div className="w-full max-w-3xl">

            <textarea
              rows={8}
              value={
                jobDescription
              }
              onChange={(e) =>
                setJobDescription(
                  e.target.value
                )
              }
              placeholder="
Paste Job Description...

Java Developer
Spring Boot
Docker
AWS
CI/CD
Microservices
"
              className="
              w-full
              rounded-3xl
              border
              border-purple-400/20
              bg-white/5
              p-6
              outline-none
              "
            />

            <p className="mt-3 text-slate-400">

              Match Score • Missing Keywords
              • Skill Gap Detection

            </p>

          </div>

        )
      }


      {/* BUTTONS */}

      <div className="flex flex-wrap gap-5">

        <button
          onClick={handleAnalyze}
          disabled={loading}

          className="
          rounded-2xl
          border
          border-white/20
          px-8
          py-4
          "
        >

          {
            loading
              ? "Analyzing..."

             :analysisMode ===
             "resume"

              ? "Analyze Resume"

              : "Analyze With JD"
          }

        </button>

        <button
          className="
          rounded-2xl
          bg-purple-600
          px-8
          py-4
          "
        >

          Open Dashboard

        </button>

      </div>

    </div>

  </div>

</section>

      {/* STATS */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:grid-cols-6">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >

              <h2 className="mb-2 text-3xl font-bold">
                {item.value}
              </h2>

              <p className="text-slate-400">
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </section>

   {/* RESUME PREVIEW */}

{
analysisResult && (

<section className="px-6 py-20">

<div
className="
mx-auto
max-w-5xl
rounded-3xl
border
border-cyan-400/20
bg-gradient-to-br
from-cyan-500/10
via-slate-900
to-purple-500/10
p-10
backdrop-blur-xl 
shadow-[0_0_50px_rgba(34,211,238,0.15)]
"
>

<div className="
mb-10
flex
items-center
justify-between
flex-wrap
gap-4
">

<div>

<h2 className="
text-3xl
font-bold
">

AI Resume Intelligence

</h2>

<p className="
mt-2
text-slate-400
">

Resume Successfully Parsed

</p>

</div>

<div className="
rounded-2xl
border
border-green-400/20
bg-green-500/10
px-6
py-4
">

<p className="
text-sm
text-slate-300
">

ATS Score

</p>

<p className="
text-3xl
font-bold
text-green-400
">

{
analysisResult
.atsScore ?? 0
}

</p>

</div>

</div>


{/* SKILLS */}

<div className="mb-10">

<h3 className="
mb-5
text-cyan-300
text-xl
">

Detected Skills

</h3>

<div className="
flex
flex-wrap
gap-4
">

{
analysisResult
.skills?.map(
(
skill:string
)=>(

<div
key={skill}
className="
rounded-2xl
border
border-cyan-400/20
bg-black/20
px-5
py-3
"
>

◉ {skill}

</div>

))
}

</div>

</div>


{/* SUGGESTIONS */}

<div className="
grid
gap-6
md:grid-cols-2
">

<div className="
rounded-2xl
bg-black/30
p-6
">

<p className="
mb-4
text-purple-400
">

AI Suggestions

</p>

{
analysisResult
.suggestions?.map(
(
item:string,
index:number
)=>(

<div
key={index}
className="
mb-3
rounded-xl
bg-cyan-500/5
p-4
"
>

• {item}

</div>

))
}

</div>


{/* MISSING */}

<div className="
rounded-2xl
bg-black/30
p-6
">

<p className="
mb-4
text-red-300
">

Missing Keywords

</p>

<div className="
flex
flex-wrap
gap-3
">

{
analysisResult
.missingKeywords
?.map(
(
item:string
)=>(

<span
key={item}
className="
rounded-xl
bg-red-500/10
px-4
py-2
"
>

○ {item}

</span>

))
}

</div>

{
analysisResult
.guest && (

<p className="
mt-4
text-yellow-400
">

+
{
analysisResult
.hiddenKeywords
}

 more locked.
Login to unlock.

</p>

)

}

</div>

</div>

</div>

</section>

)
}

 {/* ANALYSIS CARDS */}

<section className="py-20">

  <h2 className="mb-12 text-center text-4xl font-bold">
    Recent Analysis
  </h2>

  <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-6">

    {analysisCards.map((item) => (

      <div
        key={item.role}
        className="
        w-[280px]
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition
        duration-300
        hover:scale-105
        hover:border-cyan-400/50
        "
      >

        <FaChartLine
          size={30}
          className="mb-5 text-cyan-400"
        />

        <h3 className="text-xl font-semibold">
          {item.role}
        </h3>

        <p className="mt-4 text-green-400">
          Score {item.score}
        </p>

      </div>

    ))}

  </div>

</section>

      {/* FOOTER */}

      <section className="px-6 py-24 text-center">

        <h2 className="mb-8 text-5xl font-bold">
          Ready to improve your resume?
        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          <button className="rounded-2xl bg-cyan-500 px-8 py-4"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Resume
          </button>

          <button className="rounded-2xl border border-white/20 px-8 py-4">
            Go To Dashboard
          </button>

        </div>

        <p className="mt-8 text-slate-400">
          Trusted by students • Developers • Recruiters • Job Seekers
        </p>

      </section>

    </div>
  );
}

function Skill(
  {
    name,
    value,
  }: {
    name: string;
    value: number;
  }
) {
  return (

    <div className="mb-6">

      <div className="mb-2 flex justify-between">

        <span>{name}</span>

        <span>{value}%</span>

      </div>

      <div className="h-3 rounded-full bg-slate-800">

        <div
          className="h-3 rounded-full bg-cyan-500"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>

  );
}

function InfoCard(
  {
    title,
    value,
  }: {
    title: string;
    value: string;
  }
) {
  return (

    <div className="rounded-2xl bg-slate-900 p-6">

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        {value}
      </h3>

    </div>

  );
}


