"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import Image from "next/image";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold">
        Your
        <Image
          src="/wikis-icon.webp"
          height={56}
          width={44}
          alt="idea"
          className="inline mx-4 w-7 h-8 md:w-11 md:h-14"
        />
        <span className="underline underline-offset-[0.075em] decoration-[0.05em]">
          ideas
        </span>
        ,
        <Image
          src="/docs-icon.webp"
          height={56}
          width={44}
          alt="idea"
          className="inline mx-4 w-7 h-8 md:w-11 md:h-14"
        />
        <span className="underline underline-offset-[0.075em] decoration-[0.05em]">
          docs
        </span>
        , &{" "}
        <Image
          src="/projects-icon.webp"
          height={56}
          width={56}
          alt="idea"
          className="inline mx-4 w-8 h-8 md:w-14 md:h-14"
        />
        <span className="underline underline-offset-[0.075em] decoration-[0.05em]">
          plans
        </span>
        . Unified.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Obdisian provides a connected workspace for higher productivity and
        faster workflow.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Obsidian
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Obsidian free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
