"use client";

import React, { useState, useRef, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: Option[];
  placeholder: string;
}

export default function DropdownSelect({ value, onChange, options, placeholder }: DropdownSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const display = options.find(o => o.value === value)?.label || placeholder;
  const isDefault = value === placeholder;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full rounded-[10px] bg-white border h-[43px] px-4 flex items-center justify-between gap-2 transition-all cursor-pointer ${
          open ? 'border-[#2a8fd4] ring-1 ring-[#2a8fd4]' : 'border-[#c5dff0] hover:border-[#a8cce0]'
        }`}
      >
        <span className={`font-inter text-[14.5px] leading-none truncate transition-colors ${isDefault ? 'text-[#8fa3b8]' : 'text-[#1c2d3e]'}`}>
          {display}
        </span>
        <svg
          className={`w-[18px] h-[18px] text-[#8fa3b8] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 bg-white border border-[#c5dff0] rounded-[10px] shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`px-4 py-[11px] cursor-pointer font-inter text-[14.5px] transition-colors ${
                value === opt.value
                  ? 'bg-[#eaf4fd] text-[#1a6daf] font-semibold'
                  : 'text-[#4a6278] hover:bg-[#f4f9fd]'
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
