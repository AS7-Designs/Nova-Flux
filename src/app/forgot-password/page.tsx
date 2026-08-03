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
  title: "Reset password",
  description: `Reset the password for your ${siteConfig.name} account.`,
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="container w-full max-w-sm self-center justify-self-center px-4 py-20 lg:px-0 lg:py-0">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Logo className="gap-2.5 [&>span:first-child]:h-8 [&>span:first-child]:w-8 [&>span:last-child]:text-2xl" />
          <span aria-hidden="true" className="text-2xl leading-none font-semibold">
            -
          </span>
          <h1 className="font-display text-2xl leading-none font-semibold tracking-tight">Forgot password</h1>
        </div>
        <form className={cn("bg-card border-border flex flex-col rounded-md border p-6 shadow-none lg:p-8")}>
          <div className="grid gap-6">
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" required className="bg-input" />
            </div>
            <Button type="submit" className="w-full shadow-none">
              Reset Password
            </Button>
          </div>
        </form>
        <div className="mt-6 flex items-center justify-center gap-3 text-center text-sm">
          <Link href="/signin" className="font-medium hover:underline">
            Sign in
          </Link>
          <span aria-hidden="true" className="text-muted-foreground">
            |
          </span>
          <Link href="/signup" className="font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
      <AuthShaderPanel />
    </div>
  );
}
