"use client";

import React, { useCallback, useRef, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BestellenButton from '@/components/ui/bestellenButton'

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/knowei_website' : '';

// SVG Icons
const PlayIcon = () => (
  <svg 
    width="64" height="64" viewBox="0 0 64 64" fill="none" 
    stroke="#FAF7F3"
    strokeWidth="8"
  >
    <line x1="16" y1="10" x2="52" y2="34"></line>
    <line x1="48" y1="30" x2="18" y2="54"></line>
    <line x1="14" y1="52" x2="15" y2="12"></line>
  </svg>
)

const ArrowLeftIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4">
    <line x1="23" y1="4" x2="8" y2="19"></line>
    <line x1="23" y1="28" x2="7" y2="14"></line>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4">
    <line x1="9" y1="4" x2="24" y2="19"></line>
    <line x1="9" y1="28" x2="25" y2="14"></line>
  </svg>
)

const CloseIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="4">
    <line x1="23" y1="2" x2="2" y2="22"></line>
    <line x1="2" y1="3" x2="22" y2="22"></line>
  </svg>
)

interface Slide {
  id: number;
  video: string;
  title: string;
  desc: string;
  price: string; 
  format: string;
  details: string; 
  content: string[]; // Changed to array for bullet points
  image?: string; 
}

// Updated slides data
const slides: Slide[] = [
  { 
    id: 1, 
    video: `${basePath}/test_video_2.mp4`, // TODO AANPASSEN VIDEO
    title: 'CLOSING THE STRATEGY EXECUTIE GAP (JA ZEGGEN JA DOEN)', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 1.900',
    format: 'L',
    details: '2 - 12 deelnemers - 8 onderwerpen - specifiek',
    content: [
      'Beschrijving: Succesvolle organisaties slaan de brug tussen strategie en executie.  Elke organisatie heeft een formele kant — strategie, structuur en processen — en een informele kant — cultuur, gedrag, talenten, gewoonten en samenwerking.  Organisaties die deze twee kanten verbinden, maken niet alleen plannen, maar voeren ze ook echt uit.',
      'Nu: Toch ontstaat in veel organisaties een kloof tussen strategie en uitvoering. Onderzoek laat zien dat leiders vooral letten op de formele, tastbare kant: structuur, processen en regels. De informele kant — de manier waarop mensen met elkaar samenwerken — krijgt veel minder aandacht.  Juist daar zitten de grootste barrières. Niet in het bedenken van plannen, maar in het waarmaken ervan. We zeggen vaak “ja”, maar doen “nee”. We bouwen nieuwe structuren, maar de echte samenwerking blijft uit. De menselijke kant is complex: talenten, gewoonten, gedrag en relaties lopen door elkaar heen.',
      'Anders: Met deze toolbox krijg je als MT inzicht in alle knoppen die invloed hebben op jouw organisatie.  We creëren samen een helder beeld van het hele ecosysteem.  Daardoor zie je de interne en externe dynamiek, herken je de relaties tussen strategie, structuur, processen, way-of-working, cultuur, gedrag, talenten en interactie.  Met deze inzichten kun je gericht aan de juiste knoppen draaien om de strategie ook echt succesvol uit te voeren.',
    ]
  },
  { 
    id: 2, 
    video: `${basePath}/test_video_2.mp4`, 
    title: 'TACTISCH JAARPLAN (VAN  PLAN NAAR PRAKTIJK)', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 250',
    format: 'M',
    details: '4-16 deelnemers - 1 onderwerp - generiek',
    content: [
      'Beschrijving: Samen dragen we de verantwoordelijkheid om de ambitie waar te maken. Jij, als tactische leiding, zorgt samen met je team voor een goede balans tussen het werk en de mensen die beschikbaar zijn.',
      'Het nu: We maken veel plannen en schrijven veel memo’s, maar we overzien vaak niet wat de keuzes betekenen voor het werk. Daardoor ontstaat te veel werk, hoge werkdruk en veel ad‑hoc reparaties. Een deel van het werk voelt onvoorspelbaar en overkomt ons. We worden verrast in plaats van voorbereid.',
      'Het anders: Met een tactisch capaciteit jaarplan maak je het onvoorspelbare voorspelbaar. Door je jaarplan op te stellen kun je beter inschatten wat er op je afkomt. Je stuurt hierop, zodat de uitvoering aansluit bij wat nodig is. In de check kijk je terug en leer je van wat er is gebeurd. In de act stuur je bij waar dat nodig is. Met deze toolbox ben jij in staat om samen met je team het plan af te stemmen, de rollen duidelijk te krijgen en het CM‑proces effectief te implementeren. Zo groeit een jaarplan van een papieren document naar een praktisch instrument dat echt impact heeft in het dagelijks werk.',
    ]
  },
  { 
    id: 3, 
    video: `${basePath}/Box_Chemie_van_overleggen.mp4`, // TODO AANPASSEN VIDEO 
    title: 'CHEMIE VAN OVERLEGGEN', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 1.900',
    format: 'L',
    details: '1- 8 deelnemers - 1 onderwerp - generiek',
    content: [
      'Beschrijving: MT‑overleg werkt als een chemische reactie: kennis zet ideeën, als kleine atomen, in beweging. Wanneer de temperatuur stijgt door betrokkenheid, scherpe vragen of urgente situaties, gaan die ideeën sneller en krachtiger bewegen. Op het juiste moment botsen ze op elkaar en reageren ze, waardoor nieuwe inzichten, betere keuzes en gedeelde overtuigingen ontstaan. In zo’n reactie ontstaat richting, daadkracht en gezamenlijke verantwoordelijkheid.',
      'Het nu: De chemie is nu vaak te zwak. Overleggen duren lang, deelnemers haken af en besluiten komen moeizaam tot stand. Afspraken worden niet altijd nagekomen en de energie lekt weg. Het overleg voelt soms meer als een herhaling dan als een plek waar iets nieuws ontstaat.',
      'Het anders: Deze toolbox helpt om de chemie terug te brengen. Door helder te maken wie waarvan is, scherp te krijgen wat we samen willen bereiken en elkaar actief te helpen, ontstaat weer beweging en energie. Zo wordt het MT-overleg opnieuw een plek waar ideeën botsen, energie vrijkomt en gezamenlijke vooruitgang ontstaat.',
    ]
  },
  { 
    id: 4, 
    video: `${basePath}/test_video_2.mp4`, // TODO AANPASSEN VIDEO 
    title: 'DNA VAN TEAMS', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 3.900',
    format: 'XL',
    details: '4-16 deelnemers - 1 onderwerp - generiek',
    content: [
      'Beschrijving: Teaming betekent dat je samen een doel bereikt én samen impact maakt. Het is zowel inhoudelijk samenwerken als een proces van geven en nemen. In een team haal je soms het beste in elkaar naar boven, en soms ook het minder mooie. Dat hoort erbij. Een sterk team leert hiermee omgaan en blijft samen in beweging.',
      'Het nu: Vaak staat de veranderbereidheid en de samenwerking in het MT onder druk. Target druk, tegenvallende resultaten, aandeelhouders etc. Deze druk uit zich in langs elkaar werken, risicomijdend gedrag: bij lastige besluiten kijkt iedereen naar de CEO met de houding “besluit jij maar”. Dit heeft gevolgen: Minder werkplezier, Een onveilige en weinig lerende omgeving, het MT werkt niet op zijn best.',
      'Het anders: In deze toolbox leer je als team werken aan de bovenstroom én de onderstroom. In de bovenstroom zorgen we voor duidelijke kaders en transparantie, gunnen en begrenzen we elkaar, koppelen we taken aan talent en sturen we op prestaties terwijl we blijven ontdekken wat beter kan. In de onderstroom vergroten we ons zelfinzicht, creëren we veiligheid door naar elkaars perspectief te kijken, herkennen we groepspatronen en oefenen we nieuw, helpend gedrag dat we stap voor stap inslijpen. Zo groei je naar een team dat duidelijk, veilig, lerend en effectief samenwerkt — een team met een sterk DNA.',
    ]
  },
  { 
    id: 5, 
    video: `${basePath}/test_video_2.mp4`, // TODO VIDEO AANPASSEN
    title: 'VEILIG TEAM (having each other’s back)', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 1.900',
    format: 'L',
    details: '4-16 deelnemers - 1 onderwerp - specifiek',
    content: [
      'Beschrijving:  Een veilig team begint met vertrouwen. Teamleden voelen ruimte om conflicten op te lossen en moeilijke onderwerpen te bespreken. We kunnen gebeurtenissen uit het verleden een plek geven en samen bouwen aan een gezamenlijke toekomst.',
      'Nu:  Op dit moment vinden teamleden veel van elkaar. Er wordt achter elkaars rug om gepraat en iedereen werkt op zijn eigen manier. Verantwoordelijkheid nemen voor het eigen werk én voor het team staat op pauze. Dat kost energie en werkplezier. De manager moet het vaak oplossen, omdat het team er samen niet meer uitkomt.',
      'Anders:  Met deze toolbox leer je hoe je jouw team veilig en sterk maakt. Je werkt doelgericht samen, praat open en functioneel met elkaar en weet wat iedereen nodig heeft om goed te kunnen werken. We zeggen alleen “ja” als we het ook echt doen, en als er iets speelt, spreken we het meteen uit. Zo ontstaat ruimte om jezelf te zijn, erbij te horen en op elkaar te kunnen vertrouwen — ook als het even tegenzit.',
    ]
  },
  { 
    id: 6, 
    video: `${basePath}/test_video_2.mp4`, // TODO VIDEO AANPASSEN
    title: 'LEREN VAN DE TOEKOMST (EXPERIMENTEREN)', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 1.900',
    format: 'L',
    details: '1-8 deelnemers - 1 onderwerp - generiek',
    content: [
      'Beschrijving: Tijdreizen lijkt soms echt: hoe sneller je beweegt, hoe trager je tijd ervaart. Einstein liet met E = mc² zien dat energie en massa kunnen veranderen, en dat beweging invloed heeft op hoe we tijd beleven. Leren werkt eigenlijk hetzelfde. Uit het verleden halen we stabiliteit en bewezen werkwijzen. In het heden zoeken we efficiëntie en controle, bijvoorbeeld met PDCA of lean. En richting de toekomst kijken we naar nieuwe mogelijkheden, zoals design thinking, het U‑model en co‑creatie. Zo vormen verleden, heden en toekomst samen een reis van kennis en groei.',
      'Het nu: In veel projectteams gaat die reis stroef. Het team wil iets nieuws bedenken, maar elk idee wordt meteen tegengehouden met “ja maar”, “vroeger deden we het zo” of “dat heb ik al geprobeerd”. De energie zakt weg en innovatie komt niet van de grond.',
      'Het anders: Deze toolbox helpt je om anders te kijken en anders te werken. Je leert een eenvoudige cyclus van bouwen – meten – leren in te richten. Je ontdekt hoe je snel kleine experimenten bedenkt, duidelijke keuzes maakt, leert van ervaringen en succesvolle ideeën stap voor stap opschaalt. Zo beweeg je als team weer vooruit — met meer energie, meer lef en meer ruimte om te groeien.',
    ]
  },
  { 
    id: 7, 
    video: `${basePath}/test_video_2.mp4`, // TODO VIDEO AANPASSEN
    title: 'SAMEN ROOSTEREN, VRIJHEID EN VERANTWOORDELIJKHEID', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 1.900',
    format: 'L',
    details: '2-16  deelnemers - 1 onderwerp - specifiek',
    content: [
      'Beschrijving: Samenroosteren gaat over vrijheid. Niet vrijheid om te doen wat je wilt, maar vrijheid die ontstaat als je samen verantwoordelijkheid neemt. Je krijgt meer invloed op je rooster, kunt beter omgaan met privé‑situaties en werkt in een team dat elkaar helpt en versterkt.',
      'Het nu: Nu voelt die vrijheid vaak ver weg. Medewerkers klagen dat ze wéér met kerst moeten werken, hun voetbalavond missen of niet naar een verjaardag kunnen. Ze hebben het gevoel dat het rooster vooral wordt opgelegd. Als er gaten vallen, moeten ze extra werken, maar als zij iets nodig hebben, lijkt er weinig mogelijk. Het voelt alsof het rooster vóór hen wordt gemaakt, niet mét hen.',
      'Het anders: In deze toolbox zit en ervaar je een duidelijke aanpak voor samenroosteren, gebouwd op helderheid, afspraken en teamwork.  Je ontdekt eerst het waarom en het basiskader: wat ligt vast, welke ruimte is er, en wie bewaakt dat.  Daarna werk je stap voor stap aan een gemeenschappelijk game‑plan met concrete afspraken, praktische hulpmiddelen en een manier van werken die voor iedereen klopt. We gaan vervolgens oefenen in de praktijk: uitproberen, kijken wat werkt, bijsturen waar nodig.  Zo ontstaat een speelveld waarin vrijheid, verantwoordelijkheid en samenwerking samenkomen.  Het kader staat, het team is voorbereid — ready, set, go.',
    ]
  },
  { 
    id: 8, 
    video: `${basePath}/test_video_2.mp4`, 
    title: 'KERSTPAKKET', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 200',
    format: 'M',
    details: '1- 12 deelnemers - 4 onderwerpen - specifiek',
    content: [
      'Beschrijving:  Aan het eind van het jaar staan we stil bij alles wat mensen het hele jaar hebben gedaan. Het is een moment om samen af te sluiten en met een goed gevoel het nieuwe jaar in te gaan. Daarom krijgen 7,4 miljoen werknemers in Nederland een kerstpakket.',
      'Nu: Toch voelt een kerstpakket vaak te standaard en onpersoonlijk. Je krijgt kortingsbonnen waarbij je moet bijbetalen, of producten die je nooit gebruikt. Het gebaar is mooi, maar het raakt je niet echt.',
      'Anders: Dit pakket is anders. Het is met zorg samengesteld om alles wat de feestdagen soms zwaar maakt te verlichten en samen de mooiste periode mogelijk te maken.  Vanaf nu staat jullie nieuwsgierigheid centraal. Je vindt cadeaus die je kunnen verwonderen, je iets nieuws laten ontdekken en je helpen om te bouwen aan wat voor jou werkt.  Alle cadeaus zijn gemaakt om te delen met je dierbaren — oud, jong, mens en dier — zodat jullie samen kunnen vragen, helpen, spelen en bouwen. Er is altijd een vonkje nodig om tot vuurwerk te komen. Knallen maar.',
    ]
  },
  { 
    id: 9, 
    video: `${basePath}/test_video_2.mp4`, // TODO VIDEO AANPASSEN
    title: 'CURIOUSITY CABINET/CAMPUS', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 15.990',
    format: 'XXL',
    details: '20+ deelnemers - 12 onderwerpen - generiek & specifiek',
    content: [
      'Beschrijving: Iedere persoon, elk team en elke organisatie loopt wel eens vast. Er gebeuren onverwachte dingen en soms heb je niet de kennis of kunde in huis om het op te lossen. Dan heb je iemand nodig die je verder kan helpen.',
      'Nu: Maar er zijn zóveel coaches en consultants dat je door de bomen het bos niet meer ziet. Ze bieden allemaal iets anders aan, ze zijn vaak twee tot drie keer zo duur als je eigen personeel, en de oplossingen die ze geven helpen niet genoeg. Het blijft lastig, en je merkt dat je energie langzaam wegstroomt.',
      'Anders: Daarom is er nu een in‑house Kennis Kast: een Knowledge Cupboard met 12 werkvormen die de 8 meest voorkomende én 4 meest specifieke uitdagingen in jouw organisatie kunnen ondersteunen. Geen duur adviesbureau, geen brainstormmarathon, geen groepsuitje. Wel een uitnodiging om zelf aan de slag te gaan — DIY‑style. Zoals IKEA voor know‑how: jij bouwt, wij geven de onderdelen en het zetje.',
    ]
  },
  { 
    id: 10, 
    video: `${basePath}/test_video_2.mp4`, 
    title: 'RADI(C)AL', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 99',
    format: 'S',
    details: '1 deelnemer - 1 onderwerp - specifiek',
    content: [
      'Beschrijving: Iedereen werkt in de basis hetzelfde. Je lichaam vangt signalen op uit de buitenwereld. Emoties zijn als een schakelbak: ze helpen je sneller te gaan of terug te schakelen. Je hersenen sturen je gedrag aan. Maar ieder brein verwerkt signalen op zijn eigen manier, terwijl we vaak denken dat iedereen denkt zoals wij.',
      'Het nu: Een tiener die “ anders denkt” (ADHD, Dyslexie, Dyscalculie, Asperger) loopt daardoor snel vast op school, thuis en soms op werk. Overal verwachten mensen dat hij zich “vierkant” normaal gedraagt. Maar hij denkt rond en past niet precies in wat anderen vragen. Dat kost veel energie en voelt vaak alsof het nooit eens goed gaat.',
      'Het anders:  Met deze toolbox krijg je handvatten om in elkaars hoofd, hart en lijf te kijken, waardoor we dieper inzicht krijgen in elkaars denken en doen — en door even in elkaars schoenen te staan kan je blik op de werkelijkheid radicaal verschuiven.',
    ]
  },
  { 
    id: 11, 
    video: `${basePath}/test_video_2.mp4`, // TODO VIDEO AANPASSEN
    title: 'NOWAY ABBONNEMENT', 
    desc: 'Deze box daagt je uit en maakt je actief op het gebied van overleggen enzo.',
    price: '€ 149',
    format: 'S',
    details: '1 deelnemer - 4 onderwerpen - specifiek',
    content: [
      'Beschrijving: Iedereen maakt het wel eens mee. Er gebeuren onverwachte dingen en soms heb je niet de kennis of kunde in huis om het op te lossen. Dan heb je iemand nodig die je verder kan helpen.',
      'Nu:  Maar wie vraag je dan. En durf je dat wel te delen. Wat als iemand er iets van vindt. Vaak laten we het daarom maar zitten, tot we er echt niet meer omheen kunnen. Zo kunnen werkproblemen, hobby’s, vriendschappen of relaties langzaam bij je weglopen.',
      'Anders: Met een Knowei‑abonnement krijg je ieder kwartaal een verrassingspakket dat past bij jouw situatie.  Geen leraar, dokter of coach, maar een uitnodiging om zelf aan de slag te gaan — DIY‑style.  Zoals IKEA voor know‑how: jij bouwt, wij geven de onderdelen en het zetje. Dan merk je: wat vastzat komt los, waar energie lekte stroomt weer, en je droom komt dichterbij.  Je ontdekt dat je niet gek bent, maar slim op weg.',
    ]
  },
]

