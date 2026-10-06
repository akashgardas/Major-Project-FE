import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const Landing: React.FC = () => {
  return (
    <div data-theme="forest" className="min-h-screen selection:bg-copper selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden transition-colors duration-200 bg-page-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border transition-colors bg-surface-card border-border-subtle text-copper">
                <span className="w-2 h-2 rounded-full bg-copper"></span>
                Adaptive Cohort &amp; Self-Paced Platform
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] font-serif-italic font-medium tracking-tight text-text-primary">
                Learn with intention.<br/>
                <span className="italic font-normal text-copper">Grow with direction.</span>
              </h1>

              <p className="text-lg sm:text-[19px] leading-relaxed font-normal text-text-secondary">
                An adaptive learning platform that understands your goals, guides your learning journey, and helps you improve at your own pace.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2 w-full">
                <Link to="/register" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-[15px] font-semibold text-white shadow-sm transition-all duration-150 hover:brightness-105 active:scale-[0.99] bg-copper hover:bg-copper-hover">
                  <span>Start Learning</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>

                <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-[15px] font-medium border transition-colors hover:bg-black/5 dark:hover:bg-white/5 border-border-subtle text-text-primary">
                  <span>Explore Features</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-soft-navy">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">psychology</span>
                  <span>Cognitive Mastery Model</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">speed</span>
                  <span>Self-Paced Progression</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>FERPA Compliant Privacy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TRUST / VALUE STRIP ================= */}
        <section className="border-y transition-colors py-10 bg-surface-card border-border-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center border transition-colors bg-surface-subtle border-border-subtle text-copper">
                  <span className="material-symbols-outlined text-[20px]">account_tree</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-text-primary">Personalized Learning</h3>
                  <p className="text-xs mt-1 leading-normal text-text-secondary">Calibrated curriculums structured specifically for your knowledge gaps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center border transition-colors bg-surface-subtle border-border-subtle text-copper">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-text-primary">Adaptive Practice</h3>
                  <p className="text-xs mt-1 leading-normal text-text-secondary">Assessments that scale dynamically based on demonstrated mastery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center border transition-colors bg-surface-subtle border-border-subtle text-copper">
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-text-primary">AI Tutoring</h3>
                  <p className="text-xs mt-1 leading-normal text-text-secondary">Socratic conversation that challenges reasoning rather than giving away solutions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center border transition-colors bg-surface-subtle border-border-subtle text-copper">
                  <span className="material-symbols-outlined text-[20px]">show_chart</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-text-primary">Progress Tracking</h3>
                  <p className="text-xs mt-1 leading-normal text-text-secondary">Retention curves and conceptual velocity measured with research precision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section id="features" className="py-20 md:py-28 transition-colors bg-page-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-left mb-16 space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-copper">Modular Architecture</span>
              <h2 className="text-3xl sm:text-4xl font-serif-italic font-medium tracking-tight text-text-primary">
                Everything you need to learn better.
              </h2>
              <p className="text-base sm:text-lg text-text-secondary">
                Purpose-built instruments designed for depth, discipline, and verifiable intellectual retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: 'Personalized Learning Paths', icon: 'route', desc: 'Learning plans adapt to your goals, progress, and knowledge level. Topics automatically re-order and expand when foundational concepts require reinforcement.' },
                { title: 'AI Learning Assistant', icon: 'smart_toy', desc: 'Ask questions, get explanations, and learn through interactive conversations. The assistant guides your mental model using targeted questioning rather than static answers.' },
                { title: 'Adaptive Assessments', icon: 'quiz', desc: 'Quizzes and practice sessions adjust to your performance in real time. Items increase in nuance as you demonstrate mastery, ensuring zero time is wasted on resolved topics.' },
                { title: 'Coding Practice', icon: 'code', desc: 'Practice programming with guided challenges, hints, and feedback. In-browser sandbox runs unit tests immediately with algorithmic time-complexity checks.' },
                { title: 'Learn From Your Documents', icon: 'upload_file', desc: 'Upload learning material, research papers, lecture slide decks, and syllabi to interact through intelligent Q&A with citeable margin annotations.' },
                { title: 'Progress Intelligence', icon: 'insights', desc: 'Understand your strengths, weak areas, and what to learn next. Visual retention decay modeling prompts timely revisions before concepts fade.' },
              ].map((f, i) => (
                <div key={i} className="p-7 rounded-xl border transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md bg-surface-card border-border-subtle">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-surface-subtle border-border-subtle text-copper">
                      <span className="material-symbols-outlined text-[20px]">{f.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-text-primary">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{f.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t text-xs font-semibold flex items-center gap-1.5 border-border-subtle text-copper">
                    <span>Explore feature</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section id="get-started" className="py-20 md:py-28 transition-colors border-t bg-surface-card border-border-subtle">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs uppercase font-bold tracking-wider text-copper">Begin Today</span>
              <h2 className="text-3xl sm:text-5xl font-serif-italic font-medium tracking-tight text-text-primary">
                Your learning journey starts here.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed font-normal text-text-secondary">
                Build skills at your pace, follow a path designed around you, and keep improving with measurable, verifiable mastery.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/register" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-base font-semibold text-white shadow-sm transition-all duration-150 hover:brightness-105 active:scale-[0.99] bg-copper hover:bg-copper-hover">
                  <span>Start Learning</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link to="/login" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-lg text-base font-medium border transition-colors hover:bg-surface-subtle border-border-subtle text-text-primary">
                  Sign in to existing account
                </Link>
              </div>

              <p className="text-xs text-soft-navy">
                No credit card required. Free tier includes your first personalized learning path and 3 adaptive assessments.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
