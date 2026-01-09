import Link from "next/link";

interface buttonProps {
  href: string;
}

export default function bestellenButton({ href }: buttonProps) {
  return (
    <Link 
      href={href}
      className="font-semibold text-[var(--color-10)] bg-[var(--color-70)] hover:text-[var(--color-50)] hover:bg-[var(--color-90)] px-2 w-fit"
    >
      BESTELLEN
    </Link>
  );
}