import { GradientButton } from "@/components/bitsandpieces/buttons/Gradients";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" style={{backgroundImage: 'url(https://cdn.dribbble.com/userupload/12938238/file/original-d638c939589052558a94332a73639fe5.png?resize=1024x768)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
          <GradientButton variant="glass" size="lg">
            Click Me
          </GradientButton>
          <GradientButton variant="glass" size="default">
            Click Me
          </GradientButton>
          <GradientButton variant="glass" size="sm">
            Click Me
          </GradientButton>
        </div>
      </main>
    </div>
  );
}
