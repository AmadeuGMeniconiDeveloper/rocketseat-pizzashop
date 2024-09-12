import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: { email: searchParams.get("email") ?? "" },
  });

  const { mutateAsync: authenticateFn } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticateFn({ email: data.email });

      toast.success(
        <div className="flex w-full place-items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <strong>Success</strong>
            <p>A authentication link was sent to your email.</p>
          </div>
          <Button onClick={() => handleSignIn(data)} variant="outline">
            Resend
          </Button>
        </div>,
      );
    } catch {
      toast.error(
        <div className="flex w-full flex-col gap-1">
          <strong>Failure</strong>
          <p>Something went wrong.</p>
        </div>,
      );
    }
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
        <Button asChild variant="outline" className="absolute right-8 top-8">
          <Link to="/sign-up" className="">
            Sign Up
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="mb-4 flex flex-col gap-1 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access panel
            </h1>
            <p className="text-sm text-muted-foreground">
              Folow your sales through the panel
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-primary"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            Access panel
          </Button>
        </form>
      </div>
    </>
  );
}
