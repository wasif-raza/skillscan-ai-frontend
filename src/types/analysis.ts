export interface AnalysisResult {
  finalScore: number;
  skills: string[];
  suggestions: string[];
  missingKeywords: string[];
  hiddenKeywords?: number;
  guest?: boolean;
}