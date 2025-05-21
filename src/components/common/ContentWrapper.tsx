"use client";
import { usePathname } from "next/navigation";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Product details only (not main /products page)
  const isProductInnerPage =
    pathname.startsWith("/products/") && pathname !== "/products";

  // Add other routes that NEED top padding (if any)
  const applyPaddingPages: string[] = [
    // e.g., "/custom-page" (only if it has no banner)
  ];

  const shouldApplyPadding =
    isProductInnerPage || applyPaddingPages.includes(pathname);

  return <main className={shouldApplyPadding ? "pt-[110px]" : ""}>{children}</main>;
}
