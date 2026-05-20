import Link from "next/link";
import { Container, Heading } from "@/components/ui";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6">
      <Container narrow className="text-center">
        <Logo className="justify-center" />
        <Heading className="mt-8" emphasis="title">Page not found</Heading>
        <Link href="/" className="ds-btn-primary mt-8 inline-flex">
          Back to home
        </Link>
      </Container>
    </div>
  );
}
