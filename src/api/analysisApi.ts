import {api} from "./axios";

export interface AnalysisRequest {
  resumeId: string;
  jobDescription?: string;
}

export const analyzeResume = async ({resumeId, jobDescription}: AnalysisRequest) => {
    const response = await api.post("api/analysis", {
        resumeId,
        jobDescription
    });
    return response.data;
};