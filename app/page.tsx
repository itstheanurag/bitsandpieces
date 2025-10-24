import {
  GradientButtonOne,
  GradientButtonThree,
  AnimatedButtonOne,
  AnimatedButtonTwo,
  AnimatedButtonThree,
  GlassButtonOne,
  GlassButtonTwo,
  GlassButtonThree,
} from "@/components/bitsandpieces/buttons";

export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
      style={{
        backgroundImage:
          "url(https://cdn.dribbble.com/userupload/12938238/file/original-d638c939589052558a94332a73639fe5.png?resize=1024x768)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Glassy Gradient Buttons
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Here are some examples of the glassy gradient buttons.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <GradientButtonOne variant="glass" size="lg">
            Click Me
          </GradientButtonOne>
          <GradientButtonThree variant="gradient-hover" size="lg">
            Click Me
          </GradientButtonThree>
          <AnimatedButtonOne variant="pulsing" size="lg">
            Click Me
          </AnimatedButtonOne>
          <AnimatedButtonTwo variant="shimmer" size="lg">
            Click Me
          </AnimatedButtonTwo>
          <AnimatedButtonThree variant="glow" size="lg">
            Click Me
          </AnimatedButtonThree>
          <GlassButtonOne variant="glass" size="lg">
            Click Me
          </GlassButtonOne>
          <GlassButtonTwo variant="glass-dark" size="lg">
            Click Me
          </GlassButtonTwo>
          <GlassButtonThree variant="glass-light" size="lg">
            Click Me
          </GlassButtonThree>
        </div>
      </main>
    </div>
  );
}
