"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BestellenButton from "@/components/ui/bestellenButton";
import Image from "next/image";

// SVG Icons

const ArrowLeftIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
  >
    <line x1="23" y1="4" x2="8" y2="19"></line>
    <line x1="23" y1="28" x2="7" y2="14"></line>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
  >
    <line x1="9" y1="4" x2="24" y2="19"></line>
    <line x1="9" y1="28" x2="25" y2="14"></line>
  </svg>
);

const CloseIcon = ({ color }: { color: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="4"
  >
    <line x1="23" y1="2" x2="2" y2="22"></line>
    <line x1="2" y1="3" x2="22" y2="22"></line>
  </svg>
);

interface Slide {
  id: number;
  video: string;
  title: string;
  desc: string;
  price: string;
  format: string;
  details: string;
  content: string[];
  image?: string;
  bg_color?: string;
}

// Updated slides data
const slides: Slide[] = [
  {
    id: 1,
    video: "7Tg44FATRPA",
    title: "TACTISCH JAARPLAN",
    desc: "Deze box helpt je om van plan naar praktijk te gaan, zodat je jaarplan echt gaat werken in je dagelijks werk.",
    price: "€ 250",
    format: "M",
    details: "4-16 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: Samen dragen we de verantwoordelijkheid om de ambitie waar te maken. Jij, als tactische leiding, zorgt samen met je team voor een goede balans tussen het werk en de mensen die beschikbaar zijn.",
      "Het nu: We maken veel plannen en schrijven veel memo’s, maar we overzien vaak niet wat de keuzes betekenen voor het werk. Daardoor ontstaat te veel werk, hoge werkdruk en veel ad‑hoc reparaties. Een deel van het werk voelt onvoorspelbaar en overkomt ons. We worden verrast in plaats van voorbereid.",
      "Het anders: Met een tactisch capaciteitsjaarplan maak je het onvoorspelbare voorspelbaar. Door je jaarplan op te stellen kun je beter inschatten wat er op je afkomt. Je stuurt hierop, zodat de uitvoering aansluit bij wat nodig is. In de check kijk je terug en leer je van wat er is gebeurd. In de act stuur je bij waar dat nodig is. Met deze toolbox ben jij in staat om samen met je team het plan af te stemmen, de rollen duidelijk te krijgen en het CM‑proces effectief te implementeren. Zo groeit een jaarplan van een papieren document naar een praktisch instrument dat echt impact heeft in het dagelijks werk.",
    ],
  },
  {
    id: 2,
    video: "h3-h0J-ynUk",
    title: "CHEMIE VAN OVERLEGGEN",
    desc: "Deze box helpt je om van overleg waar energie weglekt naar echte chemie te gaan, zodat ideeën weer botsen en vooruitgang ontstaat.",
    price: "€ 1.900",
    format: "L",
    details: "1- 8 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: MT‑overleg werkt als een chemische reactie: kennis zet ideeën, als kleine atomen, in beweging. Wanneer de temperatuur stijgt door betrokkenheid, scherpe vragen of urgente situaties, gaan die ideeën sneller en krachtiger bewegen. Op het juiste moment botsen ze op elkaar en reageren ze, waardoor nieuwe inzichten, betere keuzes en gedeelde overtuigingen ontstaan. In zo’n reactie ontstaat richting, daadkracht en gezamenlijke verantwoordelijkheid.",
      "Het nu: De chemie is nu vaak te zwak. Overleggen duren lang, deelnemers haken af en besluiten komen moeizaam tot stand. Afspraken worden niet altijd nagekomen en de energie lekt weg. Het overleg voelt soms meer als een herhaling dan als een plek waar iets nieuws ontstaat.",
      "Het anders: Deze toolbox helpt om de chemie terug te brengen. Door helder te maken wie waarvan is, scherp te krijgen wat we samen willen bereiken en elkaar actief te helpen, ontstaat weer beweging en energie. Zo wordt het MT-overleg opnieuw een plek waar ideeën botsen, energie vrijkomt en gezamenlijke vooruitgang ontstaat.",
    ],
  },
  {
    id: 3,
    video: "GlcdzoO09bI",
    title: "LEREN VAN DE TOEKOMST",
    desc: "Deze box helpt je om van “ja‑maar” naar “ wat-als” te gaan, met experimenten en kleine stappen uitgroeien tot echte vooruitgang.",
    price: "€ 1.900",
    format: "L",
    details: "1-8 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: Tijdreizen lijkt soms echt: hoe sneller je beweegt, hoe trager je tijd ervaart. Einstein liet met E = mc² zien dat energie en massa kunnen veranderen, en dat beweging invloed heeft op hoe we tijd beleven. Leren werkt eigenlijk hetzelfde. Uit het verleden halen we stabiliteit en bewezen werkwijzen. In het heden zoeken we efficiëntie en controle, bijvoorbeeld met PDCA of lean. En richting de toekomst kijken we naar nieuwe mogelijkheden, zoals design thinking, het U‑model en co‑creatie. Zo vormen verleden, heden en toekomst samen een reis van kennis en groei.",
      "Het nu: In veel projectteams gaat die reis stroef. Het team wil iets nieuws bedenken, maar elk idee wordt meteen tegengehouden met “ja maar”, “vroeger deden we het zo” of “dat heb ik al geprobeerd”. De energie zakt weg en innovatie komt niet van de grond.",
      "Het anders: Deze toolbox helpt je om anders te kijken en anders te werken. Je leert een eenvoudige cyclus van bouwen – meten – leren in te richten. Je ontdekt hoe je snel kleine experimenten bedenkt, duidelijke keuzes maakt, leert van ervaringen en succesvolle ideeën stap voor stap opschaalt. Zo beweeg je als team weer vooruit — met meer energie, meer lef en meer ruimte om te groeien.",
    ],
  },
  {
    id: 4,
    video: "RJyWo-2tTvo",
    title: "SAMEN ROOSTEREN",
    desc: "Deze box ondersteunt je om van gestuurd worden naar zelf sturen te gaan: samen bouwen aan een rooster dat vrijheid geeft en de werk‑privébalans versterkt.",
    price: "€ 1.900",
    format: "L",
    details: "2-16  deelnemers - 1 onderwerp - specifiek",
    content: [
      "Beschrijving: Samenroosteren gaat over vrijheid. Niet vrijheid om te doen wat je wilt, maar vrijheid die ontstaat als je samen verantwoordelijkheid neemt. Je krijgt meer invloed op je rooster, kunt beter omgaan met privé‑situaties en werkt in een team dat elkaar helpt en versterkt.",
      "Het nu: Nu voelt die vrijheid vaak ver weg. Medewerkers klagen dat ze wéér met kerst moeten werken, hun voetbalavond missen of niet naar een verjaardag kunnen. Ze hebben het gevoel dat het rooster vooral wordt opgelegd. Als er gaten vallen, moeten ze extra werken, maar als zij iets nodig hebben, lijkt er weinig mogelijk. Het voelt alsof het rooster vóór hen wordt gemaakt, niet mét hen.",
      "Het anders: In deze toolbox zit en ervaar je een duidelijke aanpak voor samenroosteren, gebouwd op helderheid, afspraken en teamwork.  Je ontdekt eerst het waarom en het basiskader: wat ligt vast, welke ruimte is er, en wie bewaakt dat.  Daarna werk je stap voor stap aan een gemeenschappelijk game‑plan met concrete afspraken, praktische hulpmiddelen en een manier van werken die voor iedereen klopt. We gaan vervolgens oefenen in de praktijk: uitproberen, kijken wat werkt, bijsturen waar nodig.  Zo ontstaat een speelveld waarin vrijheid, verantwoordelijkheid en samenwerking samenkomen.  Het kader staat, het team is voorbereid — ready, set, go.",
    ],
  },
  {
    id: 5,
    video: "VUgebN2Y8go",
    title: "KERSTPAKKET",
    desc: "Deze box laat je waardering voelen en helpt je om van standaard naar speciaal te gaan, met cadeaus die écht raken en de feestdagen mooier maken.",
    price: "€ 200",
    format: "M",
    details: "1- 12 deelnemers - 4 onderwerpen - specifiek",
    content: [
      "Beschrijving:  Aan het eind van het jaar staan we stil bij alles wat mensen het hele jaar hebben gedaan. Het is met zorg samengesteld om alles wat de feestdagen soms zwaar maakt te verlichten en samen de mooiste periode mogelijk te maken. Daarom krijgen 7,4 miljoen werknemers in Nederland een kerstpakket.",
      "Nu: Toch voelt een kerstpakket vaak te standaard en onpersoonlijk. Je krijgt kortingsbonnen waarbij je moet bijbetalen, of producten die je nooit gebruikt. Het gebaar is mooi, maar het raakt je niet echt.",
      "Anders: Dit pakket is anders. Het is met zorg samengesteld om alles wat de feestdagen soms zwaar maakt te verlichten en samen de mooiste periode mogelijk te maken.  Vanaf nu staat jullie nieuwsgierigheid centraal. Je vindt cadeaus die je kunnen verwonderen, je iets nieuws laten ontdekken en je helpen om te bouwen aan wat voor jou werkt.  Alle cadeaus zijn gemaakt om te delen met je dierbaren — oud, jong, mens en dier — zodat jullie samen kunnen vragen, helpen, spelen en bouwen. Er is altijd een vonkje nodig om tot vuurwerk te komen. Knallen maar.",
    ],
  },
  {
    id: 6,
    video: "I-I12EajRjE",
    title: "RADI(C)AL",
    desc: "Deze box helpt je om van aannames naar begrip te gaan, door echt te zien hoe verschillend we denken",
    price: "€ 99",
    format: "S",
    details: "1 deelnemer - 1 onderwerp - specifiek",
    content: [
      "Beschrijving: Iedereen werkt in de basis hetzelfde. Je lichaam vangt signalen op uit de buitenwereld. Emoties zijn als een schakelbak: ze helpen je sneller te gaan of terug te schakelen. Je hersenen sturen je gedrag aan. Maar ieder brein verwerkt signalen op zijn eigen manier, terwijl we vaak denken dat iedereen denkt zoals wij.",
      "Het nu: Een tiener die “anders denkt” (ADHD, Dyslexie, Dyscalculie, Asperger) loopt daardoor snel vast op school, thuis en soms op werk. Overal verwachten mensen dat hij zich “vierkant” normaal gedraagt. Maar hij denkt rond en past niet precies in wat anderen vragen. Dat kost veel energie en voelt vaak alsof het nooit eens goed gaat.",
      "Het anders:  Met deze toolbox krijg je handvatten om in elkaars hoofd, hart en lijf te kijken, waardoor we dieper inzicht krijgen in elkaars denken en doen — en door even in elkaars schoenen te staan kan je blik op de werkelijkheid radicaal verschuiven.",
    ],
  },
  {
    id: 7,
    video: "JWd-iQHdjOo",
    title: "ZWARTE DOOS van ORGANISATIES",
    desc: "Blinde vlekken in organisaties zijn de patronen die we zelf niet meer zien omdat we er middenin zitten.",
    price: "€ 25",
    format: "S",
    details: "1-8 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: Blinde vlekken in organisaties zijn de patronen die we zelf niet meer zien omdat we er middenin zitten. In veel organisaties noemen we dat al snel: “zo is het nu eenmaal hier”. We werken al jaren op een bepaalde manier en bij de koffieautomaat merken we steeds weer op dat het beter of anders kan, maar in de praktijk blijven dezelfde gewoontes terugkomen. Daardoor zien we niet altijd wat ons werkelijk tegenhoudt. De grootste obstakels zitten vaak in die onuitgesproken routines en aannames die iedereen voelt, maar niemand benoemt. Het is de zwarte doos waarvan we weten dat hij er is, maar die we zelden openen — precies daar liggen de patronen die ons als organisatie blijven vertragen.",
      "Het nu: Je bedrijf groeit — en dat is prachtig, maar het maakt alles ook ingewikkelder. Meer klanten, meer mensen, meer keuzes. En ondertussen moet jij het overzicht houden, terwijl de complexiteit toeneemt en de schaalbaarheid onder druk staat. Waar groei en grip elkaar vinden, ligt precies de uitdaging waar jij dagelijks doorheen navigeert.",
      "Het anders: met deze toolbox krijg je in 5 minuten inzicht in de grootste obstakels in jouw werk, team of organisatie. Je ziet snel welke punten de meeste frustratie geven en welke impact het heeft als je ze oplost. Daarna stuur jij de foto door, en wij staan klaar om jouw uitbreidingsset op maat te maken. Zodat je precies de tools krijgt die je nodig hebt om verder te bouwen aan de oplossing die werkt.",
    ],
    bg_color: "#de9889",
  },
  {
    id: 8,
    video: "qDYY-MStyBg",
    title: "ZWARTE DOOS van SAMENWERKEN",
    desc: "Blinde vlekken in de samenwerking zijn de patronen die we zelf niet meer zien omdat we er middenin zitten.",
    price: "€ 25",
    format: "S",
    details: "1-8 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: Blinde vlekken in de samenwerking zijn de patronen die we zelf niet meer zien omdat we er middenin zitten. In veel organisaties noemen we dat al snel: “zo is het nu eenmaal hier”. We werken al jaren op een bepaalde manier en bij de koffieautomaat merken we steeds weer op dat het beter of anders kan, maar in de praktijk blijven dezelfde gewoontes terugkomen. Daardoor zien we niet altijd wat ons werkelijk tegenhoudt. De grootste obstakels zitten vaak in die onuitgesproken routines en aannames die iedereen voelt, maar niemand benoemt. Het is de zwarte doos waarvan we weten dat hij er is, maar die we zelden openen — precies daar liggen de patronen die ons als organisatie blijven vertragen.",
      "Het nu: Elke dag zoeken jullie naar een goede balans tussen werk en privé, terwijl je gemotiveerd wilt blijven in een omgeving waar de inspraak soms beperkt is. Tegelijk moet het werk efficiënter, maar wil je het werkplezier behouden. En ergens tussendoor wil je ook nog kansen om je te ontwikkelen, door verschillende taken op te pakken en mee te denken over hoe het beter kan. Precies daar, waar vrijheid en verantwoordelijkheid elkaar raken, ontstaan jullie echte uitdaging.",
      "Het anders: met deze toolbox krijg je in 5 minuten inzicht in de grootste obstakels in jouw werk, team of organisatie. Je ziet snel welke punten de meeste frustratie geven en welke impact het heeft als je ze oplost. Daarna stuur jij de foto door, en wij staan klaar om jouw uitbreidingsset op maat te maken. Zodat je precies de tools krijgt die je nodig hebt om verder te bouwen aan de oplossing die werkt.",
    ],
    bg_color: "#8fc9aa",
  },
  {
    id: 9,
    video: "fCI8pbTX4to",
    title: "ZWARTE DOOS van ONTWIKKELEN",
    desc: "Blinde vlekken in de ontwikkeling/ leren zijn de patronen die we zelf niet meer zien omdat we er middenin zitten.",
    price: "€ 25",
    format: "S",
    details: "1-8 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: Blinde vlekken in de ontwikkeling/ leren zijn de patronen die we zelf niet meer zien omdat we er middenin zitten. In veel organisaties noemen we dat al snel: “zo is het nu eenmaal hier”. We werken al jaren op een bepaalde manier en bij de koffieautomaat merken we steeds weer op dat het beter of anders kan, maar in de praktijk blijven dezelfde gewoontes terugkomen. Daardoor zien we niet altijd wat ons werkelijk tegenhoudt. De grootste obstakels zitten vaak in die onuitgesproken routines en aannames die iedereen voelt, maar niemand benoemt. Het is de zwarte doos waarvan we weten dat hij er is, maar die we zelden openen — precies daar liggen de patronen die ons als organisatie blijven vertragen.",
      "Het nu: Een onduidelijke koers die schuift, KPI’s die niet haalbaar voelen, een structuur die vastloopt in silo’s of juist chaotisch is. Leiderschap dat soms te veel en soms te weinig eigenaarschap neemt. Teams waar onveiligheid, roddel of conflict onder de oppervlakte blijft. En overleggen die meer energie kosten dan opleveren. Precies daar, waar organisaties vastlopen, ontstaat de kans om weer vooruit te komen.",
      "Het anders: met deze toolbox krijg je in 5 minuten inzicht in de grootste obstakels in jouw werk, team of organisatie. Je ziet snel welke punten de meeste frustratie geven en welke impact het heeft als je ze oplost. Daarna stuur jij de foto door, en wij staan klaar om jouw uitbreidingsset op maat te maken. Zodat je precies de tools krijgt die je nodig hebt om verder te bouwen aan de oplossing die werkt.",
    ],
    bg_color: "#9b9fba",
  },
  {
    id: 10,
    video: "9aywkjfnFJk",
    title: "ZWARTE DOOS van MANAGEMENT",
    desc: "Blinde vlekken in het management zijn de patronen die we zelf niet meer zien omdat we er middenin zitten.",
    price: "€ 25",
    format: "S",
    details: "1-8 deelnemers - 1 onderwerp - generiek",
    content: [
      "Beschrijving: Blinde vlekken in het management zijn de patronen die we zelf niet meer zien omdat we er middenin zitten. In veel organisaties noemen we dat al snel: “zo is het nu eenmaal hier”. We werken al jaren op een bepaalde manier en bij de koffieautomaat merken we steeds weer op dat het beter of anders kan, maar in de praktijk blijven dezelfde gewoontes terugkomen. Daardoor zien we niet altijd wat ons werkelijk tegenhoudt. De grootste obstakels zitten vaak in die onuitgesproken routines en aannames die iedereen voelt, maar niemand benoemt. Het is de zwarte doos waarvan we weten dat hij er is, maar die we zelden openen — precies daar liggen de patronen die ons als organisatie blijven vertragen.",
      "Het nu: In het midden zitten betekent elke dag balanceren: de top tevreden houden, je team ondersteunen, en ondertussen zelf overeind blijven. Middle management dat voortdurend schakelt tussen geluk en efficiëntie, tussen mens en resultaat.Precies daar, waar mensen en meters elkaar raken, maak jij het verschil.",
      "Het anders: met deze toolbox krijg je in 5 minuten inzicht in de grootste obstakels in jouw werk, team of organisatie. Je ziet snel welke punten de meeste frustratie geven en welke impact het heeft als je ze oplost. Daarna stuur jij de foto door, en wij staan klaar om jouw uitbreidingsset op maat te maken. Zodat je precies de tools krijgt die je nodig hebt om verder te bouwen aan de oplossing die werkt.",
    ],
    bg_color: "#d0b189",
  },
];

