import { Helmet } from "react-helmet-async";
import { Button } from "../../components/ui/button";
import { Label } from "@radix-ui/react-label";

export function SignIn() {
  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
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

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:ring-primary"
            />
          </div>
          <Button type="submit" className="w-full">
            Access panel
          </Button>
        </form>
      </div>
    </>
  );
}
