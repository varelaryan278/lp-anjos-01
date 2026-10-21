import type { Metadata, Viewport } from "next"
import { Geologica } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"

const geologica = Geologica({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: "Anjos Colchões e Sofás | Lojas em Londrina, Rolândia e Cambé",
  description:
    "Colchões, conjuntos box e sofás Anjos com parcelamento facilitado. Visite uma das 5 lojas em Londrina, Rolândia e Cambé ou fale com um vendedor no WhatsApp.",
  openGraph: {
    title: "Anjos Colchões e Sofás",
    description: "5 lojas no norte do Paraná para você experimentar o conforto Anjos.",
    locale: "pt_BR",
    type: "website",
    images: ["/hero-bg.jpeg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#091219",
}

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="pt-BR" className={cn("h-full antialiased font-sans", geologica.variable)}>
    <body className="min-h-full flex flex-col bg-cream-50 text-navy-950">
      {children}
      <Analytics />
    </body>
  </html>
)

export default RootLayout
