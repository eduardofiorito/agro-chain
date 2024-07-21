import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Plataforma de Soluções Blockchain para Agropecuária | AgroChain',
  description:
    'AgroChain oferece soluções inovadoras para a agropecuária utilizando tecnologia blockchain. Acompanhe a rastreabilidade dos produtos agrícolas, garanta a transparência nas cadeias de suprimentos e melhore a eficiência operacional com nossos serviços.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