const ToolboxPopup = ({
  slide,
  onClose,
}: {
  slide: Slide;
  onClose: () => void;
}) => {
  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 md:p-4 transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[var(--color-30)] w-full max-w-[95%] md:max-w-[80%] relative flex flex-col shadow-2xl overflow-hidden border-[4px] md:border-[8px] border-[var(--color-70)] h-[90%] md:h-[80%]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        title="Toolbox Bestellen"
      >
        <button
          onClick={onClose}
          className="absolute -top-[4px] -right-[4px] md:-top-[8px] md:-right-[8px] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[var(--color-70)] transition-all z-10 group text-[var(--color-30)] hover:text-[var(--color-50)]"
        >
          <CloseIcon color="currentColor" />
        </button>

        <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar flex flex-col h-full no-scrollbar">
          <h2 className="text-lg md:text-2xl font-bold text-[var(--color-70)] uppercase mb-2 md:mb-4 pr-10">
            {slide.title}
          </h2>

          <div>
            <p className="text-sm md:text-lg text-[var(--color-90)] font-medium">
              Prijs: {slide.price}
            </p>
          </div>
          <div>
            <p className="text-sm md:text-lg text-[var(--color-90)] font-medium mb-2 md:mb-4">
              Formaat: {slide.format}
            </p>
          </div>
          <div>
            <p className="bg-[var(--color-10)] w-fit mb-4 md:mb-6 px-2 text-xs md:text-lg text-[var(--color-90)] font-medium">
              {slide.details}
            </p>
          </div>

          <div className="mb-4 md:mb-8">
            <span className="block text-md md:text-lg font-bold text-[var(--color-90)] uppercase mb-2">
              Inhoud
            </span>
            <ul className="list-disc text-[var(--color-90)] ml-4 md:ml-6 text-sm md:text-base space-y-4">
              {slide.content.map((item, index) => {
                const colonIndex = item.indexOf(":");
                if (colonIndex !== -1) {
                  const label = item.substring(0, colonIndex);
                  const content = item.substring(colonIndex + 1);
                  return (
                    <li key={index}>
                      <span className="font-bold">{label}:</span>
                      {content}
                    </li>
                  );
                }
                return <li key={index}>{item}</li>;
              })}
            </ul>

            <div className="mt-8 mb-8 justify-center flex">
              <div className="relative w-full md:w-[75%] lg:w-[50%] aspect-video bg-black shadow-lg border-2 border-[var(--color-70)]">
                <iframe
                  src={`https://www.youtube.com/embed/${slide.video}?rel=0`}
                  title={slide.title}
                  className="absolute top-0 left-0 w-full h-full "
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-auto">
            <div>
              <p className="text-sm md:text-base text-[var(--color-90)] font-medium mb-1">
                Is dit precies wat je nodig hebt?
              </p>
            </div>

            <div className="flex items-end justify-between my-1 relative">
              <BestellenButton />

              {slide.image && (
                <div className="hidden md:block w-32 h-32 ml-4 relative">
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            <div>
              <p className="text-sm md:text-base mt-1 text-[var(--color-90)] font-medium">
                Of kijk verder naar bestaande{" "}
                <a
                  href="#toolboxen"
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    setTimeout(() => {
                      document
                        .getElementById("toolboxen")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  toolboxen
                </a>{" "}
                of laten we samen een{" "}
                <a
                  href="#toolbox_op_maat"
                  className="underline cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    setTimeout(() => {
                      document
                        .getElementById("toolbox_op_maat")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  toolbox op maat
                </a>{" "}
                ontwerpen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({
  slide,
  onClick,
}: {
  slide: Slide;
  onClick: () => void;
}) => {
  const bgStyle = slide.bg_color
    ? { backgroundColor: slide.bg_color }
    : undefined;

  const textColorClass = slide.bg_color
    ? "text-white"
    : "text-[var(--color-70)]";

  return (
    <div
      className={`
        overflow-hidden flex flex-col h-full relative group cursor-pointer 
        transition-all duration-300 
        hover:brightness-90 
        ${!slide.bg_color ? "bg-[var(--color-30)] hover:bg-[var(--color-50)]" : ""}
      `}
      style={bgStyle}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="pt-6 px-6 w-full shrink-0 relative">
        <div className="relative h-48 w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${slide.video}`}
            title={slide.title}
            className="w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`p-6 flex flex-col grow ${slide.bg_color ? "text-[#fdf7ef]" : ""}`}
      >
        <h3
          className={`sm:text-md xl:text-lg font-bold mb-2 line-clamp-2 min-h-[4rem] ${textColorClass}`}
        >
          {slide.title}
        </h3>
        <p className={`text-sm xl:text-base mb-6 ${textColorClass}`}>
          {slide.desc}
        </p>

        {/* Button */}
        <div className="flex justify-center mt-auto">
          <div onClick={(e) => e.stopPropagation()}>
            <BestellenButton variant={slide.bg_color ? "colored" : undefined} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div
        id="toolboxen"
        className="w-full bg-[var(--color-10)] flex flex-col items-center min-h-screen pb-12 md:pb-20 pt-8 md:pt-16"
      >
        {/* Top half area - centers text between top and carousel */}
        <div className="flex-1 flex flex-col justify-center overflow-hidden w-full">
          <div className="w-full px-4 text-[var(--color-90)] ">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 tablet-text">
              Ontdek de toolboxen van anderen.
            </h2>
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <p className="text-sm md:text-lg leading-relaxed text-center tablet-text">
                In deze shop vind je toolboxen van mensen zoals jij.
              </p>
              <p className="text-sm md:text-lg leading-relaxed text-center tablet-text">
                Blader, kies en ontdek welke toolboxen voor anderen werken en
                misschien ook voor jou.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel - centered in the screen */}
        <div className="flex relative items-center justify-center md:gap-4 w-full max-w-[95%] shrink-0">
          {/* Prev Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 z-20 md:static p-3 rounded-full bg-[rgba(0,0,0,0.3)] md:bg-transparent hover:bg-[var(--color-50)] text-white md:text-[var(--color-70)] transition-colors block"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex -ml-4">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%] 2xl:flex-[0_0_25%] min-w-0 pl-4"
                >
                  <VideoCard
                    slide={slide}
                    onClick={() => setSelectedSlide(slide)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute right-2 z-20 md:static p-3 rounded-full bg-[rgba(0,0,0,0.3)] md:bg-transparent hover:bg-[var(--color-50)] text-white md:text-[var(--color-70)] transition-colors block"
            aria-label="Next slide"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Bottom balancing space */}
        <div className="flex-1" />
      </div>

      {selectedSlide && (
        <ToolboxPopup
          slide={selectedSlide}
          onClose={() => setSelectedSlide(null)}
        />
      )}
    </>
  );
}
