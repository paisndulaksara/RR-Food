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

  return <main className={isProductInnerPage ? "pt-[110px]" : ""}>{children}</main>;
}
