import { useState } from "react";

/**
 * BestellenButton Component
 * Deze button genereert een mailto link en kopieert tegelijkertijd het e-mailadres naar het klembord.
 * De tekst verandert tijdelijk na het klikken voor visuele feedback.
 */

interface buttonProps {
  toolboxNaam?: string; // Dynamische naam voor de toolbox
}

export default function BestellenButton({ toolboxNaam = "[naam]" }: buttonProps) {
  const [buttonText, setButtonText] = useState("BESTELLEN");
  const email = "info@knowei.nl";
  const subject = `Interesse in Toolbox ${toolboxNaam}`;
  
  const bodyText = `Beste Knowei,

Ik heb interesse in de Toolbox ${toolboxNaam} en ontvang graag meer informatie over het plaatsen van een bestelling.

Kunt u contact met ons opnemen om de bestelling af te stemmen, inclusief het aantal boxen, de gewenste ondersteuning en de benodigde contact- en facturatiegegevens?

Alvast dank voor uw reactie.

Met vriendelijke groet,

[Naam]
[Organisatie]
[Telefoonnummer]
[E-mailadres]`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

  const handleClick = () => {
    // Kopieer het e-mailadres naar het klembord
    const textArea = document.createElement("textarea");
    textArea.value = email + '\n\n' + subject + '\n\n' + bodyText;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      
      // Update de knoptekst tijdelijk
      setButtonText("EMAIL GEKOPIEERD");
      setTimeout(() => {
        setButtonText("BESTELLEN");
      }, 1500);
    } catch (err) {
      console.error("Fout bij kopiëren", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <a 
      href={mailtoLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-block font-semibold text-[var(--color-10)] bg-[var(--color-70)] hover:text-[var(--color-50)] hover:bg-[var(--color-90)] px-2 w-fit transition-all duration-200 cursor-pointer min-w-[140px] text-center"
    >
      {buttonText}
    </a>
  );
}