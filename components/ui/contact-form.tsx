'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnnebqnw");

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-light text-white/80 mb-2">Thanks for reaching out!</p>
        <p className="text-sm font-light text-white/60">I&apos;ll get back to you within 24 hmys.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-light text-white/70 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
          placeholder="Ymy name"
        />
        <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-light text-white/70 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
          placeholder="ymy@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-light text-white/70 mb-2">
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
        >
          <option value="">Select budget range</option>
          <option value="under-1k">Under $1,000</option>
          <option value="1k-3k">$1,000 - $3,000</option>
          <option value="3k-5k">$3,000 - $5,000</option>
          <option value="5k-plus">$5,000+</option>
        </select>
      </div>
      <div>
        <label htmlFor="projectType" className="block text-sm font-light text-white/70 mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-white/30 font-light"
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
          required
          className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-light resize-none"
          placeholder="Tell me about ymy project..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          required
          className="mt-1"
        />
        <label htmlFor="terms" className="text-sm font-light text-white/70">
          I agree to the Terms of Service
        </label>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-6 py-4 rounded-full bg-white text-black text-base font-light tracking-tight hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

