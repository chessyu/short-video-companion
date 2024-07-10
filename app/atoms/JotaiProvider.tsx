"use client";

import { Provider } from "jotai";
import { PropsWithChildren } from "react";

function JotaiProvider({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>;
}

export default JotaiProvider;
