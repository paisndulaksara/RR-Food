// src/components/common/ContentWrapper.tsx
'use client';
import { usePathname } from 'next/navigation';

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={isHome ? "" : "pt-[120px]"}>
      {children}
    </main>
  );
}
