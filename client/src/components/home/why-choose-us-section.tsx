import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Zap, HeartHandshake } from "lucide-react";
import { fadeIn, slideInUp, staggerContainer } from "@/lib/animations";

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Custom Healthcare Solutions",
      description: "We specialize in designing bespoke AI voice agents for healthcare practices, understanding HIPAA requirements, patient communication needs, and industry-specific workflows.",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "Expert Development Team",
      description: "Our experienced team leverages industry-leading platforms to build custom AI voice agent solutions with measurable improvements in efficiency and patient satisfaction.",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Full-Service Partnership",
      description: "From design to deployment to ongoing optimization, we're your dedicated AI voice agent agency providing continuous support and refinement.",
      color: "text-purple-400"
    },
    {
      icon: Clock,
      title: "Fast Implementation",
      description: "Unlike generic solutions that take months to deploy, our healthcare-focused approach gets you up and running in just 2-3 weeks.",
      color: "text-orange-400"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Our AI voice agents work with your existing practice management software, phone systems, and workflows without disruption.",
      color: "text-cyan-400"
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centric Design",
      description: "Every interaction is designed to enhance the patient experience while reducing administrative burden on your staff.",
      color: "text-pink-400"
    }
  ];

  const certifications = [
    { name: "HIPAA Compliant", description: "Fully compliant with healthcare privacy regulations" },
    { name: "SOC 2 Type II", description: "Rigorous security and availability standards" },
    { name: "ISO 27001", description: "International information security management" },
    { name: "Healthcare Focus", description: "Exclusively serving healthcare practices since 2019" }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-900">
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
              Why Partner
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> With Us </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're your dedicated AI voice agent agency, specializing in custom healthcare solutions. Our expertise in tailored development and ongoing partnership ensures your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={slideInUp}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-slate-700/50 group-hover:bg-slate-700 transition-colors ${reason.color}`}>
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeIn} className="mb-16">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Trusted by Healthcare Professionals
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                    <p className="text-sm text-slate-300">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-400/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Commitment to Excellence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">🏥</div>
                  <div className="text-slate-300 font-medium">Healthcare Focus</div>
                  <div className="text-slate-400 text-sm mt-1">Specialized in medical practices</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">🔧</div>
                  <div className="text-slate-300 font-medium">Custom Solutions</div>
                  <div className="text-slate-400 text-sm mt-1">Tailored to your needs</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">🛡️</div>
                  <div className="text-slate-300 font-medium">HIPAA Compliant</div>
                  <div className="text-slate-400 text-sm mt-1">Secure patient data handling</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">🤝</div>
                  <div className="text-slate-300 font-medium">Full Partnership</div>
                  <div className="text-slate-400 text-sm mt-1">From design to support</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-16">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                What Sets Us Apart
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Industry Specialization</h4>
                    <p className="text-slate-300 text-sm">We only serve healthcare practices, making us experts in your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Custom Training</h4>
                    <p className="text-slate-300 text-sm">Each AI is trained on your specific practice terminology and workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Ongoing Partnership</h4>
                    <p className="text-slate-300 text-sm">We're committed to your long-term success with continuous optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Proven ROI</h4>
                    <p className="text-slate-300 text-sm">Our clients see measurable improvements in efficiency and patient satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}