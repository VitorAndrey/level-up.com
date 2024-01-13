import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import googleLogo from "../../../public/google-icon-logo.svg";
import { Button } from "./button";
import { LoadingObjectType } from "@/app/(auth)/login/page";

type GoogleAuthBtnProps = {
  isLoadingObject: LoadingObjectType;
  onStartGoogleAuth: () => void;
};

export default function GoogleAuthBtn({
  isLoadingObject,
  onStartGoogleAuth,
}: GoogleAuthBtnProps) {
  const { isLoading } = isLoadingObject;

  function handleGoogleAuth() {
    onStartGoogleAuth();
    signIn("google");
  }

  return (
    <Button
      onClick={handleGoogleAuth}
      variant="outline"
      type="button"
      disabled={isLoading}
    >
      {isLoadingObject.spinningButton === "google" ? (
        <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Image
          src={googleLogo}
          className="mr-2"
          alt="Google Logo Icon"
          width={16}
          height={16}
        />
      )}{" "}
      Google
    </Button>
  );
}
