import Image from 'next/image';
import HeaderButton from '../ui/headerButton';

export default function Header() {
  return (
    <header className="relative w-full h-16 flex items-end pb-3 px-8 bg-[var(--color-30)] z-50 border-b-2 border-[var(--color-70)] sticky top-0">
      
      <div className="z-10">
        <Image src="/W 70.png" alt="KNOWEI" width={120} height={80} />
      </div>

      <div className="absolute right-1/2 flex gap-[var(--header-button-gap)] pr-[calc(var(--header-button-gap)/2)] items-end h-full">
        <HeaderButton href="/#home" text='toolboxen'/>
        <HeaderButton href="/#home" text='toolbox op maat'/>
      </div>

      <div className="absolute left-1/2 flex gap-[var(--header-button-gap)] pl-[calc(var(--header-button-gap)/2)] items-end h-full">
        <HeaderButton href="/#home" text='voorbeelden'/>
        <HeaderButton href="/#home" text='mijn verhaal'/>
      </div>

      <div className="ml-auto z-10">
        <Image src="/L 70.png" alt="LOGO" width={35} height={35} />
      </div>

    </header>
  );
}