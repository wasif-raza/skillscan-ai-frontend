interface Props {
  mode: "resume" | "resume-jd";
  onChange: (
    mode: "resume" | "resume-jd"
  ) => void;
}

export default function AnalysisModeSelector({
  mode,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <button
      type="button"
      aria-pressed={mode === "resume"}
        onClick={() =>
          onChange("resume")
        }
        className={`
          rounded-2xl
          px-8
          py-4

          ${
            mode === "resume"
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
      type="button"
      aria-pressed={mode === "resume-jd"}
        onClick={() =>
          onChange("resume-jd")
        }
        className={`
          rounded-2xl
          px-8
          py-4

          ${
            mode === "resume-jd"
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
  );
}