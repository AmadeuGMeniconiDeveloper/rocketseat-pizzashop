import { api } from "@/lib/axios";

interface UpdatetoreProfileBody {
  name: string;
  description: string | null;
}

export async function updateStoreProfile({
  name,
  description,
}: UpdatetoreProfileBody) {
  await api.put("profile", { name, description });
}
