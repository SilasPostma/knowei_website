import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative w-full h-16 flex items-end pb-3 px-8 bg-[var(--color-30)] z-50 border-b-2 border-[var(--color-70)] sticky top-0">
      
      <div className="z-10">
        <Image src="/W 70.png" alt="KNOWEI" width={120} height={80} />
      </div>

      <div className="absolute right-1/2 flex gap-15 pr-7.5 items-end h-full">
        <Link href="/#home" className="text-sm font-medium hover:opacity-70 transition-opacity">Home</Link>
        <Link href="/#about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
      </div>

      <div className="absolute left-1/2 flex gap-15 pl-7.5 items-end h-full">
        <Link href="/#services" className="text-sm font-medium hover:opacity-70 transition-opacity">Services</Link>
        <Link href="/#contact" className="text-sm font-medium hover:opacity-70 transition-opacity">Contact</Link>
      </div>

      <div className="ml-auto z-10">
        <Image src="/L 70.png" alt="LOGO" width={35} height={35} />
      </div>

    </header>
  );
}