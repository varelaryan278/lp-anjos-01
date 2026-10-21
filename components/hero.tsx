import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { WhatsappIcon } from "@/components/whatsapp-icon"

const highlights = [
  { value: "+50", label: "anos de tradição" },
  { value: "5", label: "lojas na região" },
  { value: "3", label: "cidades atendidas" },
]

export const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-navy-950 text-cream-50">
    <Image src="/hero-bg.jpeg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-70" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex flex-col gap-8">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold-400">Londrina · Rolândia · Cambé</p>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          Durma melhor com quem cuida do seu descanso <span className="text-gold-400">há mais de 50 anos.</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-cream-50/80 sm:text-lg">
          Colchões, conjuntos box e sofás Anjos com atendimento especializado e parcelamento facilitado. Venha
          experimentar em uma das nossas 5 lojas no norte do Paraná.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#lojas"
            data-track="cta"
            data-placement="hero"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-7 py-4 text-base font-semibold text-navy-950 transition-colors hover:bg-gold-300"
          >
            <WhatsappIcon className="size-5" />
            Falar com um vendedor
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 px-7 py-4 text-base font-medium transition-colors hover:border-gold-400 hover:text-gold-400"
          >
            Ver produtos
            <ArrowRight className="size-4" />
          </a>
        </div>
        <dl className="mt-4 grid max-w-lg grid-cols-3 gap-4 border-t border-cream-50/15 pt-6">
          {highlights.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-2xl font-semibold text-gold-400 sm:text-3xl">{item.value}</dd>
              <dd className="text-xs text-cream-50/70 sm:text-sm">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative hidden lg:block">
        <div className="absolute -inset-3 rotate-3 rounded-3xl bg-gold-400/20" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-cream-50/10">
          <Image
            src="/produtos/suavitta.webp"
            alt="Conjunto Box Suavitta Queen com pillow top em quarto sofisticado"
            fill
            priority
            sizes="420px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
)
