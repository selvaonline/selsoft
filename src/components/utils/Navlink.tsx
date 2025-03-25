"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string; // Use a custom active class name
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName = "active", // Provide a default active class name
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine active state based on exact match or prefix match
  const isActive = pathname === href;

  // Handle custom active className and apply conditionally
  const combinedClassName = `${className ? className + " " : ""}${
    isActive ? activeClassName : ""
  }`;

  // We're removing the explicit router.push to let the Link component handle navigation naturally
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // No need to manually navigate, the Link component will handle it
    // This prevents double navigation which can cause issues on mobile
  };

  return (
    <Link
      href={href}
      className={combinedClassName}
      // Add aria-current attribute for accessibility (optional)
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
