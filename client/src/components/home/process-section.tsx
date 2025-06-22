import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket, BarChart3, ArrowRight } from "lucide-react";
import { fadeIn, slideInUp, staggerContainer } from "@/lib/animations";

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description: "We analyze your practice's specific needs, call volume, and current pain points to design the perfect solution.",
      duration: "30 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Custom Design & Development",
      description: "We design and build your bespoke AI voice agent using industry-leading platforms, tailored to your practice's specific terminology, workflows, and brand voice.",
      duration: "Quick turnaround",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Seamless Deployment",
      description: "We integrate with your existing systems and phone lines, ensuring zero disruption to your operations.",
      duration: "Rapid deployment",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Ongoing Optimization",
      description: "Continuous monitoring, performance analysis, and improvements to maximize efficiency and patient satisfaction.",
      duration: "Ongoing",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
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
              How We Work:
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Our Agency Process </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From initial consultation to ongoing optimization, we partner with you to deliver custom AI voice agent solutions that transform your practice operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={slideInUp}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${step.color} p-1 rounded-2xl`}>
                  <div className="bg-slate-900 rounded-2xl p-8 h-full">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="mt-4 text-center">
                          <span className="text-2xl font-bold text-white">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-blue-400 font-medium">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Fast Implementation</h4>
              <p className="text-slate-300 mb-4">Get your AI voice agent up and running quickly, not months.</p>
              <div className="text-3xl font-bold text-blue-400">Rapid setup</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Zero Downtime</h4>
              <p className="text-slate-300 mb-4">Seamless integration with your existing systems without disrupting operations.</p>
              <div className="text-3xl font-bold text-green-400">0% downtime</div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Dedicated Support</h4>
              <p className="text-slate-300 mb-4">Ongoing optimization and support to ensure peak performance.</p>
              <div className="text-3xl font-bold text-purple-400">Full support</div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}