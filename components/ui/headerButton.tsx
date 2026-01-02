interface buttonProps {
  text: string;
}

export default function headerButton({ text }: buttonProps) {
  return (
    <button 
      className="text"
    >
      {text}
    </button>
  );
}