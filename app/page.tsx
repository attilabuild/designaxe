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
        title="Design That Hooks. Code That Delivers."
        description="I'm AttilaBuild, founder of Designaxe. I help founders, creators, and businesses turn raw ideas into clean, modern, and conversion-focused digital products. Whether you need a brand identity, a complete website, or a scalable application, everything is built with clarity, precision, and speed."
        badgeText="Built by AttilaBuild"
        badgeLabel=""
        ctaButtons={[
          { text: "Book A Free Consultation", href: "https://calendly.com/designaxe/30min", primary: true },
          { text: "View Portfolio", href: "#my-work" }
        ]}
        microDetails={[]}
      />

      {/* About AttilaBuild */}
      <section id="about" className="bg-[#050505] py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
                About AttilaBuild
              </h2>
              <p className="text-lg font-light text-white/75 mb-4">
                Designer. Developer. Founder of Designaxe.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I build digital products with a focus on simplicity, speed, and precision.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I&apos;ve created platforms used by thousands of people including PureResist, SkinMax, and ABCKocka and developed commercial projects for startups and businesses across Europe and the US.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-6">
                I share my process, experiments, and product jmyney across Instagram, TikTok, Twitter, and more.
              </p>
              <p className="text-base font-light text-white/70 leading-relaxed mb-8">
                Follow <a href="https://instagram.com/attilabuild" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80 transition-colors">attilabuild</a> to see how I build in public.
              </p>
              <p className="text-lg font-light text-white leading-relaxed mb-8 italic">
                Remove the unnecessary. Build what matters. Ship fast. Iterate with precision.
              </p>
              <a 
                href="https://calendly.com/designaxe/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light tracking-tight"
              >
                Book A Free Consultation
              </a>
            </div>
            <div className="relative aspect-4/5 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <Image src="/attilabuild.jpeg" alt="AttilaBuild" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why People Choose Designaxe */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-white mb-12 text-center">
            Why People Choose Designaxe
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-white/40">•</span>
              <div>
                <h3 className="text-lg font-light text-white mb-2 tracking-tight">Direct collaboration with the founder</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">You work with me : no outsmycing, no extra layers, no miscommunication.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-white/40">•</span>
              <div>
                <h3 className="text-lg font-light text-white mb-2 tracking-tight">High-speed delivery</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">Most websites launch within a week. MVPs ship fast with a clean, modern stack.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-white/40">•</span>
              <div>
                <h3 className="text-lg font-light text-white mb-2 tracking-tight">Minimal, timeless design</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">No clutter. No noise. Just purposeful aesthetics that communicate confidence.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-light text-white/40">•</span>
              <div>
                <h3 className="text-lg font-light text-white mb-2 tracking-tight">Transparent communication</h3>
                <p className="text-sm font-light text-white/60 leading-relaxed">Clear updates, honest timelines, and a smooth, predictable workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section id="features" className="bg-[#050505] py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-white mb-12 text-center">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Visual Identity</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Identity systems that build trust, clarity, and recognition.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Custom websites built with Next.js, React, or WordPress : structured, fast, and conversion-driven.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App & SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Modern UI, scalable architecture, and UX that feels natural from MVP to full product.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Digital Strategy & Conversion</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Landing pages, funnels, and UX optimization designed to drive measurable results.
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
              Book  Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/*  Vision, My System */}
      <section id="services" className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
               Vision, My System
            </h2>
            <p className="text-lg font-light leading-relaxed text-white/70">
              A structured process designed for clear direction and fast execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-light text-white/20 mb-4">I</div>
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Consultation</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                A focused conversation to understand goals, challenges, scope, and timeline.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-light text-white/20 mb-4">II</div>
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Blueprint</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Wireframes, structure, technical stack, and a clear roadmap.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-light text-white/20 mb-4">III</div>
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Build</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Design, development, and iterative refinement with transparent communication.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-light text-white/20 mb-4">IV</div>
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Launch</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Deployment, optimization, analytics, and long-term support options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Me */}
      <section id="consultation" className="bg-[#050505] py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-6 text-center">
            Work With Me
          </h2>
          <p className="text-lg font-light text-white/70 mb-12 text-center">
            Every project begins with a consultation where you gain clarity, direction, and a concrete plan for  product.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm text-center">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Consultation</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Understanding  priorities, constraints, and timeline.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm text-center">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Blueprint</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                A refined proposal outlining design direction, UX flow, and technical decisions.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm text-center">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Build</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Execution with speed, precision, and continuous communication.
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
              Book  Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-white mb-12 text-center">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden relative">
                  <Image src="/jovan.jpg" alt="Jovan Popesku" fill className="object-cover rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-light text-white/80">Jovan Popesku</p>
                </div>
              </div>
              <p className="text-sm font-light text-white/80 leading-relaxed italic">
                &quot;Extremely fast and detail-oriented. The final result exceeded expectations.&quot;
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden relative">
                  <Image src="/yanik.jpg" alt="Yanik_scaleup" fill className="object-cover rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-light text-white/80">Yanik Scaleup</p>
                </div>
              </div>
              <p className="text-sm font-light text-white/80 leading-relaxed italic">
                &quot;Clean design and fast delivery. Exactly what we needed for our MVP.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="my-work" className="bg-[#050505] py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-4">
            My Work
          </h2>
          <p className="text-lg font-light text-white/70 mb-12">
            A curated selection of digital products, applications, and modern websites.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <Image src="/lingodroid.png" alt="LingoDroid" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">LingoDroid</h3>
                <p className="text-sm font-light text-white/70 mb-3">
                  Learn languages easily with AI-powered language learning platform.
                </p>
                <p className="text-xs font-light text-white/60">
                  App Development · AI Integration · UX
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <Image src="/zenpuff.png" alt="BeHigh" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">BeHigh</h3>
                <p className="text-sm font-light text-white/70 mb-3">
                  A modern platform built for creators and developers.
                </p>
                <p className="text-xs font-light text-white/60">
                  Web App · Developer Tools · Design
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <Image src="/pureresist.png" alt="PureResist" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">PureResist</h3>
                <p className="text-sm font-light text-white/70 mb-3">
                  NoFap App : a digital self-improvement platform focused on breaking addiction patterns.
                </p>
                <p className="text-xs font-light text-white/50 mb-3 italic">
                  Improved onboarding and retention by 32%.
                </p>
                <p className="text-xs font-light text-white/60">
                  App Development · Branding · UX
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <Image src="/wscrape.png" alt="WScrape" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">WScrape</h3>
                <p className="text-sm font-light text-white/70 mb-3">
                  A powerful web scraping and data extraction tool.
                </p>
                <p className="text-xs font-light text-white/60">
                  Web App · Developer Tools · SaaS
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <Image src="/abckocka.png" alt="ABCKocka" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">ABCKocka</h3>
                <p className="text-sm font-light text-white/70 mb-3">
                  E-commerce site : a clean and reliable online store with modern UX.
                </p>
                <p className="text-xs font-light text-white/50 mb-3 italic">
                  Increased conversions by 28% through trust-driven design.
                </p>
                <p className="text-xs font-light text-white/60">
                  E-Commerce · WordPress · Branding
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <div className="aspect-video bg-white/5 relative overflow-hidden">
                <Image src="/skinmaxapp.png" alt="SkinMax" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-2 tracking-tight">SkinMax</h3>
                <p className="text-sm font-light text-white/70 mb-3">
                  A mobile app for maxing skin : skincare and skin health optimization platform.
          </p>
                <p className="text-xs font-light text-white/60">
                  Mobile App · App Development · UX
                </p>
              </div>
            </div>
          </div>

        
        </div>
      </section>

      {/* Services */}
      <section className="bg-black py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extralight leading-tight tracking-tight text-white mb-4">
            Services
          </h2>
          <p className="text-lg font-light text-white/75 mb-12">
            Tailored for founders, startups, creators, and businesses who value speed and clarity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Branding & Identity Design</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Trust-driven visuals built for long-term recognition.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Web Design & Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Next.js, React, Vite, WordPress, or Shopify : optimized for speed and conversions.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">App Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Modern, intuitive applications ideal for MVPs or full-scale products.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">SaaS Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Authentication, payments, dashboards, databases, deployment : complete systems.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Maintenance & Support</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Ongoing updates, performance improvements, and UX refinement.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">E-Commerce Development</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Shopify, WooCommerce, or custom solutions with optimized checkout flows.
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

      {/* FAQ */}
      <section className="bg-[#050505] py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light text-white mb-2 tracking-tight">How fast can we start?</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Typically within 48 hmys after my initial consultation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-white mb-2 tracking-tight">What does pricing look like?</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Websites usually range from $1,000–$5,000. Apps and SaaS products start higher depending on complexity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-white mb-2 tracking-tight">Do you work alone or with a team?</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                I work independently, giving you direct access to the founder on every project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-white mb-2 tracking-tight">How do we communicate?</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Email and scheduled calls. You receive consistent updates and fast replies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-light text-white mb-2 tracking-tight">What is the typical timeline?</h3>
              <p className="text-sm font-light text-white/70 leading-relaxed">
                Most websites launch within a week. Apps and MVPs usually take 2–4 weeks.
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
            Share  idea, timeline, and goals. <br></br>I personally read every message message.
          </p>
          <a 
            href="https://calendly.com/designaxe/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors"
          >
            Book  Free Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#050505] py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extralight leading-tight tracking-tight text-white mb-4 text-center">
            Contact
          </h2>
          <p className="text-base font-light text-white/70 mb-12 text-center">
            Tell me what you want to build : I&apos;ll get back to you within a day.
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
                Design That Hooks. Code That Delivers.
              </p>
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
                <a href="#my-work" className="hover:text-white/80 transition-colors">My Work</a>
                <a href="#services" className="hover:text-white/80 transition-colors">Services</a>
                <a href="#about" className="hover:text-white/80 transition-colors">About</a>
                <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
                <a href="#contact" className="hover:text-white/80 transition-colors">Newsletter</a>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-light text-white/80 mb-4 tracking-tight">Subscribe</h4>
              <NewsletterForm />
            </div>
          </div>
    </div>
      </footer>
    </>
  );
}
