"use client";

import FormField, { inputClassName, selectClassName } from "./FormField";

const countryCodes = [
  { value: "+82", label: "+82 (한국)" },
  { value: "+7", label: "+7 (러시아)" },
  { value: "+998", label: "+998 (우즈베키스탄)" },
  { value: "+996", label: "+996 (키르기스스탄)" },
  { value: "+992", label: "+992 (타지키스탄)" },
  { value: "+993", label: "+993 (투르크메니스탄)" },
  { value: "+994", label: "+994 (아제르바이잔)" },
  { value: "+374", label: "+374 (아르메니아)" },
  { value: "+375", label: "+375 (벨라루스)" },
  { value: "+380", label: "+380 (우크라이나)" },
  { value: "+971", label: "+971 (UAE)" },
  { value: "+966", label: "+966 (사우디)" },
  { value: "+1", label: "+1 (미국)" },
  { value: "+86", label: "+86 (중국)" },
  { value: "+81", label: "+81 (일본)" },
];

interface PhoneInputProps {
  label: string;
  required?: boolean;
  error?: string;
  countryCode: string;
  phone: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  className?: string;
}

export default function PhoneInput({
  label,
  required,
  error,
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  className,
}: PhoneInputProps) {
  return (
    <FormField label={label} required={required} error={error} className={className}>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className={`${selectClassName} !w-[140px] shrink-0`}
        >
          {countryCodes.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="전화번호"
          className={inputClassName}
        />
      </div>
    </FormField>
  );
}
