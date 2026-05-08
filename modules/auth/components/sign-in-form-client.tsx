import React from "react";
import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";
import { signIn } from "@/auth";

// Server Actions (Keep these as they are)
async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <div className="flex flex-col space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="inline-flex w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200">
          Sign in or sign up
        </div>
        <h1 className="text-3xl font-semibold text-white">
          Quick access
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          Use Google or GitHub to enter your workspace instantly. 
          New accounts are created automatically.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:brightness-110"
          >
            <Chrome className="h-5 w-5" />
            <span>Continue with Google</span>
          </Button>
        </form>

        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-6 text-sm font-semibold text-white transition duration-200 hover:bg-slate-800"
          >
            <Github className="h-5 w-5" />
            <span>Continue with GitHub</span>
          </Button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="space-y-4 pt-4 text-sm text-slate-400">
        <p className="italic text-xs">
          No password needed — your account is created automatically.
        </p>
        <p className="text-xs">
          By continuing, you agree to our{' '}
          <a href="#" className="underline decoration-dotted underline-offset-4 text-slate-300 hover:text-white">
            Terms
          </a>{' '}
          and{' '}
          <a href="#" className="underline decoration-dotted underline-offset-4 text-slate-300 hover:text-white">
            Privacy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default SignInFormClient;