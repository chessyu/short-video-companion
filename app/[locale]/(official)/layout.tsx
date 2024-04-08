import React from "react";
import Layout from "@/app/components/Layout/Layout";

function OfficialLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default OfficialLayout;
