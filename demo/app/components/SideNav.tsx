import React, { useState, useEffect } from "react";
import {
  Search,
  Palette,
  Navigation,
  Terminal,
  Tag,
  MessageSquare,
  BarChart3,
  Zap,
  Layers,
  Shield,
} from "lucide-react";

const navItems = [
  { id: "playground", label: "Playground", icon: Search },
  { id: "multi-color", label: "Multi-Color", icon: Palette },
  { id: "find-navigate", label: "Find & Navigate", icon: Navigation },
  { id: "log-viewer", label: "Log Viewer", icon: Terminal },
  { id: "badges", label: "Badges", icon: Tag },
  { id: "tooltips", label: "Tooltips", icon: MessageSquare },
  { id: "density", label: "Density Analyzer", icon: BarChart3 },
  { id: "debounced", label: "Debounced Search", icon: Zap },
  { id: "headless", label: "Headless", icon: Layers },
  { id: "accessible", label: "Accessible", icon: Shield },
];

export function SideNav() {
  const [active, setActive] = useState("playground");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden xl:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 p-2 shadow-xl space-y-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              active === id
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
