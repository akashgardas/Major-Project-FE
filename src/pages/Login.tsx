import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { api } from '../services/api';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [status, setStatus] = useState<
    'default' | 'loading' | 'success' | 'error'
  >('default');

  const [errorMessage, setErrorMessage] = useState('');
  
  // State for subtle focus and parallax interactions
  const [focusedField, setFocusedField] = useState<'none' | 'email' | 'password'>('none');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the user prefers reduced motion before applying parallax
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 35;
    const y = (e.clientY - rect.top - rect.height / 2) / 35;
    setMousePos({ x, y });
  };

  // Handle OAuth callback token or errors from redirect
  React.useEffect(() => {
    const token = searchParams.get('token');
    const oauthError = searchParams.get('oauth_error');

    if (token) {
      api.setToken(token);
      setStatus('loading');
      api.getMe()
        .then(() => {
          setStatus('success');
          setTimeout(() => navigate('/dashboard'), 800);
        })
        .catch(() => {
          setStatus('error');
          setErrorMessage('Failed to load user profile after OAuth authentication.');
        });
    } else if (oauthError) {
      setStatus('error');
      setErrorMessage(`OAuth authentication error: ${oauthError.replace(/_/g, ' ')}`);
    }
  }, [searchParams, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      await api.login(email, password);
      
      setStatus('success');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1200);
      
    } catch (error) {
      console.error('Login error:', error);
      setStatus('error');
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Invalid email or password.');
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = api.getGoogleAuthUrl();
  };

  return (
    <div className="flex flex-col w-full min-h-screen lg:flex-row bg-page-bg font-sans selection:bg-copper/20 selection:text-text-primary">
      
      {/* 1. LEFT SIDE - ACADEMIC WORKSPACE (Hidden on mobile) */}
      <aside 
        className="relative flex-col justify-between w-full lg:w-[46%] bg-[#f9f8f6] dark:bg-surface-subtle text-text-primary p-8 lg:p-14 overflow-hidden border-b lg:border-b-0 lg:border-r border-border-subtle hidden lg:flex"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        
        {/* 12. EDITORIAL BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Faint paper grain overlay */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply dark:mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
          
          {/* Soft radial warm glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-copper/5 blur-[120px]"></div>
          
          {/* Subtle architectural / ruled paper lines */}
          <div 
            className="absolute inset-0 opacity-[0.1]" 
            style={{ 
              backgroundImage: 'linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)', 
              backgroundSize: '100% 36px' 
            }}
          ></div>
        </div>

        {/* 11. TOP BRANDING */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="relative w-10 h-10 rounded bg-white dark:bg-surface-card flex items-center justify-center border border-border-subtle shadow-sm">
            <svg className="w-5 h-5 text-primary-navy dark:text-copper" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle className="opacity-30" cx="12" cy="12" r="9" strokeDasharray="2 2"></circle>
              <circle className="opacity-75" cx="12" cy="12" r="5"></circle>
              <circle cx="12" cy="12" fill="currentColor" r="2"></circle>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-text-primary tracking-tight leading-none font-bold font-serif-italic">LearnSphere</span>
            <span className="text-[10px] text-soft-navy mt-1 uppercase tracking-widest font-semibold">Cognitive Core</span>
          </div>
        </div>

        {/* CENTER COMPOSITION: Headline + Journal */}
        <div className="relative z-10 my-auto flex flex-col gap-14">
          
          {/* 8. HERO COPY */}
          <div className="space-y-3 max-w-lg">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper/80">Autonomous Pedagogy</span>
            <h1 className="font-serif-italic text-[42px] lg:text-[48px] leading-[1.12] text-text-primary font-medium tracking-tight">
              Learn with intention.<br />
              <span className="italic font-normal text-copper">Grow with direction.</span>
            </h1>
            <p className="text-[15px] text-text-secondary pt-1 font-medium">
              Your learning path should feel like yours.
            </p>
          </div>

          {/* 1. LEARNING JOURNAL VISUAL */}
          <div className={`relative w-full max-w-[380px] mx-auto sm:mx-0 transition-opacity duration-700 ${focusedField === 'password' ? 'opacity-40' : 'opacity-100'}`}>
            
            {/* Background layered card */}
            <div 
              className="absolute inset-0 bg-white dark:bg-surface-card rounded border border-border-subtle shadow-sm transition-transform duration-500 ease-out"
              style={{ transform: `rotate(3deg) translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)` }}
            ></div>
            
            {/* 6. SECONDARY MINI CARD (Floating Planner Note) */}
            <div 
              className="absolute -right-10 bottom-6 bg-[#fffdfa] dark:bg-surface-card border border-border-subtle rounded p-3 shadow-md w-[120px] z-0 transition-transform duration-500 ease-out"
              style={{ transform: `rotate(-4deg) translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` }}
            >
              <div className="text-[8px] text-soft-navy uppercase tracking-[0.15em] font-bold mb-1.5">Next Session</div>
              <div className="text-[11px] font-semibold text-text-primary leading-tight">Neural Attention</div>
              <div className="text-[9px] text-copper font-mono mt-1 font-medium">10:00 AM</div>
            </div>

            {/* MAIN JOURNAL CARD */}
            <div 
              className={`relative z-10 bg-[#fdfdfc] dark:bg-surface-card rounded border border-border-subtle shadow-lg p-7 lg:p-8 transition-transform duration-500 ease-out overflow-hidden ${focusedField === 'email' ? 'shadow-xl' : ''}`}
              style={{ transform: `rotate(-2deg) translate(${mousePos.x}px, ${mousePos.y}px) ${focusedField === 'email' ? 'scale(1.02)' : 'scale(1)'}` }}
            >
              {/* Subtle inner paper texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
              
              {/* 5. BOOKMARK DETAIL */}
              <div 
                className="absolute top-0 right-6 w-5 h-9 bg-copper shadow-sm rounded-b-sm transition-transform duration-500 flex flex-col items-center justify-end pb-1.5"
                style={{ transform: `translateY(${mousePos.y * 0.4}px)` }}
              >
                <span className="text-[8px] font-bold text-white tracking-widest writing-vertical-lr rotate-180">LS</span>
              </div>

              {/* Journal Content */}
              <div className="space-y-6 relative z-10">
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-soft-navy">My Learning Journal</div>
                
                <div>
                  <div className="text-xl font-serif-italic font-medium text-text-primary">Machine Learning</div>
                  
                  {/* Subtle divider */}
                  <div className="w-full h-[1px] bg-border-subtle mt-3 mb-4"></div>
                  
                  <div className="text-sm font-semibold text-text-primary mb-3">Neural Attention</div>
                  
                  {/* 4. ACADEMIC PROGRESS PATH */}
                  <ul className="space-y-2.5 text-xs text-text-secondary font-medium font-sans tracking-wide">
                    <li className="flex items-center gap-2.5">
                      <span className="text-[10px] text-copper">✓</span> 
                      Foundations
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="text-[10px] text-copper">✓</span> 
                      Matrix Operations
                    </li>
                    <li className={`flex items-center gap-2.5 transition-colors duration-500 ${focusedField === 'email' ? 'text-copper font-semibold' : 'text-text-primary'}`}>
                      <span className="text-xs text-copper leading-none">&rarr;</span> 
                      Self Attention
                    </li>
                    <li className="flex items-center gap-2.5 opacity-50">
                      <span className="text-[8px] text-border-subtle font-bold border border-border-subtle rounded-full w-2.5 h-2.5 flex items-center justify-center"></span> 
                      Positional Encoding
                    </li>
                  </ul>
                </div>
                
                <div className="w-full h-[1px] bg-border-subtle"></div>
                
                {/* 3. CURRENT THINKING NOTE */}
                <div className="pt-1 pb-3">
                  <div className="text-[8px] uppercase tracking-[0.15em] text-copper font-bold mb-2">Current Thinking</div>
                  <div className="font-serif-italic text-[15px] text-text-primary/90 leading-relaxed pl-3 border-l-[1.5px] border-copper/30">
                    "Understand the shape<br/>before the equation."
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-1">
                  {/* 9. STUDY SESSION INDICATOR */}
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-copper shadow-[0_0_4px_rgba(200,100,50,0.4)]"></div>
                    <span className="text-[8px] uppercase tracking-widest font-semibold text-text-secondary">Study space ready</span>
                  </div>
                  <div className="text-[10px] font-mono text-copper font-semibold tracking-wide">68% progress</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 10. RIGHT PANEL - LOGIN FORM */}
      <main className="flex-1 flex flex-col relative w-full lg:w-[54%]">
        
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 lg:top-8 lg:right-8 z-10">
          <ThemeToggle />
        </div>
        
        <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 max-w-[560px] mx-auto w-full">
          
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="lg:hidden flex items-center justify-between mb-12">
            <div className="flex items-center gap-2.5">
               <div className="relative w-8 h-8 rounded bg-surface-card flex items-center justify-center border border-border-subtle">
                <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle className="opacity-30" cx="12" cy="12" r="9" strokeDasharray="2 2"></circle>
                  <circle className="opacity-75" cx="12" cy="12" r="5"></circle>
                  <circle cx="12" cy="12" fill="currentColor" r="2"></circle>
                </svg>
              </div>
              <span className="text-lg font-bold font-serif-italic text-text-primary tracking-tight">LearnSphere</span>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mb-10">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors group">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
              <span className="font-medium">Back</span>
            </Link>
          </div>

          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Welcome back</h2>
            <p className="text-base text-text-secondary mt-2.5 leading-relaxed">
              Continue your personalized academic curriculum and synthesis notebook.
            </p>
          </div>

          {/* Error message */}
          {status === 'error' && (
            <div className="mb-8 p-4 rounded-lg bg-error-container text-error-clr border border-error-clr/30 flex items-start gap-3 transition-all">
              <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">error</span>
              <div className="text-sm leading-relaxed">
                <strong className="font-semibold block mb-0.5">Authentication failed</strong>
                {errorMessage || 'Invalid email or password. Please verify your credentials.'}
              </div>
            </div>
          )}

          {/* LOGIN SUCCESS TRANSITION */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-8 animate-in fade-in duration-700 slide-in-from-bottom-4">
               {/* Minimal trajectory animation */}
               <div className="flex items-center gap-3 text-copper">
                 <div className="w-2 h-2 rounded-full bg-copper animate-pulse" style={{ animationDuration: '1.5s' }}></div>
                 <div className="w-10 h-[1px] bg-copper/30"></div>
                 <div className="w-2 h-2 rounded-full bg-copper animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1.5s' }}></div>
                 <div className="w-10 h-[1px] bg-copper/30"></div>
                 <div className="w-2 h-2 rounded-full bg-copper animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1.5s' }}></div>
               </div>
               
               <div className="text-center space-y-2">
                 <h3 className="text-xl font-semibold text-text-primary tracking-tight">Preparing your learning space...</h3>
                 <p className="text-sm text-text-secondary">Synthesizing recent notes and active recalls.</p>
               </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-text-primary" htmlFor="emailInput">Email address</label>
                <div className="relative">
                  <input
                    id="emailInput"
                    type="email"
                    required
                    value={email}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('none')}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') { setStatus('default'); setErrorMessage(''); }
                    }}
                    placeholder="name@institution.edu"
                    autoComplete="email"
                    className="w-full h-12 px-4 pr-10 rounded-lg bg-surface-card text-text-primary text-base placeholder:text-text-secondary/50 border border-input-border transition-all duration-300 outline-none focus:border-copper/60 focus:ring-1 focus:ring-copper/60 shadow-sm"
                  />
                  <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-[18px] text-text-secondary/50 pointer-events-none transition-colors duration-300">
                    alternate_email
                  </span>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-text-primary" htmlFor="passwordInput">Password</label>
                  <a className="text-xs text-copper hover:text-copper-hover font-semibold hover:underline transition-colors" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    id="passwordInput"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('none')}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (status === 'error') { setStatus('default'); setErrorMessage(''); }
                    }}
                    placeholder="Enter your security phrase"
                    autoComplete="current-password"
                    className="w-full h-12 px-4 pr-12 rounded-lg bg-surface-card text-text-primary text-base placeholder:text-text-secondary/50 border border-input-border transition-all duration-300 outline-none focus:border-copper/60 focus:ring-1 focus:ring-copper/60 shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    className="absolute right-2 top-2 h-8 w-8 flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-subtle transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-3 cursor-pointer select-none group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4.5 h-4.5 rounded border-input-border text-copper focus:ring-copper/20 accent-copper cursor-pointer transition-colors"
                    />
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">Keep me signed in on this device</span>
                </label>
              </div>

              {/* 10. LOGIN BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative w-full h-12 px-6 rounded-lg bg-primary-navy text-white text-[15px] font-semibold hover:bg-[#314D5E] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer disabled:opacity-80 overflow-hidden"
                >
                  {/* Subtle copper edge highlight on hover */}
                  <div className="absolute inset-0 border border-copper/0 group-hover:border-copper/40 rounded-lg transition-colors duration-300"></div>
                  
                  <span className="relative z-10">{status === 'loading' ? 'Authenticating...' : 'Continue learning'}</span>
                  
                  {status !== 'loading' ? (
                    <span className="material-symbols-outlined text-[18px] relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5">arrow_forward</span>
                  ) : (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                  )}
                </button>
              </div>
            </form>
          )}

          {status !== 'success' && (
            <div className="animate-in fade-in duration-500">
              {/* Divider */}
              <div className="relative my-8 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border-subtle"></div></div>
                <span className="relative px-4 bg-page-bg text-xs text-text-secondary uppercase tracking-widest font-semibold">OR</span>
              </div>

              {/* Google button */}
              <button type="button" onClick={handleGoogleLogin} className="w-full h-12 px-4 rounded-lg bg-surface-card text-text-primary border border-input-border hover:bg-surface-subtle transition-all duration-300 flex items-center justify-center gap-3 text-[15px] font-semibold shadow-sm hover:shadow">
                <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24">
                  <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" fill="#4285F4"/>
                  <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853"/>
                  <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z" fill="#FBBC05"/>
                  <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"/>
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Register link */}
              <p className="text-sm text-text-secondary text-center mt-8">
                Don't have an account?{' '}
                <Link to="/register" className="font-semibold text-copper hover:text-copper-hover underline underline-offset-4 decoration-copper/30 hover:decoration-copper transition-all duration-300">
                  Create an account
                </Link>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};