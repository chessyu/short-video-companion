import React from "react";
import Home from "@/app/[locale]/(official)/home/page";
import { ModalPage } from "@/app/components/ClientComponent/ModalPage";

export default function page() {
  return (
    <ModalPage>
      <Home />
    </ModalPage>
  );
}
