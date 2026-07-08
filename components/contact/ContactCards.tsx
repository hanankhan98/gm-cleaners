import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const options = [
  {
    icon: '📞',
    title: 'Call Us Direct',
    desc: 'Speak to a member of our team straight away for immediate help and fast quotes.',
    value: '+44 7535 048548',
    href: 'tel:+447535048548',
    blue: true
  },
  {
    icon: '✉️',
    title: 'Email Us',
    desc: 'Send us an email anytime we respond to all enquiries within 2 business hours.',
    value: 'MzcleanersLtd@gmail.com',
    href: 'mailto:MzcleanersLtd@gmail.com',
    blue: true
  },
  {
    icon: '💬',
    title: 'WhatsApp Us',
    desc: 'Message us on WhatsApp for the quickest response we\'re usually online within minutes.',
    value: 'Chat Now on WhatsApp',
    href: 'https://wa.me/447535048548',
    blue: false,
    green: true
  },
  {
    icon: '⏰',
    title: 'Business Hours',
    desc: 'Monday to Saturday we are available for calls, messages, and quote requests.',
    value: 'Mon–Sat: 8am – 6pm',
    blue: true
  }
];

export default function ContactCards() {
  return (
    <section className="w-full bg-white py-20 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((opt, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 50}>
            <div
              className="rounded-[18px] bg-[#f4f9fd] border border-[#c5dff0] min-h-[220px] md:h-[245.4px] flex flex-col items-center justify-center text-center px-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-4 text-2xl ${
                opt.green
                  ? 'bg-[#dcfce7] border-[#bbf7d0]'
                  : 'bg-[#eaf4fd] border-[#c5dff0]'
              }`}>
                {opt.icon}
              </div>
              <h3 className="font-plus-jakarta-sans font-bold text-[15px] text-[#1c2d3e] mb-2">
                {opt.title}
              </h3>
              <p className="font-inter text-[13px] leading-[20.15px] text-[#4a6278] mb-4">
                {opt.desc}
              </p>
              {opt.href ? (
                <a
                  href={opt.href}
                  target={opt.href.startsWith('http') ? '_blank' : undefined}
                  rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`font-plus-jakarta-sans font-bold text-sm ${
                    opt.green ? 'text-[#25d366]' : 'text-[#2a8fd4]'
                  }`}
                >
                  {opt.value}
                </a>
              ) : (
                <span className="font-plus-jakarta-sans font-bold text-sm text-[#2a8fd4]">
                  {opt.value}
                </span>
              )}
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
