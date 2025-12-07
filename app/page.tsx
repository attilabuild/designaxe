import Hero from "@/components/ui/neural-network-hero";
import Navigation from "@/components/ui/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero 
        title="Design That Hooks. Code That Delivers."
        description="I'm Attila Build, founder of Designaxe. I help founders, creators, and businesses turn ideas into clean, fast, and high-impact digital products. From brand identity to complete web and app development, our process is built for speed, clarity, and exceptional results."
        badgeText="Built by Attila Build"
        badgeLabel="New"
        ctaButtons={[
          { text: "Start Your Project", href: "#contact", primary: true },
          { text: "View Portfolio", href: "#our-work" }
        ]}
        microDetails={["Fast delivery", "Top-tier design", "Direct collaboration"]}
      />

      {/* Trust Strip */}
      <section className="bg-black py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <p className="text-center text-sm font-light text-white/60 tracking-tight">
            Trusted by founders, indie developers, and digital product teams across Europe and the US.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section id="features" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
              Designaxe builds digital products that convert
            </h2>
            <p className="text-lg font-light leading-relaxed text-white/75 mb-4">
              We turn concepts into refined, functional, and visually coherent experiences.
            </p>
            <p className="text-lg font-light leading-relaxed text-white/75">
              Everything we build is optimized for clarity, performance, and long-term scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Visual Identity</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Minimal, precise, modern brand systems built for trust and recognition.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Custom-built websites in Next.js, React, or WordPress, delivered fast and built to scale.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App & SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                From MVPs to full features: clean interfaces, fast architecture, and smooth UX.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Marketing & Conversion Optimization</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                High-performance landing pages, funnels, and digital asset creation designed to convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Designaxe Process */}
      <section id="services" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-6">
              Your Vision, Our System
            </h2>
            <p className="text-lg font-light leading-relaxed text-black/70">
              Our production system is engineered for clarity and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Fast Delivery</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed mb-2">
                Most websites go live within a week.
              </p>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Apps and MVPs are delivered with rapid iteration cycles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Top-Tier Design</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Every page, component, and interaction is crafted with purpose, precision, and minimal noise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Unlimited Revisions</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed mb-2">
                We iterate until it aligns with your vision.
              </p>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                No limits. No unnecessary friction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Direct Collaboration with Attila</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                You work directly with the founder — no layers, no confusion, no delays.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#consultation"
              className="inline-block px-6 py-3 rounded-full bg-black text-white text-sm font-light tracking-tight hover:bg-black/90 transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section id="about" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
                Meet Attila Build
              </h2>
              <p className="text-lg font-light text-white/75 mb-4">
                Founder & Lead Developer of Designaxe
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I design, build, and launch digital products with a focus on clarity and speed. My work spans SaaS platforms, productivity tools, mobile experiences, and consumer-focused brands.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                Over the past years, I&apos;ve built products used across Europe and the US, including PureResist, VibeGrower, DebateVote, and multiple commercial websites and apps for small and mid-size businesses.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-8">
                My philosophy is simple:
              </p>
              <p className="text-lg font-light text-white leading-relaxed mb-8 italic">
                Remove the unnecessary. Build what matters. Ship fast. Iterate with precision.
              </p>
              <a 
                href="#contact"
                className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light tracking-tight"
              >
                Work With Us
              </a>
            </div>
            <div className="relative aspect-4/5 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              {/* Placeholder for portrait photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/40 text-sm font-light">Portrait Photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="our-work" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-4">
            Our Work
          </h2>
          <p className="text-lg font-light text-black/70 mb-12">
            A curated selection of projects, covering apps, SaaS tools, and modern websites.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">PureResist Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">PureResist</h3>
                <p className="text-sm font-light text-black/70 mb-4">
                  A digital self-improvement app helping users break addiction.
                </p>
                <p className="text-xs font-light text-black/60">
                  App Development • Branding • Marketing
                </p>
              </div>
            </div>

            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">VibeGrower Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">VibeGrower</h3>
                <p className="text-sm font-light text-black/70 mb-4">
                  A marketing tool for indie developers to scale their apps efficiently.
                </p>
                <p className="text-xs font-light text-black/60">
                  Web Design • Marketing • SaaS Architecture
                </p>
              </div>
            </div>

            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">ABCKocka Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">ABCKocka</h3>
                <p className="text-sm font-light text-black/70 mb-4">
                  An e-commerce toy store based in Serbia focused on trust and simplicity.
                </p>
                <p className="text-xs font-light text-black/60">
                  E-Commerce • WordPress • Branding
                </p>
              </div>
            </div>

            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">DebaterVote Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">DebaterVote</h3>
                <p className="text-sm font-light text-black/70 mb-4">
                  A structured debate platform for voting and argument ranking.
                </p>
                <p className="text-xs font-light text-black/60">
                  Web App • MERN Stack • UX Architecture
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#our-work"
              className="inline-block px-6 py-3 rounded-full border border-black/20 bg-black/5 hover:bg-black/10 transition-colors text-black text-sm font-light tracking-tight"
            >
              See More Projects
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-4">
            Services
          </h2>
          <p className="text-lg font-light text-white/75 mb-12">
            All services are tailored to founders, startups, creators, and businesses seeking speed and clarity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Identity Design</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Logo, color systems, typography, brand guidelines, and strategic identity.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Custom-built websites in Next.js, React, Vite, WordPress, or Shopify.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Native-feeling, fast, and scalable apps built with modern JavaScript stacks.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Architecture, dashboards, authentication, subscription systems, databases, and deployment.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Maintenance & Support</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Ongoing updates, performance improvements, and monthly development support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Model */}
      <section id="subscription" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-4">
            Monthly Subscription
          </h2>
          <p className="text-lg font-light text-black/70 mb-12">
            For founders or teams needing continuous development and design.
          </p>

          <div className="border border-black/10 rounded-2xl p-12 bg-white mb-8">
            <div className="mb-8">
              <p className="text-3xl font-light text-black mb-2">One monthly price.</p>
              <p className="text-3xl font-light text-black mb-2">Unlimited tasks.</p>
              <p className="text-3xl font-light text-black">Direct access to Attila.</p>
            </div>

            <div className="text-left max-w-md mx-auto space-y-4 mb-8">
              <p className="text-base font-light text-black/70">What&apos;s included:</p>
              <ul className="space-y-2 text-sm font-light text-black/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Web design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>App updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>UX improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Feature development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Consulting and strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Unlimited revisions</span>
                </li>
              </ul>
            </div>

            <p className="text-sm font-light text-black/60 mb-8">
              No contracts. Cancel anytime.
            </p>

            <a 
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-black text-white text-base font-light tracking-tight hover:bg-black/90 transition-colors"
            >
              Join the Subscription
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-12 text-center">
            Let&apos;s Build Something Meaningful
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-light text-white/70 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-light text-white/70 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-light text-white/70 mb-2">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm font-light text-white/70 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
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
              <label htmlFor="message" className="block text-sm font-light text-white/70 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-light resize-none"
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
              <label htmlFor="terms" className="text-sm font-light text-white/70">
                I agree to the Terms of Service
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors"
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
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">DESIGNAXE</h3>
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
                <a href="#subscription" className="hover:text-white/80 transition-colors">Subscription</a>
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
