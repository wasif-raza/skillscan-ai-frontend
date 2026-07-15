import { uploadResume } from "../api/resumeApi";
import { analyzeResume as analyzeResumeApi } from "../api/analysisApi";
import type { AnalysisResult } from "../types/analysis";

export const analyzeResume = async (
  file: File,
  jobDescription?: string
): Promise<AnalysisResult> => {
  // Step 1: Upload the resume
  const uploadResult = await uploadResume(file);

  console.log({
  resumeId: uploadResult.resumeId,
  jobDescription,
});

  // Step 2: Analyze the uploaded resume
  return analyzeResumeApi({
    resumeId: uploadResult.resumeId,
    jobDescription,
  });
};