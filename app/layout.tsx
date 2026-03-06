import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TUBA Ferramentaria | Corte a Laser, Dobra e Solda - São Bernardo do Campo',
  description: 'TUBA FERRAMENTARIA LTDA - Soluções em corte a laser, dobra de chapas, solda e projetos sob medida em São Bernardo do Campo - SP. Fundada em 2009.',
  keywords: 'ferramentaria, corte laser, dobra chapas, solda, metalurgia, São Bernardo do Campo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
