import React from 'react';

export const Learning: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 sm:p-6 lg:p-8 font-sans bg-page-bg min-h-[calc(100vh-64px)] selection:bg-copper/20 selection:text-text-primary">
      
      {/* 1. PAGE HEADER */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-serif-italic font-medium text-text-primary tracking-tight">Learning</h1>
          <p className="text-text-secondary mt-1.5 text-sm font-medium">Your learning path, organized around what matters next.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-text-secondary/70">search</span>
            <input 
              type="text" 
              placeholder="Search learning..." 
              className="pl-9 pr-4 py-2 bg-surface-card border border-border-subtle rounded-lg text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-copper/50 focus:ring-1 focus:ring-copper/50 w-full md:w-64 transition-all shadow-sm" 
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-card border border-border-subtle rounded-lg text-sm font-semibold text-text-primary hover:bg-surface-subtle transition-colors shadow-sm shrink-0">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN - MAIN CONTENT */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* 2. CURRENT LEARNING SECTION */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper/90 mb-4">Continue Learning</h2>
            <div className="bg-[#fcfbfa] dark:bg-surface-card border border-border-subtle rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group cursor-pointer">
              
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
              
              {/* Bookmark Detail */}
              <div className="absolute top-0 left-6 sm:left-8 w-4 h-6 bg-copper shadow-sm rounded-b-sm transform transition-transform duration-300 group-hover:scale-y-110 origin-top"></div>
              
              <div className="relative z-10 mt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Machine Learning Systems &amp; Data Engineering</div>
                <h3 className="text-2xl sm:text-3xl font-serif-italic font-medium text-text-primary mb-8 tracking-tight">Module 04<br/>Neural Attention Mechanisms</h3>
                
                {/* Progress */}
                <div className="mb-8 max-w-md">
                  <div className="flex justify-between text-xs font-semibold mb-2.5">
                    <span className="text-text-secondary uppercase tracking-widest text-[9px]">Course Progress</span>
                    <span className="text-copper font-mono">68% complete</span>
                  </div>
                  <div className="h-1.5 w-full bg-border-subtle rounded-full overflow-hidden">
                    <div className="h-full bg-copper w-[68%] rounded-full relative">
                      <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-border-subtle pt-6">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.15em] text-text-secondary font-bold mb-1.5">Current Focus</div>
                    <div className="text-lg font-semibold text-text-primary mb-1.5">Multi-Head Self-Attention</div>
                    <div className="text-xs text-text-secondary font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px]">schedule</span>
                      35 min estimated
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-2.5 px-6 py-3 bg-primary-navy text-white text-[13px] font-semibold rounded-lg hover:bg-[#314D5E] transition-all group/btn shadow-sm shrink-0 border-none cursor-pointer">
                    Continue learning
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 4. CURRENT MODULE */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-soft-navy mb-4">Current Module</h2>
            
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-text-primary tracking-tight">Neural Attention Mechanisms</h3>
              <p className="text-sm text-text-secondary mt-1.5 font-medium">Understand how attention allows models to selectively focus on relevant information.</p>
            </div>
            
            <div className="space-y-3">
              {[
                { type: 'Concept', num: '01', title: 'Attention & Query-Key-Value', status: 'completed' },
                { type: 'Practice', num: '02', title: 'Scaled Dot-Product Attention', status: 'completed' },
                { type: 'Challenge', num: '03', title: 'Multi-Head Attention', status: 'current' },
                { type: 'Review', num: '04', title: 'Sequence Masking', status: 'upcoming' },
              ].map(act => (
                 <div key={act.num} className={`flex items-center p-4 rounded-lg border transition-all duration-300 group/row cursor-pointer
                   ${act.status === 'current' ? 'border-copper/40 bg-copper/5 shadow-sm' : 'border-border-subtle bg-surface-card hover:border-text-secondary/30 hover:-translate-y-[1px]'}`}>
                   
                   <div className="w-10 text-xs font-mono font-bold text-text-secondary/60">{act.num}</div>
                   <div className="flex-1">
                     <div className="text-[9px] uppercase tracking-[0.15em] font-bold text-text-secondary mb-1">{act.type}</div>
                     <div className={`text-sm font-semibold tracking-tight ${act.status === 'current' ? 'text-copper' : 'text-text-primary'}`}>{act.title}</div>
                   </div>
                   <div className="flex items-center gap-4">
                     {act.status === 'completed' && <span className="material-symbols-outlined text-[18px] text-text-secondary/60">check_circle</span>}
                     {act.status === 'current' && <span className="material-symbols-outlined text-[18px] text-copper group-hover/row:translate-x-1.5 transition-transform">arrow_forward</span>}
                     {act.status === 'upcoming' && <span className="w-1.5 h-1.5 rounded-full border border-border-subtle"></span>}
                   </div>
                 </div>
              ))}
            </div>
          </section>

          {/* 5. NEXT BEST ACTION */}
          <section className="bg-[#fefdfc] dark:bg-surface-card border border-border-subtle rounded-xl p-6 shadow-sm border-l-4 border-l-copper relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10">
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-3">What To Do Next</h2>
              <h3 className="text-base font-semibold text-text-primary mb-2 tracking-tight">Practice scaled dot-product attention.</h3>
              <p className="text-sm text-text-secondary mb-5 leading-relaxed max-w-2xl font-medium">
                Your recent practice shows that matrix-shape reasoning is the area where another short exercise would help.
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-copper hover:text-copper-hover group/btn transition-colors bg-transparent border-none p-0 cursor-pointer">
                Start practice
                <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </section>

          {/* 6. STUDY MATERIALS */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-soft-navy mb-4">Study Materials</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { type: 'Lecture Notes', title: 'Attention Mechanisms', icon: 'menu_book' },
                { type: 'Practice Set', title: 'Matrix Operations', icon: 'edit_square' },
                { type: 'Reference', title: 'Transformer Architecture', icon: 'account_tree' },
                { type: 'Notebook', title: 'Self-Attention Implementation', icon: 'code' },
              ].map(mat => (
                <div key={mat.title} className="p-5 border border-border-subtle rounded-xl bg-surface-card hover:bg-surface-subtle transition-colors cursor-pointer group shadow-sm flex flex-col h-full">
                  <span className="material-symbols-outlined text-[20px] text-text-secondary/70 mb-4 group-hover:text-text-primary transition-colors">{mat.icon}</span>
                  <div className="text-[9px] uppercase tracking-[0.15em] font-bold text-text-secondary mb-1.5">{mat.type}</div>
                  <div className="text-sm font-semibold text-text-primary leading-tight group-hover:text-copper transition-colors">{mat.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. PROGRESS SUMMARY */}
          <section>
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-soft-navy mb-4">Learning Snapshot</h2>
            <div className="flex flex-wrap items-center p-6 border border-border-subtle rounded-xl bg-surface-card shadow-sm gap-y-6">
              <div className="w-1/2 sm:w-1/4 pr-4">
                <div className="text-2xl font-serif-italic font-bold text-text-primary">68%</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-text-secondary font-bold mt-1.5">Overall progress</div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-border-subtle"></div>
              
              <div className="w-1/2 sm:w-1/4 sm:px-6">
                <div className="text-2xl font-serif-italic font-bold text-text-primary">14/22</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-text-secondary font-bold mt-1.5">Competencies</div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-border-subtle"></div>
              
              <div className="w-1/2 sm:w-1/4 sm:px-6">
                <div className="text-2xl font-serif-italic font-bold text-copper">18 days</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-copper/80 font-bold mt-1.5">Practice streak</div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-border-subtle"></div>
              
              <div className="w-1/2 sm:w-1/4 sm:pl-6">
                <div className="text-2xl font-serif-italic font-bold text-text-primary">94.2%</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-text-secondary font-bold mt-1.5">Retention</div>
              </div>
            </div>
          </section>

        </div>

        {/* RIGHT COLUMN - SIDEBAR */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* 3. LEARNING PATH */}
          <div className="bg-surface-card border border-border-subtle rounded-xl p-7 shadow-sm">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-soft-navy mb-8">Your Learning Path</h2>
            
            <div className="relative ml-2 space-y-7 before:absolute before:inset-0 before:ml-[7px] before:-translate-x-px md:before:w-0.5 before:w-[1px] before:bg-border-subtle before:h-full before:z-0">
              {[
                { title: 'Foundations', status: 'completed' },
                { title: 'Python & Data', status: 'completed' },
                { title: 'Machine Learning', status: 'completed' },
                { title: 'Deep Learning', status: 'current' },
                { title: 'Attention Mechanisms', status: 'upcoming' },
                { title: 'Generative AI', status: 'upcoming' },
                { title: 'Project Mastery', status: 'upcoming' },
              ].map((step, i) => (
                <div key={i} className="relative pl-8 flex items-center group cursor-default">
                  {step.status === 'completed' && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-surface-card border border-copper flex items-center justify-center text-copper z-10">
                      <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                    </div>
                  )}
                  {step.status === 'current' && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full bg-surface-card border-[1.5px] border-copper flex items-center justify-center z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" style={{ animationDuration: '2s' }}></div>
                    </div>
                  )}
                  {step.status === 'upcoming' && (
                    <div className="absolute left-[2px] top-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full bg-surface-card border border-border-subtle z-10"></div>
                  )}
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${
                    step.status === 'completed' ? 'text-text-primary' :
                    step.status === 'current' ? 'text-copper' :
                    'text-text-secondary opacity-50'
                  }`}>
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. RECENT ACTIVITY */}
          <div className="bg-surface-card border border-border-subtle rounded-xl p-7 shadow-sm">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-bold text-soft-navy mb-6">Recent Activity</h2>
            
            <div className="space-y-6">
              {[
                { title: 'Matrix Operations', time: 'Today · 24 min', status: 'completed' },
                { title: 'Attention Fundamentals', time: 'Yesterday · 31 min', status: 'completed' },
                { title: 'Self-Attention Implementation', time: '35 min remaining', status: 'in-progress' },
              ].map((act, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-0.5 shrink-0">
                    {act.status === 'completed' ? 
                      <span className="material-symbols-outlined text-[16px] text-text-secondary/70">check</span> :
                      <span className="material-symbols-outlined text-[16px] text-copper">arrow_forward</span>
                    }
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-text-secondary mb-1">{act.status === 'completed' ? 'Completed' : 'In progress'}</div>
                    <div className="text-sm font-semibold text-text-primary leading-tight tracking-tight">{act.title}</div>
                    <div className="text-[11px] font-medium text-text-secondary mt-1.5">{act.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
