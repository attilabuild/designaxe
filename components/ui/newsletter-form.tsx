'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function NewsletterForm() {
  const [state, handleSubmit] = useForm("xnnebqnw");
  const [email, setEmail] = useState('');

  if (state.succeeded) {
    return (
      <div className="text-center">
        <p className="text-sm font-light text-white/80">Thanks for subscribing!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Ymy email"
        className="flex-1 px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm font-light"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input type="hidden" name="form_type" value="newsletter" />
      <button
        type="submit"
        disabled={state.submitting}
        className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-light disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? '...' : 'Subscribe'}
      </button>
    </form>
  );
}

