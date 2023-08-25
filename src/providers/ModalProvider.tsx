"use client";

import AuthModal from "@/components/AuthModal";
import { Login } from "@/types/login";
import { useEffect, useState } from "react";

interface ModalProviderProps {
  loginComponent: Login;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ loginComponent }) => {
  const [IsMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!IsMounted) {
    return null;
  }

  return (
    <>
      <AuthModal login={loginComponent} />
    </>
  );
};

export default ModalProvider;
