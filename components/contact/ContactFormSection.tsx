"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import DropdownSelect from '@/components/DropdownSelect';

const subjectOptions = [
  { value: 'Select a subject', label: 'Select a subject' },
  { value: 'General Enquiry', label: 'General Enquiry' },
  { value: 'Request a Quote', label: 'Request a Quote' },
  { value: 'Booking Modification', label: 'Booking Modification' },
];

export default function ContactFormSection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Select a subject');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*New Contact Enquiry*%0A%0A` +
      `*Name:* ${firstName} ${lastName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:* ${message}`;
    window.open(`https://wa.me/447535048548?text=${msg}`, '_blank');
  };

  return (
    <section className="w-full bg-[#f4f9fd] py-20 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">

          {/* Left - Form */}
          <AnimateOnScroll animation="fade-up" className="w-full lg:w-[660px] shrink-0">
            <div className="rounded-3xl bg-white border border-[#c5dff0] p-6 md:p-11 shadow-[0_2px_8px_rgba(42,143,212,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <h2 className="font-plus-jakarta-sans font-extrabold text-[28px] tracking-[-0.56px] text-[#1c2d3e] mb-2 text-center md:text-left">
                Send Us a Message
              </h2>
              <p className="font-inter text-[14.5px] leading-[23.93px] text-[#4a6278] mb-8 text-center md:text-left">
                Fill in the form below and a member of the MZ Cleaners team will
                get back to you within 2 hours during business hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">First Name *</label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="text" placeholder="Your first name" value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Last Name *</label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="text" placeholder="Your last name" value={lastName} onChange={e => setLastName(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Phone Number *</label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="tel" placeholder="+44 7700 000000" value={phone} onChange={e => setPhone(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Email Address *</label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Subject</label>
                  <DropdownSelect value={subject} onChange={setSubject} options={subjectOptions} placeholder="Select a subject" />
                </div>

                <div>
                  <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Your Message *</label>
                  <div className="rounded-[10px] bg-white border border-[#c5dff0] p-4 min-h-[110px]">
                    <textarea placeholder="Tell us how we can help you — your property type, location, cleaning needs, or any questions you have…" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent resize-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-[51px] rounded-[10px] bg-[#2a8fd4] text-white font-plus-jakarta-sans font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(42,143,212,0.32)] hover:bg-[#1A6DAF] transition-colors cursor-pointer"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>

                <p className="text-center text-[12.5px] text-[#8fa3b8] flex items-center justify-center gap-1.5">
                  <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your information is safe with us and never shared with third parties.
                </p>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Right - Info Sidebar */}
          <AnimateOnScroll animation="fade-up" delay={100} className="w-full lg:w-[550px] shrink-0 flex flex-col gap-5">

            {/* Image */}
            <div className="w-full h-[260px] rounded-3xl overflow-hidden relative shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <Image
                src="/contact.png"
                alt="MZ Cleaners Manchester"
                fill
                className="object-cover"
                sizes="460px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.65)]" />
              <div className="absolute bottom-[42px] left-5">
                <h4 className="font-plus-jakarta-sans font-extrabold text-white text-[22px]">MZ Cleaners Manchester</h4>
                <p className="font-inter text-[13px] text-white/85">Trusted by 500+ homes & businesses</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-[18px] bg-white border border-[#c5dff0] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-plus-jakarta-sans font-bold text-[18px] text-[#1c2d3e] mb-6 pb-4 border-b border-[#c5dff0]">
                Contact Information
              </h3>

              <div className="flex flex-col gap-0">
                <div className="flex items-start gap-4 py-3 border-b border-[#f4f9fd]">
                  <div className="w-10 h-10 rounded-[11px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-lg">
                    📞
                  </div>
                  <div>
                    <span className="font-inter text-[12px] tracking-[0.96px] uppercase text-[#8fa3b8] block">Phone</span>
                    <a href="tel:+447535048548" className="font-inter font-semibold text-[15px] text-[#1c2d3e]">+44 7535 048548</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-3 border-b border-[#f4f9fd]">
                  <div className="w-10 h-10 rounded-[11px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-lg">
                    ✉️
                  </div>
                  <div>
                    <span className="font-inter text-[12px] tracking-[0.96px] uppercase text-[#8fa3b8] block">Email</span>
                    <a href="mailto:info@mzcleaners.co.uk" className="font-inter font-semibold text-[15px] text-[#1c2d3e]">info@mzcleaners.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-3 border-b border-[#f4f9fd]">
                  <div className="w-10 h-10 rounded-[11px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-lg">
                    💬
                  </div>
                  <div>
                    <span className="font-inter text-[12px] tracking-[0.96px] uppercase text-[#8fa3b8] block">WhatsApp</span>
                    <a href="https://wa.me/447535048548" target="_blank" rel="noopener noreferrer" className="font-inter font-semibold text-[15px] text-[#1c2d3e]">+44 7535 048548</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3">
                  <div className="w-10 h-10 rounded-[11px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-lg">
                    📍
                  </div>
                  <div>
                    <span className="font-inter text-[12px] tracking-[0.96px] uppercase text-[#8fa3b8] block">Service Area</span>
                    <span className="font-inter font-semibold text-[15px] text-[#1c2d3e]">Manchester & Greater Manchester</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="rounded-[18px] bg-[#1a2f45] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h3 className="font-plus-jakarta-sans font-bold text-[16px] text-white mb-5">Business Hours</h3>

              <div className="flex flex-col gap-0">
                <div className="flex justify-between items-center py-3 border-b border-[rgba(255,255,255,0.07)]">
                  <span className="font-inter font-medium text-[13.5px] text-[rgba(255,255,255,0.65)]">Monday – Friday</span>
                  <span className="font-plus-jakarta-sans font-bold text-[13.5px] text-white">8:00am – 6:00pm</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[rgba(255,255,255,0.07)]">
                  <span className="font-inter font-medium text-[13.5px] text-[rgba(255,255,255,0.65)]">Saturday</span>
                  <span className="font-plus-jakarta-sans font-bold text-[13.5px] text-white">9:00am – 4:00pm</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-inter font-medium text-[13.5px] text-[rgba(255,255,255,0.65)]">Sunday</span>
                  <span className="font-plus-jakarta-sans font-bold text-[13.5px] text-[#8fa3b8]">Closed</span>
                </div>
              </div>

              <div className="mt-4 rounded-[10px] bg-[rgba(42,143,212,0.15)] border border-[rgba(42,143,212,0.25)] p-4 flex items-center gap-3">
                <span className="text-lg">⚡</span>
                <p className="font-inter text-[13px] leading-[18.85px] text-[#5bb8f5]">
                  We respond to all enquiries within 2 hours during business hours
                </p>
              </div>
            </div>

          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
