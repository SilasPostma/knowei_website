// components/home/section.tsx
interface SectionProps {
  id: string;
  color: string;
  children?: React.ReactNode;
  className?: string; // Added for flexibility
}

export default function Section({ id, color, children, className = "" }: SectionProps) {
  return (
    <section 
      id={id}
      style={{ backgroundColor: color }}
      className={`w-full min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}