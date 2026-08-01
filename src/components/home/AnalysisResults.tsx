import type { AnalysisResult } from "../../types/analysis";

interface Props {
  result: AnalysisResult | null;
}

export default function AnalysisResults({
  result,
}: Props) {
  if (!result) return null;

  return (
    <section className="px-6 py-20">
     <div
  className="
    mx-auto
    max-w-5xl
    rounded-3xl
    border
    border-cyan-400/20
    bg-gradient-to-br
    from-cyan-500/5
    via-[var(--card)]
    to-purple-500/5
    p-10
    backdrop-blur-xl
    transition-colors
  "
>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[var(--text)]">
              AI Resume Intelligence
            </h2>

            <p className="mt-2 text-[var(--text-secondary)]">
              Resume Successfully Parsed
            </p>
          </div>

          <div className="rounded-2xl border border-green-400/20 bg-green-500/10 px-6 py-4">
            <p className="text-sm text-[var(--text-secondary)]">
              ATS Score
            </p>

            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
              {result.finalScore ?? 0}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-5 text-xl text-cyan-600 dark:text-cyan-300">
            Detected Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {result.skills?.map((skill) => (
              <div
                key={skill}
                className="
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-5
                  py-3
                  text-[var(--text)]
                "
              >
                ◉ {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[var(--surface)] p-6">
            <p className="mb-4 text-purple-600 dark:text-purple-400">
              AI Suggestions
            </p>

            {result.suggestions?.map((item, index) => (
              <div
                key={index}
                className="
                  mb-3
                  rounded-xl
                  bg-cyan-500/10
                  p-4
                  text-[var(--text)]
                "
              >
                • {item}
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[var(--surface)] p-6">
            <p className="mb-4 text-red-600 dark:text-red-300">
              Missing Keywords
            </p>

            <div className="flex flex-wrap gap-3">
              {result.missingKeywords?.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-xl
                    bg-red-500/10
                    px-4
                    py-2
                    text-[var(--text)]
                  "
                >
                  ○ {item}
                </span>
              ))}
            </div>

            {result.guest &&
              typeof result.hiddenKeywords === "number" && (
                <p className="mt-4 text-yellow-600 dark:text-yellow-400">
                  +{result.hiddenKeywords} more locked.
                  Login to unlock.
                </p>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}