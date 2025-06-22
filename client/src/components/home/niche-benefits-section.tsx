import { motion } from "framer-motion";
import { Stethoscope, Heart, Scale, Clock, Users, TrendingUp, Shield, Phone } from "lucide-react";
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export function NicheBenefitsSection() {
  const niches = [
    {
      icon: Stethoscope,
      title: "Dental Practices",
      color: "from-blue-500 to-cyan-500",
      benefits: [
        {
          icon: Clock,
          title: "Automated Recall Reminders",
          description: "Never lose track of patient cleanings and check-ups with intelligent scheduling reminders."
        },
        {
          icon: Phone,
          title: "Billing Inquiry Management",
          description: "Handle insurance questions and payment inquiries without tying up your front desk staff."
        },
        {
          icon: Users,
          title: "Emergency Triage",
          description: "Assess dental emergencies and route urgent cases appropriately while scheduling routine care."
        }
      ]
    },
    {
      icon: Heart,
      title: "Concierge & Primary Care",
      color: "from-green-500 to-emerald-500",
      benefits: [
        {
          icon: Clock,
          title: "24/7 Patient Access",
          description: "Meet high-touch service expectations with round-the-clock availability for your premium patients."
        },
        {
          icon: Shield,
          title: "Membership Inquiries",
          description: "Handle membership questions, benefits explanations, and new patient onboarding seamlessly."
        },
        {
          icon: TrendingUp,
          title: "Concierge Service Coordination",
          description: "Manage appointment scheduling, prescription refill requests, and care coordination efficiently."
        }
      ]
    },
    {
      icon: Scale,
      title: "Weight Loss Clinics",
      color: "from-purple-500 to-pink-500",
      benefits: [
        {
          icon: Users,
          title: "Patient Adherence Support",
          description: "Provide ongoing motivation and check-ins to support long-term weight loss success."
        },
        {
          icon: Clock,
          title: "Coaching Session Management",
          description: "Schedule and manage nutrition consultations, fitness sessions, and progress check-ins."
        },
        {
          icon: TrendingUp,
          title: "Progress Tracking Calls",
          description: "Automate follow-up calls to track patient progress and identify those needing additional support."
        }
      ]
    }
  ];

  return (
    <section id="niches" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Specialized Solutions for
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent"> Healthcare Practices </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI voice agents are specifically trained for your practice type, understanding the unique needs and terminology of your specialty.
            </p>
          </motion.div>

          <div className="space-y-16">
            {niches.map((niche, nicheIndex) => (
              <motion.div
                key={nicheIndex}
                variants={nicheIndex % 2 === 0 ? slideInLeft : slideInRight}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={nicheIndex % 2 === 0 ? "order-1" : "order-2"}>
                  <div className={`bg-gradient-to-br ${niche.color} p-1 rounded-2xl`}>
                    <div className="bg-slate-900 rounded-2xl p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${niche.color}`}>
                          <niche.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                          {niche.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        Tailored AI voice solutions that understand the specific workflows, terminology, and patient needs of your practice specialty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={nicheIndex % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="space-y-6">
                    {niche.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${niche.color}`}>
                            <benefit.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-3">
                              {benefit.title}
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="mt-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Common Benefits Across All Specialties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="text-slate-300">Reduction in missed calls</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-slate-300">Less administrative work</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-slate-300">Increase in patient satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-slate-300">Patient availability</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}