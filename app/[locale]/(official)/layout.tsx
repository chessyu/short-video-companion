import React, { PropsWithChildren } from "react";
import Layout from "@/app/components/Layout/Layout";

function OfficialLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}

export default OfficialLayout;
