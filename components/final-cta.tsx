import { WhatsappIcon } from "@/components/whatsapp-icon"

export const FinalCta = () => (
  <section className="bg-cream-100 py-16 sm:py-20">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        Ainda em dúvida? Um especialista te ajuda a escolher.
      </h2>
      <p className="max-w-xl text-navy-700">
        Conte como você dorme e receba indicações de colchão e conjunto box sob medida para o seu descanso.
      </p>
      <a
        href="#lojas"
        data-track="cta"
        data-placement="final"
        className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-8 py-4 text-base font-semibold text-cream-50 transition-colors hover:bg-navy-800"
      >
        <WhatsappIcon className="size-5" />
        Falar com um vendedor
      </a>
    </div>
  </section>
)
