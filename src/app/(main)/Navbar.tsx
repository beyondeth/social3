import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Image from "next/image";
import Link from "next/link";
import hashlogo from "@/assets/hashlogo.webp";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          <Image src={hashlogo} alt="Logo" width={70} height={70} priority />
        </Link>
        <SearchField />

        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
