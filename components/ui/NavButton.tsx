interface navButtonProps {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function navButton({ text, onClick, isActive }: navButtonProps) {
  // Should set a button to active if the user is scrolled to the corresponding scene
  //   const handleClick = () => {};
  //   const baseColor = isActive
  //     ? ""
  //     : "bg-[var(--nav-button-bg-color)] text-[var(--nav-button-text-color)]";

  return (
    <button
      //   onClick={handleClick}
      className={`
                text-gray-900
                hover:bg-[var(--nav-button-bg-color)] hover:text-[var(--nav-button-text-color)] transition-colors duration-200
                font-bold px-1
                `}
    >
      {text}
    </button>
  );
}
