import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
  id: string;
  managerId: string;
  name: string;
  description: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await api.get<GetManagedRestaurantResponse>(
    "/managed-restaurant",
  );

  return response.data;
}
