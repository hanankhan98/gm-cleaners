"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import DropdownSelect from '@/components/DropdownSelect';

const propertyTypes = ['House', 'Flat / Apartment', 'Office', 'Commercial Unit', 'Other'];

const services = [
  { icon: '🏡', label: 'Regular House\nCleaning' },
  { icon: '✨', label: 'Deep Cleaning' },
  { icon: '🔑', label: 'End of Tenancy' },
  { icon: '📦', label: 'Move-In Cleaning' },
  { icon: '🚪', label: 'Move-Out Cleaning' },
  { icon: '🍳', label: 'Kitchen Cleaning' },
  { icon: '🚿', label: 'Bathroom Cleaning' },
  { icon: '🏢', label: 'Office Cleaning' },
  { icon: '🏭', label: 'Commercial Cleaning' }
];

const roomsOptions = [
  { value: 'Select number of rooms', label: 'Select number of rooms' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6+', label: '6+' },
];

const timeOptions = [
  { value: 'Select preferred time', label: 'Select preferred time' },
  { value: 'Morning (8am-12pm)', label: 'Morning (8am-12pm)' },
  { value: 'Afternoon (12pm-4pm)', label: 'Afternoon (12pm-4pm)' },
  { value: 'Evening (4pm-6pm)', label: 'Evening (4pm-6pm)' },
];

const frequencyOptions = [
  { value: 'Select frequency', label: 'Select frequency' },
  { value: 'One-time clean', label: 'One-time clean' },
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Fortnightly', label: 'Fortnightly' },
  { value: 'Monthly', label: 'Monthly' },
];
 
export default function QuoteFormSection() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('House');
  const [rooms, setRooms] = useState('Select number of rooms');
  const [postcode, setPostcode] = useState('');
  const [selectedService, setSelectedService] = useState('Regular House\nCleaning');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Select preferred time');
  const [frequency, setFrequency] = useState('Select frequency');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*New Quote Request*%0A%0A` +
      `*Name:* ${firstName} ${lastName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email}%0A` +
      `*Property Type:* ${selectedPropertyType}%0A` +
      `*Rooms:* ${rooms}%0A` +
      `*Postcode:* ${postcode}%0A` +
      `*Service:* ${selectedService.replace(/\n/g, ' ')}%0A` +
      `*Preferred Date:* ${date}%0A` +
      `*Preferred Time:* ${time}%0A` +
      `*Frequency:* ${frequency}%0A` +
      `*Additional Info:* ${additionalInfo}`;
    window.open(`https://wa.me/447535048548?text=${msg}`, '_blank');
  };
  return (
    <section className="w-full bg-[#f4f9fd] py-20 md:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">

          {/* Left - Form */}
          <AnimateOnScroll animation="fade-up" className="w-full lg:w-[660px] shrink-0">
            <div className="rounded-3xl bg-white border border-[#c5dff0] p-6 md:p-11 shadow-[0_2px_8px_rgba(42,143,212,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <div className="mb-7">
                <h2 className="font-plus-jakarta-sans font-extrabold text-[28px] tracking-[-0.56px] text-[#1c2d3e] mb-2 text-center md:text-left">
                  Tell Us What You Need
                </h2>
                <p className="font-inter text-[14.5px] leading-[23.93px] text-[#4a6278] text-center md:text-left">
                  Complete the form below and our team will prepare a tailored quote for
                  your property. All fields marked with * are required.
                </p>
              </div>

              {/* Progress Steps */}
              <div className="hidden sm:flex items-center justify-center gap-0 pb-8 mb-8 border-b border-[#c5dff0]">
                {[1, 2, 3, 4].map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-2xl border-2 flex items-center justify-center ${
                        step === 1
                          ? 'bg-[#2a8fd4] border-[#2a8fd4] text-white'
                          : 'bg-white border-[#c5dff0] text-[#8fa3b8]'
                      }`}>
                        <span className="font-plus-jakarta-sans font-extrabold text-[14px]">{step}</span>
                      </div>
                      {i < 3 && (
                        <div className={`h-[3px] w-[68px] rounded-sm ${
                          step === 1 ? 'bg-[#2a8fd4]' : 'bg-[#c5dff0]'
                        }`} />
                      )}
                    </div>
                    {i < 3 && <div className="hidden" />}
                  </React.Fragment>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-0">

                {/* Your Details */}
                <div className="flex items-center gap-2 pb-3 mb-6 border-b border-[#f4f9fd]">
                  <span className="text-[14px]">👤</span>
                  <span className="font-plus-jakarta-sans font-bold text-[14px] tracking-[1.12px] uppercase text-[#2a8fd4]">YOUR DETAILS</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">First Name <span className="text-red-500">*</span></label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="text" placeholder="Your first name" value={firstName} onChange={e => setFirstName(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Last Name <span className="text-red-500">*</span></label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="text" placeholder="Your last name" value={lastName} onChange={e => setLastName(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Phone Number <span className="text-red-500">*</span></label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="tel" placeholder="+44 7700 000000" value={phone} onChange={e => setPhone(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Email Address <span className="text-red-500">*</span></label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div className="flex items-center gap-2 pb-3 mb-6 border-b border-[#f4f9fd]">
                  <span className="text-[14px]">🏠</span>
                  <span className="font-plus-jakarta-sans font-bold text-[14px] tracking-[1.12px] uppercase text-[#2a8fd4]">PROPERTY INFORMATION</span>
                </div>

                <div className="mb-4">
                  <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Property Type <span className="text-red-500">*</span></label>
                  <div className="flex flex-wrap gap-2.5">
                    {propertyTypes.map((type, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedPropertyType(type)}
                        className={`rounded-full h-9 flex items-center px-4 border cursor-pointer text-[13px] font-inter font-semibold transition-colors ${
                          selectedPropertyType === type
                            ? 'bg-[#eaf4fd] border-[#2a8fd4] text-[#1a6daf]'
                            : 'bg-white border-[#c5dff0] text-[#4a6278] hover:bg-[#f4f9fd]'
                        }`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Number of Rooms <span className="text-red-500">*</span></label>
                    <DropdownSelect value={rooms} onChange={setRooms} options={roomsOptions} placeholder="Select number of rooms" />
                  </div>
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Postcode / Area <span className="text-red-500">*</span></label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="text" placeholder="e.g. M1 1AE" value={postcode} onChange={e => setPostcode(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                </div>

                {/* Cleaning Service Required */}
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#f4f9fd]">
                  <span className="text-[14px]">🧹</span>
                  <span className="font-plus-jakarta-sans font-bold text-[14px] tracking-[1.12px] uppercase text-[#2a8fd4]">CLEANING SERVICE REQUIRED</span>
                </div>

                <div className="mb-4">
                  <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Select Service <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {services.map((svc, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedService(svc.label)}
                        className={`rounded-[14px] border h-[94.5px] flex flex-col items-center justify-center cursor-pointer transition-all ${
                          selectedService === svc.label
                            ? 'bg-[#eaf4fd] border-[#2a8fd4] shadow-[0_0_0_3px_rgba(42,143,212,0.1)]'
                            : 'bg-[#f4f9fd] border-[#c5dff0] hover:bg-[#eaf4fd]'
                        }`}
                      >
                        <span className="text-[20px] leading-6 font-semibold mb-1">{svc.icon}</span>
                        <span className="font-inter font-semibold text-[12.5px] leading-[16.25px] text-center text-[#1a6daf]">
                          {svc.label.split('\n').map((line, j) => <React.Fragment key={j}>{line}<br /></React.Fragment>)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferred Date & Additional Info */}
                <div className="flex items-center gap-2 pb-3 mb-4 mt-6 border-b border-[#f4f9fd]">
                  <span className="text-[14px]">📅</span>
                  <span className="font-plus-jakarta-sans font-bold text-[14px] tracking-[1.12px] uppercase text-[#2a8fd4]">PREFERRED DATE & ADDITIONAL INFO</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Preferred Date</label>
                    <div className="rounded-[10px] bg-white border border-[#c5dff0] h-[43px] px-4 flex items-center focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                      <input type="text" placeholder="mm/dd/yyyy" value={date} onChange={e => setDate(e.target.value)} className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Preferred Time</label>
                    <DropdownSelect value={time} onChange={setTime} options={timeOptions} placeholder="Select preferred time" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Cleaning Frequency</label>
                  <DropdownSelect value={frequency} onChange={setFrequency} options={frequencyOptions} placeholder="Select frequency" />
                </div>

                <div className="mb-6">
                  <label className="font-inter font-semibold text-[13px] text-[#1c2d3e] block mb-[7px]">Additional Information</label>
                  <div className="rounded-[10px] bg-white border border-[#c5dff0] p-4 min-h-[100px] focus-within:ring-1 focus-within:ring-[#2a8fd4]">
                    <textarea
                      placeholder="Tell us anything else that will help us quote you accurately — access instructions, specific requirements, areas of concern, or any questions you have…"
                      value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)}
                      rows={3}
                      className="w-full font-inter text-[14.5px] text-[#1c2d3e] outline-none bg-transparent resize-none"
                    />
                  </div>
                </div>

                <button type="submit" className="w-full h-[51px] rounded-[10px] bg-[#2a8fd4] text-white font-plus-jakarta-sans font-bold text-[17px] flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(42,143,212,0.38)] hover:bg-[#1A6DAF] transition-colors cursor-pointer">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send My Quote Request
                </button>

                <p className="text-center text-[12.5px] text-[#8fa3b8] flex items-center justify-center gap-1.5 mt-3.5">
                  <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your information is kept private and never shared with third parties.
                </p>

              </form>
            </div>
          </AnimateOnScroll>

          {/* Right - Sidebar */}
          <AnimateOnScroll animation="fade-up" delay={100} className="w-full lg:w-[520px] shrink-0 flex flex-col gap-5">

            {/* Image */}
            <div className="w-full h-[280px] rounded-3xl overflow-hidden relative shadow-[0_12px_40px_rgba(42,143,212,0.18)]">
              <Image
                src="/get_a_quest.png"
                alt="MZ Cleaners Manchester"
                fill
                className="object-cover"
                sizes="460px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.72)]" />
              <div className="absolute bottom-5 left-5">
                <h4 className="font-plus-jakarta-sans font-extrabold text-white text-[17px]">MZ Cleaners Manchester</h4>
                <p className="font-inter text-[13px] text-white/85">Trusted by 500+ homes & businesses</p>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="rounded-[18px] bg-white border border-[#c5dff0] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-plus-jakarta-sans font-bold text-[18px] text-[#1c2d3e] mb-6 pb-4 border-b border-[#c5dff0]">
                What Happens Next
              </h3>

              <div className="flex flex-col gap-0">
                <div className="flex items-start gap-3.5 py-3 border-b border-[#f4f9fd]">
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-base">
                    📋
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13.5px] text-[#1c2d3e] block leading-tight">We Review Your Request</span>
                    <span className="font-inter text-[12.5px] leading-[19.38px] text-[#4a6278]">Your quote request is reviewed by our team immediately upon submission.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-3 border-b border-[#f4f9fd]">
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-base">
                    ⏰
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13.5px] text-[#1c2d3e] block leading-tight">Response Within 2 Hours</span>
                    <span className="font-inter text-[12.5px] leading-[19.38px] text-[#4a6278]">We contact you within 2 hours during business hours with your personalised quote.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-3 border-b border-[#f4f9fd]">
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-base">
                    💷
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13.5px] text-[#1c2d3e] block leading-tight">Transparent, Fixed Pricing</span>
                    <span className="font-inter text-[12.5px] leading-[19.38px] text-[#4a6278]">The price we quote is the final price. No hidden charges, no surprises ever.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3">
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-[#eaf4fd] border border-[#c5dff0] flex items-center justify-center shrink-0 text-base">
                    📅
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13.5px] text-[#1c2d3e] block leading-tight">Book Your Clean</span>
                    <span className="font-inter text-[12.5px] leading-[19.38px] text-[#4a6278]">Happy with the quote? Confirm your preferred date and time and we'll take care of the rest.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🛡️', label: 'Fully Insured', sub: 'Public liability cover' },
                { icon: '✅', label: 'DBS Checked', sub: 'All staff verified' },
                { icon: '⭐', label: '5★ Rated', sub: 'Google Reviews' },
                { icon: '♻️', label: 'Eco-Friendly', sub: 'Safe products only' }
              ].map((badge, i) => (
                <div key={i} className="rounded-[14px] bg-white border border-[#c5dff0] flex flex-col items-center py-4 px-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-[20px] leading-none mb-1">{badge.icon}</span>
                  <span className="font-inter font-semibold text-[13px] text-[#1c2d3e]">{badge.label}</span>
                  <span className="font-inter text-[11.5px] text-[#8fa3b8]">{badge.sub}</span>
                </div>
              ))}
            </div>

            {/* Contact Directly */}
            <div className="rounded-[18px] bg-[#1a2f45] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h3 className="font-plus-jakarta-sans font-bold text-[16px] text-white mb-4">Prefer to Contact Us Directly?</h3>

              <div className="flex flex-col gap-2.5">
                <a href="tel:+447535048548" className="flex items-center gap-3 rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] p-3 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <div className="w-9 h-9 rounded-[9px] bg-[#2a8fd4] flex items-center justify-center text-base shrink-0">
                    📞
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13px] text-white block">Call Us Now</span>
                    <span className="font-inter text-[12px] text-[rgba(255,255,255,0.65)]">+44 7535 048548</span>
                  </div>
                </a>

                <a href="https://wa.me/447535048548" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] p-3 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <div className="w-9 h-9 rounded-[9px] bg-[#25d366] flex items-center justify-center text-base shrink-0">
                    💬
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13px] text-white block">WhatsApp Us</span>
                    <span className="font-inter text-[12px] text-[rgba(255,255,255,0.65)]">Quick reply usually within minutes</span>
                  </div>
                </a>

                <a href="mailto:info@mzcleaners.co.uk" className="flex items-center gap-3 rounded-[10px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] p-3 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <div className="w-9 h-9 rounded-[9px] bg-[#2a8fd4] flex items-center justify-center text-base shrink-0">
                    ✉️
                  </div>
                  <div>
                    <span className="font-inter font-semibold text-[13px] text-white block">Email Us</span>
                    <span className="font-inter text-[12px] text-[rgba(255,255,255,0.65)]">info@mzcleaners.co.uk</span>
                  </div>
                </a>
              </div>
            </div>

          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );

}
