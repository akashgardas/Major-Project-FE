import React from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen lg:flex-row bg-page-bg">
      {/* LEFT EDITORIAL BRAND PANEL (~42% desktop) */}
      <aside className="relative flex flex-col justify-between w-full lg:w-[42%] bg-page-bg text-text-primary p-space-lg lg:p-margin overflow-hidden border-b lg:border-b-0 lg:border-r border-border-subtle">
        {/* Unique Abstract Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Ambient glowing orbs */}
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-copper/20 blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary-navy/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] left-[60%] w-[30%] h-[30%] rounded-full bg-[#2A9D8F]/15 blur-[80px]"></div>
          
          {/* Modern dot matrix pattern overlay */}
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: 'radial-gradient(var(--grid-line-color) 1.5px, transparent 1.5px)',
              backgroundSize: '28px 28px',
            }}
          ></div>
        </div>
        
        {/* Top Metadata & Monogram */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center border border-border-subtle shadow-sm">
              <svg className="w-5 h-5 text-primary-navy dark:text-copper" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle className="opacity-30" cx="12" cy="12" r="9" strokeDasharray="2 2"></circle>
                <circle className="opacity-75" cx="12" cy="12" r="5"></circle>
                <circle cx="12" cy="12" fill="currentColor" r="2"></circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-text-primary tracking-tight leading-none font-bold">LearnSphere</span>
              <span className="font-label-sm text-label-sm text-soft-navy mt-1 uppercase tracking-widest">Cognitive Core</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-card border border-border-subtle text-soft-navy font-label-sm text-label-sm tracking-wide shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-copper"></span>
            v2.8 ACADEMIC
          </span>
        </div>

        {/* Center Narrative & Interactive Knowledge Graph Map */}
        <div className="relative z-10 my-space-xl lg:my-auto flex flex-col gap-space-lg">
          <div className="space-y-space-sm max-w-lg">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-copper font-semibold">Autonomous Pedagogy</span>
            <h1 className="font-serif-italic text-headline-xl lg:text-[40px] leading-[1.15] text-text-primary font-medium tracking-tight">
              Learn with intention. <br />
              <span className="italic font-normal text-copper">Grow with direction.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-text-secondary max-w-md pt-space-xs leading-relaxed">
              Your personalized learning trajectory, calibrated continuously by discreet cognitive agents built around your intellectual milestones.
            </p>
          </div>


        </div>

        {/* Bottom Proof of Rigor & Trust Standards */}
        <div className="relative z-10 pt-space-md border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-text-secondary">
          <p className="font-body-sm text-body-sm italic">
            "Engineered for intellectual retention and adaptive mastery."
          </p>
          <div className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider shrink-0 bg-surface-card px-2.5 py-1 rounded border border-border-subtle shadow-sm">
            <span className="material-symbols-outlined text-[15px] text-copper">verified_user</span>
            <span className="font-medium">FERPA • SOC-2 TYPE II</span>
          </div>
        </div>
      </aside>

      {/* RIGHT AUTHENTICATION PANEL */}
      <main className="flex-1 flex flex-col relative w-full lg:w-[58%]">
        <div className="absolute top-space-lg right-space-lg lg:top-margin lg:right-margin">
          <ThemeToggle />
        </div>
        <div className="flex-1 flex items-center justify-center px-gutter-mobile py-space-xl lg:px-0">
          <div className="w-full max-w-[420px]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
