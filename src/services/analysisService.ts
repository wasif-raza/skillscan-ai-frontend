import { uploadResume } from "../api/resumeApi";

export const analyzeResume = async (
  file: File
) => {
  return uploadResume(file);
};