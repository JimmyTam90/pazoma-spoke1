'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { BREVO_FORM_ACTION } from '@/lib/config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;
    const value = email.trim();
    const honeypot = (e.currentTarget.elements.namedItem('email_address_check') as HTMLInputElement | null)?.value ?? '';
    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      // Brevo hosted-form endpoint. no-cors => opaque response; a thrown error means the request never left.
      await fetch(BREVO_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({ EMAIL: value, email_address_check: honeypot, locale: 'en', html_type: 'simple' }),
      });
      setStatus('success');
      setMessage('Success! Check your inbox for your 5% discount code.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again in a moment.');
    }
  }

  return (
    <section id="vip" className="mx-auto max-w-6xl px-4 pb-14">
      <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-black via-ink to-black p-8 text-center shadow-lg sm:p-12">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-amber-400 sm:text-3xl">Join the VIP Bagger Club &amp; Get 5% Off</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Unlock instant 5% discount code, free global shipping alerts ($49+), and priority restock notifications for your Harley-Davidson.
        </p>

        {status === 'success' ? (
          <p role="status" className="mx-auto mt-6 max-w-xl rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-4 font-semibold text-green-300">
            {message}
          </p>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label htmlFor="vip-email" className="sr-only">Email address</label>
            <input
              id="vip-email"
              name="EMAIL"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              aria-invalid={status === 'error'}
              aria-describedby="vip-msg"
              className="min-w-0 flex-1 rounded-md border border-white/20 bg-black px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
            />
            {/* honeypot (Brevo bot check) */}
            <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-md bg-amber-400 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:opacity-70"
            >
              {status === 'loading' ? 'Submitting…' : 'Claim your 5% off code →'}
            </button>
          </form>
        )}

        <p id="vip-msg" role={status === 'error' ? 'alert' : undefined} className="mt-3 min-h-[1.25rem] text-sm text-red-400">
          {status === 'error' ? message : ''}
        </p>
        {status !== 'success' && (
          <p className="mx-auto mt-1 max-w-xl text-xs text-gray-500">
            By subscribing you agree to receive marketing emails from PrimeGearLab. Unsubscribe anytime. See our{' '}
            <Link 
              href="/privacy" 
              className="text-amber-400 underline transition hover:text-amber-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>.
          </p>
        )}
      </div>
    </section>
  );
}
