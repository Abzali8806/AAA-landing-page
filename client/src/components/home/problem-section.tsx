import { motion } from "framer-motion";
import { AlertTriangle, Clock, Phone, Users, DollarSign, HeadphonesIcon } from "lucide-react";
import { fadeIn, slideInLeft, staggerContainer } from "@/lib/animations";

export function ProblemSection() {
  const problems = [
    {
      icon: Phone,
      title: "Missed Calls & Lost Revenue",
      description: "Every missed call is a potential patient walking away to your competition. High call volumes overwhelm your staff.",
      color: "text-red-400"
    },
    {
      icon: Clock,
      title: "Administrative Burden",
      description: "Staff spend hours on repetitive tasks like appointment scheduling, confirmations, and answering the same questions repeatedly.",
      color: "text-orange-400"
    },
    {
      icon: Users,
      title: "Staff Burnout",
      description: "Your team is stretched thin managing patient communications, leading to decreased satisfaction and higher turnover.",
      color: "text-yellow-400"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Patient Expectations",
      description: "Patients expect immediate responses and round-the-clock availability, especially in concierge and urgent care settings.",
      color: "text-blue-400"
    },
    {
      icon: DollarSign,
      title: "Inefficient Operations",
      description: "Manual processes lead to scheduling conflicts, no-shows, and reduced capacity utilization affecting your bottom line.",
      color: "text-green-400"
    },
    {
      icon: AlertTriangle,
      title: "Compliance Concerns",
      description: "Managing HIPAA-compliant patient communications while maintaining efficiency is increasingly challenging.",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="problems" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Are These Challenges
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Holding Back </span>
              Your Practice?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Healthcare practices across dentistry, concierge care, and weight loss clinics face similar operational challenges that impact both patient satisfaction and profitability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={slideInLeft}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700/50 ${problem.color}`}>
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Cost of Inaction
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">30%</div>
                  <div className="text-slate-300">Revenue loss from missed opportunities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">40hrs</div>
                  <div className="text-slate-300">Weekly staff time on repetitive tasks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">60%</div>
                  <div className="text-slate-300">Of practices struggle with patient communication</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}