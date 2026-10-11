import React, { useState } from "react";
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
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
      { label: "Haptic pulse / Vibration / Chime", desc: "Device mainboard is alive, display or backlight is severed.", score: 30, icon: "" },
      { label: "Gets warm around camera or battery", desc: "Power IC is drawing current, short circuit is localized.", score: 25, icon: "" },
      { label: "Faint charging LED or backlight glow", desc: "Logic board boots but GPU/OLED ribbon failed.", score: 28, icon: "" },
      { label: "Zero response, completely cold & dead", desc: "Primary VDD rail shorted or battery at 0V lock.", score: 18, icon: "️" },
    ],
  },
  {
    id: 2,
    title: "What triggered the device failure?",
    subtitle: "Understanding the trauma vector helps pinpoint damaged components.",
    options: [
      { label: "Hard drop onto asphalt / concrete", desc: "Structural impact on glass, frame, or solder joints.", score: 25, icon: "" },
      { label: "Liquid immersion (water, pool)", desc: "Electrolytic corrosion requires ultrasonic lab wash.", score: 22, icon: "" },
      { label: "Died overnight / Stuck in bootloop", desc: "NAND memory corruption or power management failure.", score: 27, icon: "" },
      { label: "Severe battery swelling", desc: "Chemical battery degradation requiring urgent replacement.", score: 29, icon: "" },
    ],
  },
  {
    id: 3,
    title: "What is your main priority with this device?",
    subtitle: "We will customize our recommendation to your goal.",
    options: [
      { label: "Revive phone and keep all data", desc: "Lab repair prioritized with 100% data preservation.", score: 30, icon: "" },
      { label: "Cash out and sell it as-is", desc: "Instant buyout offer with free prepaid mailer.", score: 25, icon: "" },
      { label: "Trade it in towards a new phone", desc: "Apply full trade-in value as instant store credit.", score: 28, icon: "️" },
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
    <div className="relative rounded-[32px] bg-white p-6 md:p-10 border border-line shadow-sm overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-[13px] font-bold text-brand border border-brand-200">
            <Cpu className="h-4 w-4" />
            Dead Phone Diagnostic
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-ink">Repair Troubleshooter</h3>
          <p className="text-[15px] text-muted mt-2 max-w-xl leading-relaxed">
            Answer 3 quick sensory questions to calculate your device's repair probability.
          </p>
        </div>

        {!isFinished && (
          <div className="flex items-center gap-2 text-[14px] font-bold text-muted">
            Step <span className="text-brand">{currentStep + 1}</span> of {QUESTIONS.length}
          </div>
        )}
      </div>

      <div className="relative z-10 mt-8">
        {!isFinished ? (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="h-2 w-full rounded-full bg-line overflow-hidden mb-8">
              <div
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                className="h-full bg-brand transition-all duration-500 ease-out"
              />
            </div>

            <div className="mb-8">
              <h4 className="text-2xl sm:text-3xl font-black text-ink leading-tight">{currentQ.title}</h4>
              <p className="text-[15px] text-muted mt-2">{currentQ.subtitle}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(opt.score)}
                  className="group flex flex-col justify-between text-left p-5 rounded-2xl bg-white border border-line hover:border-brand transition focus-ring hover:bg-brand-50 min-h-[120px]"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{opt.icon}</span>
                      <span className="text-[15px] font-bold text-ink">{opt.label}</span>
                    </div>
                    <p className="text-[13px] text-muted leading-relaxed">{opt.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12 items-start animate-in zoom-in-95 duration-500">
            <div className="lg:col-span-7 rounded-3xl bg-background p-8 border border-line shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[13px] uppercase tracking-wider text-brand font-bold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Diagnostic Complete
                </span>
                <button
                  type="button"
                  onClick={resetWizard}
                  className="flex items-center gap-2 text-[13px] font-bold text-muted hover:text-ink transition focus-ring py-2 px-3 rounded-lg"
                >
                  <RotateCcw className="h-4 w-4" /> Retest
                </button>
              </div>

              <div>
                <h4 className="text-3xl font-black text-ink mb-2">High Repair Feasibility</h4>
                <p className="text-[15px] text-muted leading-relaxed">
                  Based on your symptoms, your logic board and NAND storage chip are likely intact. The failure is isolated to power/display circuitry.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white border border-line p-5 text-center shadow-sm">
                  <span className="text-[13px] font-bold text-muted uppercase">Probability</span>
                  <span className="text-4xl font-black text-brand mt-2 block">{revivalProbability}%</span>
                </div>
                <div className="rounded-2xl bg-white border border-line p-5 text-center shadow-sm">
                  <span className="text-[13px] font-bold text-muted uppercase">Data Safe</span>
                  <span className="text-4xl font-black text-brand mt-2 block">100%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-[13px] text-ink font-bold uppercase tracking-wider pl-2">Recommended Paths:</span>

              <a href="#repair" className="group flex items-center justify-between p-5 rounded-2xl bg-brand text-white transition focus-ring shadow-md hover:bg-brand-600">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="text-[16px] font-bold">Book Doorstep Repair</h5>
                    <p className="text-[13px] opacity-80 mt-1">Tested Parts & 90-Day Warranty</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition" />
              </a>

              <a href="#sell" className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-line hover:border-ink transition focus-ring">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center border border-line">
                    <IndianRupee className="h-6 w-6 text-ink" />
                  </div>
                  <div>
                    <h5 className="text-[16px] font-bold text-ink">Cash Out As-Is</h5>
                    <p className="text-[13px] text-muted mt-1">Ask about pickup availability</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted group-hover:translate-x-1 group-hover:text-ink transition" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
