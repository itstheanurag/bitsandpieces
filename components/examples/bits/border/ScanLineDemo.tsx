
"use client";

import { BorderDemo } from "./BorderDemo";
import scanLine from "@/components/bits/border/scan-line";

export function ScanLineDemo() {
  return <BorderDemo borderStyle={scanLine} />;
}
