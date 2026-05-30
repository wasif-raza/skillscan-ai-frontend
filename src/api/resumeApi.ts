import { api } from "./axios";

export const uploadResume = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/api/resumes",
    formData
  );

  return response.data;
};