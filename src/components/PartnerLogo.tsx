import React, { useState } from 'react';

interface PartnerLogoProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
}

export default function PartnerLogo({ src, alt, fallbackText, className = "" }: PartnerLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center text-center font-bold text-gray-500 text-sm ${className}`}>
        {fallbackText}
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
