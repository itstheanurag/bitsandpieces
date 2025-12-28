import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Settings, User, Bell, Mail, Plus } from "lucide-react";

const ComponentGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Buttons");

  const tabs = ["Buttons", "Inputs", "Cards", "Navigation"];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Crafted for Quality</h2>
        <div className="flex justify-center gap-2 bg-zinc-100 p-1 rounded-xl w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="p-8 border border-zinc-200 rounded-3xl bg-white shadow-2xl shadow-zinc-100 min-h-[400px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-wrap gap-6 justify-center items-center"
              >
                {activeTab === "Buttons" && (
                  <>
                    <button className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors">
                      Primary
                    </button>
                    <button className="px-6 py-2 border border-zinc-200 text-zinc-900 rounded-lg hover:bg-zinc-50 transition-colors">
                      Secondary
                    </button>
                    <button className="px-6 py-2 bg-zinc-100 text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors">
                      Ghost
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-white rounded-full">
                      <Plus className="w-5 h-5" />
                    </button>
                  </>
                )}
                {activeTab === "Inputs" && (
                  <div className="w-full max-w-sm space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all"
                        placeholder="Search components..."
                      />
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                      />
                      <span className="text-sm text-zinc-600">
                        Enable neural processing
                      </span>
                    </div>
                  </div>
                )}
                {activeTab === "Cards" && (
                  <div className="p-6 border border-zinc-100 rounded-2xl shadow-lg w-64 space-y-4">
                    <div className="w-full h-32 bg-zinc-100 rounded-xl"></div>
                    <div>
                      <h4 className="font-semibold">Neural Surface</h4>
                      <p className="text-xs text-zinc-500">
                        Minimalist elevation model.
                      </p>
                    </div>
                    <button className="w-full py-2 text-xs font-medium border border-zinc-200 rounded-lg">
                      Action
                    </button>
                  </div>
                )}
                {activeTab === "Navigation" && (
                  <nav className="flex items-center gap-8 p-4 bg-zinc-50 border border-zinc-100 rounded-full px-8">
                    <User className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-900" />
                    <Bell className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-900" />
                    <Mail className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-900" />
                    <Settings className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-zinc-900" />
                  </nav>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Consistent Atomic Design
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Every component is built with a strict attention to detail. We use
              a standardized scaling system for spacing, typography, and color
              to ensure your app feels cohesive out of the box.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 bg-zinc-900 rounded-full flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Type-Safe Components</h4>
                <p className="text-xs text-zinc-500">
                  Built 100% in TypeScript with full autocompletion.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 bg-zinc-900 rounded-full flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Accessible by Default</h4>
                <p className="text-xs text-zinc-500">
                  WAI-ARIA compliant components for everyone.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-5 h-5 bg-zinc-900 rounded-full flex-shrink-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Composable Logic</h4>
                <p className="text-xs text-zinc-500">
                  Modular hooks that power complex UI behaviors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentGrid;
