import PortraitPhoto from '@/public/Nicolas.png'
import Signature from '@/public/krabbel_transparant.png'

import Image from 'next/image';

export default function AboutSection() {
    return (
    <div id="mijn_verhaal" className="bg-[var(--color-30)] min-h-screen flex flex-col items-center justify-center px-4 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="bg-[var(--color-10)] w-full grow min-h-[50vh] flex flex-col md:flex-row">
        
        {/* Portrait Photo - stacks on top for mobile, left side for tablet+ */}
        <div className="flex-shrink-0 flex justify-center md:justify-start p-4 md:p-6 lg:p-8">
          <Image 
            src={PortraitPhoto} 
            alt="Nicolas" 
            width={200} 
            height={200} 
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 p-4 md:p-6 md:pt-15 lg:p-8 lg:pt-20 text-[var(--color-90)] text-base md:text-base lg:text-lg">
          {/* Mobile Text (Visible only on mobile) */}
          <div className="block md:hidden">
            <p className="mb-3">
              Ik zocht altijd hoe het anders kon. Vaak liep ik vast of verloor ik
              energie, geduwd in het keurslijf van ‘zoals het hoort’(No Way!).
            </p>
            <p className="mb-3">
              Tot nieuwsgierigheid me liet ontdekken wat wél werkt. Niet door
              oplossingen te geven, maar door mensen zelf te laten ervaren en
              bouwen.
            </p>
            <p className="mb-3">
              Dat werd Knowei: begrijpen (KNOW) én ervaren(WEI).
            </p>
            <p>Ik ben benieuwd wat jouw Knowei is.</p>
            <Image
              src={Signature}
              alt="Signature"
              width={100}
              height={100}
              className="w-20 mt-4 ml-auto block"
            />
          </div>

          {/* Desktop Text (Visible only on desktop/tablet) */}
          <div className="hidden md:block">
            <p className="mb-3">
              Als jongste van vijf jongens vroeg ik me af hoe ik iets kon krijgen
              als ik de zwakste was. Als student wilde ik iets doen dat leuk
              was. Als partner zocht ik balans tussen mijn wensen en die van de
              ander. Als vader wilde ik opvoeden dat leuk, gezond en veilig was.
              Als consultant wilde ik mensen en bedrijven helpen groeien.
            </p>
            <p className="mb-3">
              Vaak voelde ik me te zwak. Studeren en werken waren saai. Ik kreeg
              ruzie omdat ik gelijk wilde hebben. Ik werd de boeman, de verkoper
              van standaardoplossingen. Steeds weer stroomde mijn energie weg.
              Het leek alsof de donkere gedachte won: "Zo doen we dat hier,
              gedraag je zoals het hoort."
            </p>
            <p className="mb-3">
              Toch was er steeds één sleutel: nieuwsgierigheid. Nieuwsgierigheid
              om te begrijpen hoe het anders kan, om te onderzoeken wat mogelijk
              is, om te ervaren wat wel en niet werkt. Ik probeerde oplossingen
              te vinden. De eerste keer probeerde ik de corporate ladder te
              beklimmen om macht te krijgen en het anders vorm te geven. Maar hoe
              hoger ik kwam, hoe meer ik vastzat in het keurslijf van de top:
              macht, politiek spel en 24/7 werken. De tweede keer wilde ik
              werken leuk maken en als consultant van buiten naar binnen
              verandering brengen. Mensen willen wel veranderen, maar niet
              veranderd worden. Ik leek succesvol, maar de veranderingen bleven
              klein en klanten hadden mij steeds opnieuw nodig. Het voelde alsof
              ik in cirkels liep. De derde keer gaf nieuwsgierigheid energie. Ik
              ontdekte dat ik de oplossingen niet hoef aan te dragen. Iedereen
              kan die het beste zelf vinden door te ervaren en te begrijpen. Als
              ik de juiste middelen geef, komen mensen er ineens wél. Ik kon
              rustig in een hoek zitten en genieten van hoe mensen zelf hun
              oplossingen vol energie en overtuiging vonden.
            </p>
            <p className="mb-3">
              Wat nu echt anders kan, is dat we alles uit onszelf benutten. Niet
              alleen denken, maar ook ervaren. Niet automatisch in de routine
              schieten, maar stilstaan en onderzoeken.
            </p>

            {/* Signature floated left so text wraps around it */}
            <Image
              src={Signature}
              alt="Signature"
              width={100}
              height={100}
              className="float-right mr-8 mb-2 w-20 md:w-24 lg:w-28"
            />
            <p>
              Mijn anders is Knowei: een plek waar nieuwsgierigheid de ruimte
              krijgt. Waar je bouwt aan jouw oplossing door te begrijpen (KNOW)
              én door te ervaren (WEI). Ben benieuwd wat jou Knowei is.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
