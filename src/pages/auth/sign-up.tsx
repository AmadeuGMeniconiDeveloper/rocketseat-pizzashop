import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const navigate = useNavigate();

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success(
        <div className="flex w-full place-items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <strong>Success</strong>
            <p>Restaurant was registered successfully.</p>
          </div>
          <Button onClick={() => navigate("/sign-in")} variant="outline">
            Sign in
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
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button asChild variant="outline" className="absolute right-8 top-8">
          <Link to="/sign-in" className="">
            Sign In
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="mb-4 flex flex-col gap-1 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be a partner and start selling
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Bussiness name</Label>
            <input
              id="restaurantName"
              type="text"
              {...register("restaurantName")}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Your name</Label>
            <input
              id="managerName"
              type="text"
              {...register("managerName")}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-primary"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            Register
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            By signing up, you agree to the{" "}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
