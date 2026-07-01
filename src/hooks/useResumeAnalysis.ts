import { useState } from "react";
import { analyzeResume } from "../services/analysisService";
import type { AnalysisResult } from "../types/analysis";

export function useResumeAnalysis() {
  const [loading, setLoading] =
    useState(false);

  const [
    analysisResult,
    setAnalysisResult,
  ] =
    useState<AnalysisResult | null>(
      null
    );

  const analyze = async (
    file: File,
    jobDescription?: string
  ) => {
    try {
      setLoading(true);

      const result =
        await analyzeResume(file, jobDescription);

      setAnalysisResult(result);

    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    analysisResult,
    analyze,
  };
}