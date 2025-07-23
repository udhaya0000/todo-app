// components/auth/SignupForm.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  component: Signup,
})

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Signed up!");
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold">Sign Up</CardTitle>
      </CardHeader>
      <form onSubmit={handleSignup}>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="name">Full Name</label>
            <Input id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
