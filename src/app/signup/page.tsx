import type { Metadata } from "next";
import Link from "next/link";

import { AuthShaderPanel } from "@/components/elements/auth-shader-panel";
import Logo from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/data/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sign up",
  description: `Create your ${siteConfig.name} account and start closing more deals with AI.`,
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="container w-full max-w-sm self-center justify-self-center px-4 py-20 lg:px-0 lg:py-0">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Logo className="gap-2.5 [&>span:first-child]:h-8 [&>span:first-child]:w-8 [&>span:last-child]:text-2xl" />
          <span aria-hidden="true" className="text-2xl leading-none font-semibold">
            -
          </span>
          <h1 className="font-display text-2xl leading-none font-semibold tracking-tight">Sign up</h1>
        </div>
        <form className={cn("bg-card border-border flex flex-col rounded-md border p-6 shadow-none lg:p-8")}>
          <div className="grid gap-6">
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required className="bg-input" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required placeholder="***********" className="bg-input" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required placeholder="***********" className="bg-input" />
            </div>
            <Button type="submit" className="w-full shadow-none">
              Create Account
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="border-border w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card text-muted-foreground px-2">Or</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign up with Google
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm">
          <Link href="/signin" className="font-medium hover:underline">
            Sign in
          </Link>
        </div>
      </div>
      <AuthShaderPanel />
    </div>
  );
}
