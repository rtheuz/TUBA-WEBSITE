import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TUBA Ferramentaria | Corte a Laser (até 12mm), Dobra CNC e Solda TIG - SBC',
  description: 'TUBA FERRAMENTARIA LTDA - Soluções em corte a laser até 12mm, dobra de chapas CNC, solda especializada TIG e montagem de conjuntos sob medida em São Bernardo do Campo - SP. Fundada em 2009.',
  keywords: 'ferramentaria, corte laser ate 12mm, dobra chapas cnc, solda tig, montagem conjuntos, São Bernardo do Campo',
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
