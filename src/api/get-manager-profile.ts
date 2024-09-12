import { api } from "@/lib/axios";

interface GetManagerProfileResponse {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getManagerProfile(): Promise<GetManagerProfileResponse> {
  const response = await api.get<GetManagerProfileResponse>("/me");

  return response.data;
}
