import {
  FloatingNavbar,
  GlassNavbar,
  MorphingNavbar,
} from "@/components/bitsandpieces/navbars";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 bg-gray-900">
      {/* <FloatingNavbar /> */}
      {/* <GlassNavbar /> */}
      <MorphingNavbar />
    </div>
  );
}
