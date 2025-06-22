import { motion } from "framer-motion";
import { Bot, Phone, MessageSquare, Calendar, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, slideInRight, staggerContainer } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

export function SolutionSection() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Call Handling",
      description: "Never miss another call. Our AI voice agents answer every call, even during peak hours and after business hours."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically schedule, reschedule, and confirm appointments while checking real-time availability."
    },
    {
      icon: MessageSquare,
      title: "Instant FAQ Responses",
      description: "Provide immediate answers to common patient questions about services, insurance, and procedures."
    },
    {
      icon: Bot,
      title: "Lead Qualification",
      description: "Qualify potential patients, collect essential information, and route high-value leads to your team."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Built with healthcare privacy requirements in mind, ensuring all patient communications are secure."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Works with your existing practice management software, CRM, and communication systems."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
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
              Our
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Tailored Solution </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We design and build custom AI voice agents specifically for your practice's unique workflows and patient needs. Each solution is tailored to integrate seamlessly with your existing systems and processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={slideInRight} className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Patient Calls Your Practice</h4>
                      <p className="text-slate-300">Your AI voice agent answers instantly, greeting patients with your custom script and brand voice.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Intelligent Conversation</h4>
                      <p className="text-slate-300">The AI understands natural language, answers questions, and collects necessary information from patients.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Action & Integration</h4>
                      <p className="text-slate-300">Books appointments, updates your system, and seamlessly transfers complex cases to your staff when needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-600/20">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Patient Communication?
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                See how our AI voice agents can reduce your administrative burden and improve patient satisfaction.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => scrollToElement('contact')}
              >
                Get Your Free Demo
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}