"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <nav className="flex justify-between items-center bg-neutral-900 py-3 px-6 border-b border-neutral-700">
      <div
        className="font-semibold text-2xl text-amber-200 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Logo
      </div>
      <div className="flex gap-6 items-center">
        <Link
          href="/"
          className={
            pathname === "/" ? "text-neutral-50 font-semibold" : "text-blue-500"
          }
        >
          Home
        </Link>
        <Link
          href="/info/about-us"
          className={
            pathname === "/info/about-us"
              ? "text-neutral-50 font-semibold"
              : "text-blue-500"
          }
        >
          About Us
        </Link>
        <Link
          href="/info/contact-us"
          className={
            pathname === "/info/contact-us"
              ? "text-neutral-50 font-semibold"
              : "text-blue-500"
          }
        >
          Contact Us
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          href="/register"
          className={
            pathname === "/register"
              ? "text-gray-100 font-semibold"
              : "text-gray-400"
          }
        >
          Register
        </Link>
        <Link
          href="/login"
          className={
            pathname === "/login" ? "text-gray-100 font-semibold" : "text-gray-400"
          }
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
