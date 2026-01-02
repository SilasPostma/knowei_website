import Link from "next/link";

interface buttonProps {
  text: string;
  href: string;
}

export default function headerButton({ text, href }: buttonProps) {
  return (
    <Link 
      href={href}
      className="font-semibold text-[var(--color-70)] hover:bg-[var(--color-10)] px-2"
    >
      {text}
    </Link>
  );
}