import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton, Bebas_Neue } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BrasaBoxing - Academia de Boxe | Transforme sua Vida",
  description:
    "Academia de boxe profissional com mais de 5 anos de experiência. Aulas para todos os níveis, equipamentos completos e professor qualificado. Primeira aula gratuita!",
  keywords: "boxe, academia, luta, treino, condicionamento físico, defesa pessoal, aulas de boxe",
  authors: [{ name: "BrasaBoxing Academia de Boxe" }],
  creator: "BrasaBoxing Academia de Boxe",
  publisher: "BrasaBoxing Academia de Boxe",
  robots: "index, follow",
  openGraph: {
    title: "BrasaBoxing - Academia de Boxe",
    description: "Desperte o lutador em você! Academia de boxe profissional com treinos para todos os níveis.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrasaBoxing - Academia de Boxe",
    description: "Desperte o lutador em você! Academia de boxe profissional com treinos para todos os níveis.",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/luva-de-boxe.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
