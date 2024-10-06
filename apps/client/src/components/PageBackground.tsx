import { ReactNode } from 'react';

export interface PageBackgroundProps {
  children: ReactNode;
  backgroundImage: string;
}

export function PageBackground({
  backgroundImage,
  children,
}: PageBackgroundProps) {
  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      {children}
    </div>
  );
}
