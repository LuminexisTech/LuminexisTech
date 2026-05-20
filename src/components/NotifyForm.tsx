"use client";

import { Button, Input, Text } from "@/components/ui";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="notify-email" className="sr-only">
        Email address
      </label>
      <Input
        id="notify-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "success") setStatus("idle");
        }}
        disabled={status !== "idle"}
        className="flex-1"
      />
      <Button type="submit" disabled={status !== "idle"}>
        {status === "loading" ? "Joining…" : status === "success" ? "On the list" : "Notify me"}
      </Button>
      {status === "success" && (
        <Text variant="body-sm" className="text-muted-foreground sm:col-span-2">
          Thank you — we&apos;ll be in touch at launch.
        </Text>
      )}
    </form>
  );
}
