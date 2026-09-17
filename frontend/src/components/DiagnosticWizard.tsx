import React, { useState } from "react";
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  ShieldAlert,
  Zap,
  IndianRupee,
  Wrench,
} from "lucide-react";

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: { label: string; desc: string; score: number; icon: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "What happens when plugged into a fast charger?",
    subtitle: "Check for subtle sensory indicators on your device.",
    options: [
      {
        label: "Haptic pulse / Vibration / Chime",
        desc: "Device mainboard is alive, display or backlight is severed.",
        score: 30,
        icon: "⚡",
      },
      {
        label: "Gets warm around camera or battery",
        desc: "Power IC is drawing current, short circuit is localized.",
        score: 25,
        icon: "🔥",
      },
      {
        label: "Faint charging LED or backlight glow",
        desc: "Logic board boots but GPU/OLED ribbon failed.",
        score: 28,
        icon: "💡",
      },
      {
        label: "Zero response, completely cold & dead",
        desc: "Primary VDD rail shorted or battery at 0V protection lock.",
        score: 18,
        icon: "❄️",
      },
    ],
  },
  {
    id: 2,
    title: "What triggered the device failure?",
    subtitle: "Understanding the trauma vector helps pinpoint damaged components.",
    options: [
      {
        label: "Hard drop onto asphalt / concrete",
        desc: "Structural impact on glass, frame, or solder joints.",
        score: 25,
        icon: "💥",
      },
      {
        label: "Liquid immersion (water, coffee, pool)",
        desc: "Electrolytic corrosion requires ultrasonic cleanroom wash.",
        score: 22,
        icon: "💧",
      },
      {
        label: "Died overnight / Stuck in bootloop",
        desc: "NAND memory corruption or power management IC failure.",
        score: 27,
        icon: "🔄",
      },
      {
        label: "Severe battery swelling / rear glass popped",
        desc: "Chemical battery degradation requiring urgent safe replacement.",
        score: 29,
        icon: "🔋",
      },
    ],
  },
  {
    id: 3,
    title: "What is your main priority with this device?",
    subtitle: "We will customize our recommendation to your goal.",
    options: [
      {
        label: "Revive phone and keep all photos / data",
        desc: "Cleanroom repair prioritized with 100% data preservation.",
        score: 30,
        icon: "📸",
      },
      {
        label: "Cash out and sell it as-is for maximum payout",
        desc: "Instant buyout offer with free prepaid mailer.",
        score: 25,
        icon: "💵",
      },
      {
        label: "Trade it in towards a pristine certified pre-loved phone",
        desc: "Apply full trade-in value as instant store credit.",
        score: 28,
        icon: "🔄",
      },
    ],
  },
];

export function DiagnosticWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetWizard = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const revivalProbability = Math.min(98, Math.max(78, Math.round((totalScore / 88) * 100)));

  const currentQ: Question = QUESTIONS[currentStep] ?? QUESTIONS[0]!;

  return (
    <div className="relative rounded-3xl glass-card p-6 md:p-10 overflow-hidden border border-white/15 shadow-2xl">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3.5 py-1 text-xs font-semibold text-gold font-label border border-gold/30">
            <Cpu className="h-3.5 w-3.5" />
            AI Dead-Phone Triage Diagnostic
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 text-white">
            Smart Phone Revival Troubleshooter
          </h3>
          <p className="font-display text-sm text-white/70 mt-1 max-w-xl">
            Answer 3 quick sensory questions to calculate your device's revival
            success probability and instant repair vs buyout value.
          </p>
        </div>

        {/* Step indicator */}
        {!isFinished && (
          <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 border border-white/10 text-xs font-label">
            <span className="text-white/50">Question</span>
            <span className="font-bold text-accent">{currentStep + 1}</span>
            <span className="text-white/50">of {QUESTIONS.length}</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-8">
        {!isFinished ? (
          <div>
            {/* Progress bar */}
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden mb-6">
              <div
                style={{
                  width: `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                }}
                className="h-full bg-gradient-to-r from-brand to-accent transition-all duration-300"
              />
            </div>

            <div className="mb-6">
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                {currentQ.title}
              </h4>
              <p className="font-display text-xs sm:text-sm text-white/60 mt-1">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Options grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(opt.score)}
                  className="group flex flex-col justify-between text-left p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent hover:bg-white/10 transition cursor-pointer shadow-lg hover:scale-[1.01]"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl">{opt.icon}</span>
                      <span className="font-display text-sm font-bold text-white group-hover:text-accent transition">
                        {opt.label}
                      </span>
                    </div>
                    <p className="font-display text-xs text-white/60 leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-label text-accent font-semibold">
                    <span>Select this option</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Triage Diagnostic Result Card */
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Result */}
            <div className="lg:col-span-7 rounded-2xl bg-black/40 p-6 border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  Diagnostic Complete
                </span>
                <button
                  type="button"
                  onClick={resetWizard}
                  className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition font-label cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Retest Device
                </button>
              </div>

              <div>
                <h4 className="font-display text-2xl font-bold text-white">
                  High Revival Feasibility Confirmed
                </h4>
                <p className="font-display text-xs text-white/70 mt-1">
                  Based on your symptoms, your logic board and NAND storage chip
                  are likely intact. The failure is isolated to power/display
                  circuitry.
                </p>
              </div>

              {/* Score metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <span className="font-label text-xs text-white/60 uppercase block">
                    Revival Probability
                  </span>
                  <span className="font-display text-4xl font-extrabold text-emerald-400 mt-1 block">
                    {revivalProbability}%
                  </span>
                  <span className="font-display text-[11px] text-emerald-400/80">
                    High Success Likelihood
                  </span>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <span className="font-label text-xs text-white/60 uppercase block">
                    Data Preservation
                  </span>
                  <span className="font-display text-4xl font-extrabold text-accent mt-1 block">
                    100%
                  </span>
                  <span className="font-display text-[11px] text-accent/80">
                    Zero Data Erasure Needed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Options */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-ink/90 to-brand/15 p-6 border border-white/15 space-y-4">
              <span className="font-label text-xs text-accent font-bold uppercase tracking-wider">
                Recommended Paths Forward:
              </span>

              {/* Option A: Book Repair */}
              <a
                href="#quote"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-brand border border-white/10 hover:border-brand transition block"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white">
                    <Wrench className="h-5 w-5 text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-bold text-white">
                      Book Same-Day Fix
                    </h5>
                    <p className="font-display text-xs text-white/70">
                      Est. ₹1,499 - ₹2,999 · 45-min cleanroom slot
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition" />
              </a>

              {/* Option B: Sell as-is */}
              <a
                href="#sell"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition block"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white">
                    <IndianRupee className="h-5 w-5 text-gold group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="font-display text-sm font-bold text-white">
                      Cash Out & Sell Dead Phone
                    </h5>
                    <p className="font-display text-xs text-white/70">
                      Get Top Cash Payout · Free Doorstep Pickup
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