const ToolboxPopup = ({ slide, onClose }: { slide: Slide; onClose: () => void }) => {
  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 md:p-4 transition-opacity animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="bg-[var(--color-30)] w-full max-w-[95%] md:max-w-[80%] relative flex flex-col shadow-2xl overflow-hidden border-[4px] md:border-[8px] border-[var(--color-70)] h-[90%] md:h-[80%]" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-[4px] -right-[4px] md:-top-[8px] md:-right-[8px] w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[var(--color-70)] transition-all z-10 group text-[var(--color-30)] hover:text-[var(--color-50)]"
        >
          <CloseIcon color="currentColor" /> 
        </button>

        <div className="p-4 md:p-8 overflow-y-auto custom-scrollbar flex flex-col h-full">
          <h2 className="text-lg md:text-2xl font-bold text-[var(--color-70)] uppercase mb-2 pr-10">{slide.title}</h2>
          
          <div>
            <p className="text-sm md:text-lg text-[var(--color-90)] font-medium">Prijs: {slide.price}</p>
          </div>
          <div>
            <p className="text-sm md:text-lg text-[var(--color-90)] font-medium mb-2 md:mb-4">Formaat: {slide.format}</p>
          </div>
          <div>
            <p className="bg-[var(--color-10)] w-fit mb-4 md:mb-6 px-2 text-xs md:text-lg text-[var(--color-90)] font-medium">{slide.details}</p>
          </div>

          <div className="mb-4 md:mb-8">
            <span className="block text-sm md:text-md font-bold text-[var(--color-70)] uppercase mb-2">Inhoud</span>
            <ul className="list-disc text-[var(--color-90)] ml-4 md:ml-6 text-sm md:text-base space-y-4">
              {slide.content.map((item, index) => {
                const colonIndex = item.indexOf(':');
                if (colonIndex !== -1) {
                  const label = item.substring(0, colonIndex);
                  const content = item.substring(colonIndex + 1);
                  return (
                    <li key={index}>
                      <span className="font-bold">{label}:</span>{content}
                    </li>
                  );
                }
                return (
                  <li key={index}>{item}</li>
                );
              })}
            </ul>
          </div>
          
          <div className="flex flex-col mt-auto">
            <div>
              <p className="text-sm md:text-md text-[var(--color-90)] font-medium">Is dit precies wat je nodig hebt?</p>
            </div>

            <div className="flex items-end justify-between my-1 relative">
              <BestellenButton/>
              
              {slide.image && (
                <div className="hidden md:block w-32 h-32 ml-4">
                    <img src={slide.image} alt="" className="w-full h-full object-contain" />
                </div>
              )}
            </div>

            <div>
              <p className="text-xs md:text-md mt-1 text-[var(--color-90)] font-medium">Of kijk verder naar bestaande <a href="/#toolboxen" className="underline cursor-pointer" onClick={onClose}>toolboxen</a> of laten we samen een <a href="/#toolbox_op_maat" className="underline cursor-pointer" onClick={onClose}>toolbox op maat</a> ontwerpen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const VideoCard = ({ slide, onClick }: { slide: Slide; onClick: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="bg-[var(--color-30)] hover:bg-[var(--color-50)] overflow-hidden flex flex-col h-full relative group cursor-pointer transition-colors duration-300"
      onClick={onClick}
    >
      <div className="pt-6 px-6 w-full shrink-0 relative">
        <div className="relative h-48 w-full bg-black" onClick={togglePlay}>
          <video 
            ref={videoRef}
            src={slide.video}
            loop 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          
          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <PlayIcon />
            </div>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold mb-2 truncate text-[var(--color-70)]">{slide.title}</h3>
        <p className="text-sm mb-6 line-clamp-2 text-[var(--color-70)]">{slide.desc}</p>
        
        {/* Button */}
        <div className="flex justify-center mt-auto">
          {/* Prevent opening popup when directly clicking buy, or let it happen? 
              Assuming user intends to navigate. */}
          <div onClick={(e) => e.stopPropagation()}>
            <BestellenButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
      <div id="toolboxen" className="w-full bg-[var(--color-10)] flex flex-col items-center justify-center min-h-screen py-12 md:py-20">
          <div className="w-full px-4 mb-8 md:mb-12 pt-8">
              <h2 className="text-xl md:text-2xl font-bold text-center text-[var(--color-90)] mb-2">
                  Ontdek de toolboxen van anderen.
              </h2>
              <div className="text-center text-[var(--color-90)] max-w-3xl mx-auto space-y-2">
                <p className="text-sm md:text-lg leading-relaxed text-center text-[var(--color-90)]">
                  In deze shop vind je toolboxen van mensen zoals jij. Blader, kies en ontdek welke toolboxen voor anderen werken en misschien ook voor jou.
                </p>
              </div>
          </div>
        <div className="flex items-center gap-4 w-full max-w-[95%]">
          
          {/* Prev Button */}
          <button 
            onClick={scrollPrev}
            className="p-3 rounded-full hover:bg-[var(--color-30)] text-[var(--color-70)] transition-colors hidden md:block"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex -ml-4">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0 pl-4">
                  <VideoCard slide={slide} onClick={() => setSelectedSlide(slide)} />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={scrollNext}
            className="p-3  rounded-full hover:bg-[var(--color-30)] text-[var(--color-70)] transition-colors hidden md:block"
            aria-label="Next slide"
          >
            <ArrowRightIcon />
          </button>
          
        </div>
      </div>

      {selectedSlide && (
        <ToolboxPopup 
          slide={selectedSlide} 
          onClose={() => setSelectedSlide(null)} 
        />
      )}
    </>
  )
}