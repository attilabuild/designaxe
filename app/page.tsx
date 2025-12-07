import Hero from "@/components/ui/neural-network-hero";
import Navigation from "@/components/ui/navigation";
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";
import NewsletterForm from "@/components/ui/newsletter-form";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero 
        title="Design That Hooks, Code That Delivers."
        description="I'm AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn ideas into modern, fast, and conversion-focused digital products. From brand identity to complete websites and applications, every project is built with clarity, precision, and speed."
        badgeText="Built by AttilaBuild"
        badgeLabel=""
        ctaButtons={[
          { text: "Book Your Free Consultation", href: "https://calendly.com/designaxe/30min", primary: true },
          { text: "View Portfolio", href: "#our-work" }
        ]}
        microDetails={[]}
      />

      {/* Social Proof */}
    
      {/* Why Founders Work With Designaxe */}
      <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-black mb-12 text-center">
            Why People Work With Designaxe
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-black/40">•</span>
              <div>
                <h3 className="text-lg font-light text-black mb-2 tracking-tight">Expert collaboration with the founder</h3>
                <p className="text-sm font-light text-black/60 leading-relaxed">Direct access to AttilaBuild: no layers, no outsourcing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-black/40">•</span>
              <div>
                <h3 className="text-lg font-light text-black mb-2 tracking-tight">High-speed execution</h3>
                <p className="text-sm font-light text-black/60 leading-relaxed">Most websites launch within a week. MVPs ship fast.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-black/40">•</span>
              <div>
                <h3 className="text-lg font-light text-black mb-2 tracking-tight">Minimal, timeless design</h3>
                <p className="text-sm font-light text-black/60 leading-relaxed">Every element crafted with intention and purpose.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-black/40">•</span>
              <div>
                <h3 className="text-lg font-light text-black mb-2 tracking-tight">Direct, transparent communication</h3>
                <p className="text-sm font-light text-black/60 leading-relaxed">Clear updates, honest timelines, no surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="features" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Visual Identity</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Identity systems that communicate trust, consistency, and long-term recognition.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Custom websites built with Next.js, React, or WordPress: structured and conversion-driven.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App & SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Clean UI, scalable architecture, and intuitive user experience from MVP to full product.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Digital Strategy & Conversion</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Landing pages, funnels, and UX improvements focused on measurable results.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://calendly.com/designaxe/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light tracking-tight"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Process Section - Visual */}
      <section id="services" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-6">
              Your Vision, Our System
            </h2>
            <p className="text-lg font-light leading-relaxed text-black/70">
              A structured approach designed for clarity and execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <div className="text-3xl font-light text-black/20 mb-4">01</div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Consultation</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Clarity on goals, scope, and timeline through focused conversation.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <div className="text-3xl font-light text-black/20 mb-4">02</div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Blueprint</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Structure, sitemap, architecture, and wireframes mapped out clearly.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <div className="text-3xl font-light text-black/20 mb-4">03</div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Build</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Design, development, and iteration with transparent communication.
              </p>
            </div>
            <div className="border border-black/10 rounded-2xl p-8 bg-black/5">
              <div className="text-3xl font-light text-black/20 mb-4">04</div>
              <h3 className="text-xl font-light text-black mb-4 tracking-tight">Launch</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Optimization, analytics, and refinement for long-term success.
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
              href="https://calendly.com/designaxe/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Working With AttilaBuild */}
      <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-black mb-8">
            Working With AttilaBuild
          </h2>
          <div className="space-y-6 text-base font-light text-black/70 leading-relaxed">
            <p>
              I value direct communication, honest timelines, and building products that last. Every project is a collaboration where your vision meets my expertise in design and engineering.
            </p>
            <p>
              My design philosophy centers on minimalism and intention — removing the unnecessary to highlight what matters. I believe in shipping fast, iterating with precision, and maintaining long-term relationships with founders who value quality.
            </p>
            <p>
              You can expect transparent updates, clear timelines, and a focus on results that drive growth. No jargon, no delays, just clean execution.
            </p>
          </div>
        </div>
      </section>

      {/* About AttilaBuild */}
      <section id="about" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
                About Attila Feher
              </h2>
              <p className="text-lg font-light text-white/75 mb-4">
                Designer, developer, and founder of Designaxe
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I build products with a philosophy rooted in minimalism, speed, and precision.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I&apos;ve built tools and platforms used by thousands of people, including PureResist, VibeGrower, and DebateVote, along with commercial projects for startups and businesses across Europe and the US.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I document my journey building products and working with people on Instagram, TikTok, Twitter, and everywhere else — follow <a href="https://instagram.com/attilabuild" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80 transition-colors">@attilabuild</a> to see the process behind the work.
              </p>
              <p className="text-lg font-light text-white leading-relaxed mb-8 italic">
                Remove the unnecessary. Build what matters. Ship fast. Iterate with precision.
              </p>
              <a 
                href="#contact"
                className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light tracking-tight"
              >
                Work With Me
              </a>
            </div>
            <div className="relative aspect-4/5 bg-black/5 rounded-2xl border border-white/10 overflow-hidden">
              <Image src="/attilabuild.jpeg" alt="Attila Build" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-light text-black/80 leading-relaxed italic">
            Great digital products aren&apos;t built with noise. They&apos;re built with clarity, intention, and fast execution. My work combines minimal design with clean engineering to help founders ship sooner and scale smarter.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-light text-white/90 leading-relaxed mb-6 italic">
            &quot;Attila is extremely fast, detail-oriented, and easy to work with. The final result looked better than we imagined.&quot;
          </p>
          <p className="text-sm font-light text-white/60">
            — Founder, SaaS Platform
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="our-work" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-black mb-4">
            Our Work
          </h2>
          <p className="text-lg font-light text-black/70 mb-12">
            A curated selection of digital products, applications, and modern websites.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">PureResist Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">PureResist</h3>
                <p className="text-sm font-light text-black/70 mb-3">
                  A digital self-improvement platform helping users analyze behavior and break addiction.
                </p>
                <p className="text-xs font-light text-black/50 mb-3 italic">
                  Increased retention by 32% with a cleaner onboarding flow and structured UX.
                </p>
                <p className="text-xs font-light text-black/60">
                  App Development • Branding • UX
                </p>
              </div>
            </div>

            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">VibeGrower Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">VibeGrower</h3>
                <p className="text-sm font-light text-black/70 mb-3">
                  A marketing tool designed to help indie developers scale their apps efficiently.
                </p>
                <p className="text-xs font-light text-black/50 mb-3 italic">
                  Built scalable architecture supporting 5,000+ active users with minimal infrastructure costs.
                </p>
                <p className="text-xs font-light text-black/60">
                  Web Design • SaaS Architecture • Strategy
                </p>
              </div>
            </div>

            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">ABCKocka Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">ABCKocka</h3>
                <p className="text-sm font-light text-black/70 mb-3">
                  An e-commerce store focused on reliability, visual clarity, and trust.
                </p>
                <p className="text-xs font-light text-black/50 mb-3 italic">
                  Improved conversion rate by 28% through streamlined checkout and trust-building design elements.
                </p>
                <p className="text-xs font-light text-black/60">
                  E-Commerce • WordPress • Branding
                </p>
              </div>
            </div>

            <div className="border border-black/10 rounded-2xl overflow-hidden bg-white">
              <div className="aspect-video bg-black/5 flex items-center justify-center">
                <p className="text-black/40 text-sm font-light">DebateVote Project Image</p>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-black mb-2 tracking-tight">DebateVote</h3>
                <p className="text-sm font-light text-black/70 mb-3">
                  A structured debate platform for voting, ranking, and discussion.
                </p>
                <p className="text-xs font-light text-black/50 mb-3 italic">
                  Built a full debate system with voting logic, categorization, and scalable architecture supporting real-time interactions.
                </p>
                <p className="text-xs font-light text-black/60">
                  Web App • Full Stack Development • UX Architecture
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

      {/* Services - Full Detail */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-4">
            Services
          </h2>
          <p className="text-lg font-light text-white/75 mb-12">
            All services are tailored to founders, startups, creators, and businesses seeking speed and clarity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Identity Design</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Identity systems that communicate trust, consistency, and long-term recognition.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Custom websites built with Next.js, React, Vite, WordPress, or Shopify — structured and conversion-driven.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Native-feeling, scalable applications built with modern JavaScript stacks. Ideal for MVPs and growing products.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Complete architecture including authentication, dashboards, payments, databases, and deployment.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Maintenance & Support</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Ongoing updates, performance enhancements, UX improvements, and monthly development support.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">E-Commerce Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Complete online stores with Shopify, WooCommerce, or custom solutions. Payment integration and optimized checkout flows.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://calendly.com/designaxe/30min"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-white text-black text-sm font-light tracking-tight hover:bg-white/90 transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light text-black mb-2 tracking-tight">How fast can we start?</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Most projects begin within 48 hours after our initial consultation. I prioritize quick turnarounds without compromising quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-black mb-2 tracking-tight">What is the typical pricing?</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Pricing varies by project scope and complexity. Most websites range from $1,000-$5,000, while apps and SaaS projects start higher. Every project includes a detailed proposal after consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-black mb-2 tracking-tight">Do you work alone or with a team?</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                I work independently, which means you get direct access to the founder on every project. This eliminates communication layers and ensures faster decision-making.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-black mb-2 tracking-tight">How does communication work?</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Direct communication via email and scheduled calls. I provide regular updates, share progress transparently, and respond to questions within 24 hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-black mb-2 tracking-tight">What does the timeline look like?</h3>
              <p className="text-sm font-light text-black/70 leading-relaxed">
                Most websites launch within a week. Apps and MVPs typically take 2-4 weeks depending on complexity. I provide detailed timelines during the blueprint phase.
              </p>
            </div>
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
            href="https://calendly.com/designaxe/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extralight leading-tight tracking-tight text-black mb-4 text-center">
            Contact
          </h2>
          <p className="text-base font-light text-black/70 mb-12 text-center">
            Tell me what you want to build — I read every message personally and reply within 24 hours.
          </p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-light text-white mb-3 tracking-tight">DESIGNAXE</h3>
              <p className="text-sm font-light text-white/60 mb-2">
                Digital Products by AttilaBuild
              </p>
              <p className="text-xs font-light text-white/50 mb-6">
                Minimal. Fast. Precise.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/attilabuild" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  Instagram
                </a>
                <a href="https://tiktok.com/@attilabuild" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  TikTok
                </a>
                <a href="https://twitter.com/attilabuild" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-white/60 hover:text-white/80 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-light text-white/80 mb-4 tracking-tight">Navigation</h4>
              <nav className="flex flex-col gap-3 text-sm font-light text-white/60">
                <a href="#features" className="hover:text-white/80 transition-colors">Features</a>
                <a href="#our-work" className="hover:text-white/80 transition-colors">Our Work</a>
                <a href="#services" className="hover:text-white/80 transition-colors">Services</a>
                <a href="#about" className="hover:text-white/80 transition-colors">About</a>
                <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-light text-white/80 mb-4 tracking-tight">Newsletter</h4>
              <NewsletterForm />
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
