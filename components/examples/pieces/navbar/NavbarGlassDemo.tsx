import { GlassNavbar } from "@/components/pieces/navbar/glass";

export function GlassNavbarDemo() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900">
      <GlassNavbar navItems={navItems} />
    </div>
  );
}
