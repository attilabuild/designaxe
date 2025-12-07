import Hero from "@/components/ui/neural-network-hero";
import Navigation from "@/components/ui/navigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero 
        title="Design That Hooks. Code That Delivers."
        description="I'm Attila Build, founder of Designaxe. I help founders, creators, and businesses turn ideas into modern, fast, and conversion-focused digital products. From brand identity to complete websites and applications, every project is built with clarity, precision, and speed."
        badgeText="Built by AttilaBuild"
        badgeLabel=""
        ctaButtons={[
          { text: "Book Your Free Consultation", href: "#consultation", primary: true },
          { text: "View Portfolio", href: "#our-work" }
        ]}
        microDetails={["Fast delivery", "Purposeful design", "Direct collaboration"]}
      />

      {/* Trust Section */}
      <section className="bg-black py-12 px-6 md:px-10 lg:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-light text-white/60 tracking-tight mb-4">
            Trusted by founders, creators, and product teams across Europe and the United States.
          </p>
          <p className="text-base font-light text-white/80 leading-relaxed max-w-3xl mx-auto">
            Designaxe builds digital products that convert, scale, and feel effortless to use.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-black mb-6">
            Everything we build is designed for clarity, performance, and long-term growth.
          </p>
          <p className="text-lg font-light text-black/70 leading-relaxed">
            We take your concept and transform it into a refined, functional, and visually coherent product.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="features" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Visual Identity</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Minimal, modern identity systems designed for trust, recognition, and long-term consistency.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Custom websites in Next.js, React, or WordPress. Fast, structured, SEO-ready, and built to convert.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App & SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                From MVP to full product: clean UI, scalable architecture, and smooth, intuitive user experience.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Digital Strategy & Conversion Optimization</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Landing pages, funnels, UX improvements, and performance-driven assets focused on measurable results.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="#consultation"
              className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light tracking-tight"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="services" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-6">
              Your Vision, Our System
            </h2>
            <p className="text-lg font-light leading-relaxed text-black/70">
              Our production system is built for speed, clarity, and high-quality execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Fast Delivery</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed mb-2">
                Most websites go live within a week.
              </p>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Apps and MVPs are delivered through rapid iteration cycles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Purposeful Design</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Every page, component, and interaction is crafted with intention and minimal noise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Precision in Execution</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed mb-2">
                We refine until the product matches your vision.
              </p>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                No friction. No delays.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Direct Collaboration with Attila</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Work directly with the founder — no layers, no outsourcing, and no miscommunication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me - Consultation Model */}
      <section id="consultation" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6 text-center">
            Work With Me
          </h2>
          <p className="text-lg font-light text-white/75 mb-12 text-center">
            Every project begins with a free consultation designed to give you clarity, direction, and a concrete plan.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm text-center">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Consultation</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                A focused conversation to understand your goals, challenges, timeline, and budget.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm text-center">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Blueprint</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                A clear proposal outlining design direction, technical stack, structure, and timeline.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm text-center">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Build</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Execution with fast delivery, transparent communication, and precise iteration.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Attila Build */}
      <section id="about" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-6">
                About AttilaBuild
              </h2>
              <p className="text-lg font-light text-black/75 mb-4">
                Founder & Lead Developer of Designaxe
              </p>
              <p className="text-base font-light text-black/70 leading-relaxed mb-6">
                I design, build, and launch digital products with a focus on clarity, speed, and strong visual identity. My work spans SaaS platforms, productivity tools, mobile experiences, personal brands, and commercial websites.
              </p>
              <p className="text-base font-light text-black/70 leading-relaxed mb-6">
                Over the years, I&apos;ve built products used across Europe and the United States, including PureResist, VibeGrower, DebateVote, and multiple websites and applications for small and mid-size businesses.
              </p>
              <p className="text-base font-light text-black/70 leading-relaxed mb-4">
                My philosophy is simple.
              </p>
              <p className="text-lg font-light text-black leading-relaxed mb-8 italic">
                Remove the unnecessary. Build what matters. Ship fast. Iterate with precision.
              </p>
              <a 
                href="#contact"
                className="inline-block px-6 py-3 rounded-full border border-black/20 bg-black/5 hover:bg-black/10 transition-colors text-black text-sm font-light tracking-tight"
              >
                Work With Me
              </a>
            </div>
            <div className="relative aspect-4/5 bg-black/5 rounded-2xl border border-black/10 overflow-hidden">
              <Image src="/attilabuild.jpeg" alt="Attila Build" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="our-work" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-4">
            Our Work
          </h2>
          <p className="text-lg font-light text-white/75 mb-12">
            A curated selection of digital products, applications, and modern websites.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <p className="text-white/40 text-sm font-light">PureResist Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">PureResist</h3>
                <p className="text-sm font-light text-white/70 mb-4">
                  A digital self-improvement platform helping users analyze behavior and break addiction.
                </p>
                <p className="text-xs font-light text-white/60">
                  App Development • Branding • UX
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <p className="text-white/40 text-sm font-light">VibeGrower Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">VibeGrower</h3>
                <p className="text-sm font-light text-white/70 mb-4">
                  A marketing tool designed to help indie developers scale their apps efficiently.
                </p>
                <p className="text-xs font-light text-white/60">
                  Web Design • SaaS Architecture • Strategy
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <p className="text-white/40 text-sm font-light">ABCKocka Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">ABCKocka</h3>
                <p className="text-sm font-light text-white/70 mb-4">
                  An e-commerce store focused on reliability, visual clarity, and trust.
                </p>
                <p className="text-xs font-light text-white/60">
                  E-Commerce • WordPress • Branding
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <p className="text-white/40 text-sm font-light">DebateVote Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">DebateVote</h3>
                <p className="text-sm font-light text-white/70 mb-4">
                  A structured debate platform for voting, ranking, and discussion.
                </p>
                <p className="text-xs font-light text-white/60">
                  Web App • Full Stack Development • UX Architecture
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#our-work"
              className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light tracking-tight"
            >
              See More Projects
            </a>
          </div>
        </div>
      </section>

      {/* Services - Full Detail */}
      <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-4">
            Services
          </h2>
          <p className="text-lg font-light text-black/70 mb-12">
            All services are tailored to founders, startups, creators, and businesses seeking speed and clarity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Branding & Identity Design</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Logo systems, color palettes, typography, brand guidelines, and scalable identity systems designed for clarity and recognition.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Modern, responsive, and performance-driven websites built with Next.js, React, Vite, WordPress, or Shopify. Designed for conversion and long-term maintainability.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">App Development</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Native-feeling, fast, and scalable applications built with modern JavaScript stacks. Ideal for founders launching MVPs or growing existing products.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">SaaS Development</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Complete SaaS architecture including authentication, dashboards, payments, databases, and deployment. Built for reliability and growth.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Maintenance & Support</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Ongoing updates, performance enhancements, UX improvements, and monthly development support when needed.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">E-Commerce Development</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Complete online stores built with Shopify, WooCommerce, or custom solutions. Payment integration, inventory management, and conversion-optimized checkout flows.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#consultation"
              className="inline-block px-6 py-3 rounded-full bg-black text-white text-sm font-light tracking-tight hover:bg-black/90 transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-lg font-light text-white/75 mb-8 leading-relaxed">
            Share your idea, timeline, and goals. I&apos;ll review everything and reply within 24 hours.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extralight leading-tight tracking-tight text-black mb-12 text-center">
            Contact
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-light text-black/70 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/5 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30 font-light"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-light text-black/70 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/5 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30 font-light"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-light text-black/70 mb-2">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/5 text-black focus:outline-none focus:ring-2 focus:ring-black/30 font-light"
              >
                <option value="">Select budget range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-3k">$1,000 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k-plus">$5,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-light text-black/70 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/5 text-black focus:outline-none focus:ring-2 focus:ring-black/30 font-light"
              >
                <option value="">Select project type</option>
                <option value="web-design">Web Design</option>
                <option value="app-development">App Development</option>
                <option value="saas">SaaS Development</option>
                <option value="branding">Branding</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-light text-black/70 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-black/10 bg-black/5 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/30 font-light resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm font-light text-black/70">
                I agree to the Terms of Service
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-full bg-black text-white text-base font-light tracking-tight hover:bg-black/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-light text-white mb-2 tracking-tight">DESIGNAXE</h3>
              <p className="text-sm font-light text-white/60 mb-4">
                Founded by AttilaBuild
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
            <div>
              <nav className="flex flex-wrap gap-4 text-sm font-light text-white/60">
                <a href="#features" className="hover:text-white/80 transition-colors">Features</a>
                <a href="#our-work" className="hover:text-white/80 transition-colors">Our Work</a>
                <a href="#services" className="hover:text-white/80 transition-colors">Services</a>
                <a href="#about" className="hover:text-white/80 transition-colors">About</a>
                <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
              </nav>
            </div>
            <div>
              <p className="text-sm font-light text-white/60 mb-4">Subscribe</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm font-light"
                />
                <button className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-sm font-light text-white/60">
              <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            </div>
            <p className="text-sm font-light text-white/60">
              © 2025 Designaxe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
