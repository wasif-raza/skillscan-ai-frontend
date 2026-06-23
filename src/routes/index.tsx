import { createFileRoute } from "@tanstack/react-router";
import { FaBars, FaChartLine } from "react-icons/fa";
import {
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
} from "react";

import {
  stats,
  analysisCards,
} from "../constants/homeData";
import HeroSection from "../components/home/HeroSection";
import ResumeUpload from "../components/home/ResumeUpload";
import JobDescriptionInput from "../components/home/JobDescriptionInput";
import AnalysisResults from "../components/home/AnalysisResults";
import AnalysisModeSelector from "../components/home/AnalysisModeSelector";

import { useResumeAnalysis } from "../hooks/useResumeAnalysis";

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

  const {
    loading,
    analysisResult,
    analyze,
  } = useResumeAnalysis();

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

 



 const handleAnalyze = async () => {
  if (!selectedFile) {
    alert(
      "Please upload a resume first"
    );
    return;
  }

  try {
    await analyze(selectedFile);
  } catch (error) {
    console.error(
      "Upload failed",
      error
    );

    alert(
      "Failed to upload resume. Please try again."
    );
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

    <HeroSection />

    <div className="mt-12 flex flex-col items-center gap-8">

      {/* MODE */}

    <AnalysisModeSelector
      mode={analysisMode}
      onChange={setAnalysisMode}
    />


      {/* FILE INPUT */}

<ResumeUpload
  fileInputRef={fileInputRef}
  dragActive={dragActive}
  selectedFile={selectedFile}
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onInputChange={handleInputChange}
/>


      {/* JD */}

     {
  analysisMode ===
  "resume-jd" && (
    <JobDescriptionInput
      value={jobDescription}
      onChange={setJobDescription}
    />
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

    <AnalysisResults
      result={analysisResult}
    />


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




