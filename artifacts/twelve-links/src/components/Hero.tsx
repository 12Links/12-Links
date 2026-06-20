import { motion } from "framer-motion";
import { ArrowRight, Code2, MessageSquare, BarChart3, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import AfricanFlags from "./AfricanFlags";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0F] z-0" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00FF88]/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* ── HERO: two-column split ── */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-8 pt-10 pb-12">

        {/* LEFT */}
        <motion.div
          className="flex-1 flex flex-col justify-center pr-8 max-w-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Delivering<br />
            <span className="text-[#00FF88]" style={{ textShadow: "0 0 40px rgba(0,255,136,0.4)" }}>
              Africa's
            </span>
            <br />
            Tech Future
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
            12 Links builds custom AI and software solutions for African businesses — student-led, production-grade, and engineered to solve real industry problems end-to-end.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00FF88] text-black font-bold px-7 py-3.5 rounded-lg hover:bg-[#00FF88]/90 transition-all text-sm uppercase tracking-wider group"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-bold px-7 py-3.5 rounded-lg hover:border-white/50 hover:bg-white/5 transition-all text-sm uppercase tracking-wider"
            >
              View Our Work
            </Link>
          </div>

          {/* Modern metric pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { value: "7", label: "Student Builders" },
              { value: "5+", label: "Industries Served" },
              { value: "E2E", label: "End-to-End Delivery" },
            ].map((m) => (
              <div key={m.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-2.5">
                <span className="text-[#00FF88] font-black text-lg leading-none">{m.value}</span>
                <span className="text-gray-400 text-xs font-medium">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — flag network */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AfricanFlags />
        </motion.div>
      </div>

      {/* ── POST-HERO section ── */}
      <div className="relative z-10 w-full border-t border-white/5 bg-[#0A0A0F] pb-20 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tagline */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Delivering technology solutions that drive real business outcomes.
            </h2>
            <p className="text-gray-400 text-lg">
              We work closely with clients to understand their challenges, then build, deploy and support tailored AI and software solutions — from concept to production.
            </p>
          </div>

          {/* 3-step client process */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: MessageSquare,
                title: "Share Your Vision",
                desc: "Tell us about your challenge, industry, and goals. We listen carefully and define the scope together with you."
              },
              {
                icon: Code2,
                title: "We Build the Solution",
                desc: "Our verified engineering team designs, builds, and rigorously tests your custom solution using milestone-based delivery."
              },
              {
                icon: BarChart3,
                title: "Measure Real Impact",
                desc: "We track ROI, performance metrics, and outcomes — delivering dashboards and reports so you can see exactly what you're getting."
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/[0.03] border border-white/8 p-8 rounded-xl relative overflow-hidden group hover:border-[#00FF88]/20 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/5 rounded-full blur-3xl group-hover:bg-[#00FF88]/10 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div className="text-[#00FF88] font-mono text-xs font-bold tracking-widest mb-3">0{i + 1}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Two cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#00FF88]/30 bg-white/[0.03] p-8 rounded-xl hover:border-[#00FF88]/60 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-1">Built Around Your Goals</h3>
              <p className="text-[#00FF88] uppercase tracking-wider text-sm mb-5">Client-First Delivery</p>
              <p className="text-gray-400 mb-6">
                Every engagement starts with understanding your business — not picking a template. We scope, plan, and deliver around your specific outcomes.
              </p>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> Dedicated project lead from day one</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> Milestone-based delivery with approval gates</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" /> Post-delivery support and performance audit</li>
              </ul>
            </div>
            <div className="border border-white/10 hover:border-[#FFB800]/50 transition-colors bg-white/[0.03] p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-1">Enterprise Ready</h3>
              <p className="text-[#FFB800] uppercase tracking-wider text-sm mb-5">Scalable from Day One</p>
              <p className="text-gray-400 mb-6">
                Pre-vetted engineering teams, industry-specific blueprints, end-to-end delivery, and live performance dashboards for every project.
              </p>
              <ul className="space-y-3 font-mono text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> Custom AI & software built for your sector</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> End-to-end delivery with full documentation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" /> Live ROI & KPI dashboards included</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
