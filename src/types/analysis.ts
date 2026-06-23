export interface AnalysisResult {
  atsScore: number;
  skills: string[];
  suggestions: string[];
  missingKeywords: string[];
  hiddenKeywords?: number;
  guest?: boolean;
}