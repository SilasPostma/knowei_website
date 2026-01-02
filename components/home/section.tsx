interface SectionProps {
  id: string;
  color: string;
}

export default function Section({ id, color }: SectionProps) {
  return (
    <section 
      id={id}
      style={{ backgroundColor: color }}
      className="w-screen h-screen flex items-center justify-center snap-start"
    >
    </section>
  );
}