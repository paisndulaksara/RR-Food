// src/components/common/ContentWrapper.tsx
"use client";
import { usePathname } from "next/navigation";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isProductInnerPage =
    pathname.startsWith("/products/") && pathname !== "/products";

  const applyPaddingPages = [
    "/gallery",
    "/csr",
    "/about/team",
    "/about/innovation",
  ];

  const shouldApplyPadding =
    isProductInnerPage || applyPaddingPages.includes(pathname);

  return <main className={shouldApplyPadding ? "pt-[110px]" : ""}>{children}</main>;
}
