import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { updateStoreProfile } from "@/api/update-store-profile";
import { toast } from "sonner";
import { DialogClose } from "@radix-ui/react-dialog";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  const { mutateAsync: updateStoreProfileFn } = useMutation({
    mutationFn: updateStoreProfile,
  });

  async function handleUpdateStoreProfile(data: StoreProfileSchema) {
    try {
      await updateStoreProfileFn({
        name: data.name,
        description: data.description,
      });

      toast.success(
        <div className="flex w-full place-items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <strong>Success</strong>
            <p>Store profile was updated successfully.</p>
          </div>
        </div>,
      );
    } catch {
      toast.error(
        <div className="flex w-full flex-col gap-1">
          <strong>Failure</strong>
          <p>Something went wrong when trying to update store profile.</p>
        </div>,
      );
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Store Profile</DialogTitle>
        <DialogDescription>Store details</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateStoreProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" {...register("name")} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
