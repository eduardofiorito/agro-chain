import Card from '@/components/Card'
import HeaderOnePage from '@/components/HeaderOnePage'
import Logo from '@/components/Logo'
import { theme } from '@/theme/tailwindTheme'
import {
  CheckCircle,
  Database,
  Eye,
  Facebook,
  LinkedinIcon,
  QrCode,
  Radio,
  Target,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <HeaderOnePage />
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between bg-black-100 px-16 py-24 md:flex-row md:py-48 lg:py-72">
        <div className="flex-1">
          <h1 className="text-center text-3xl font-bold text-primary-500 md:text-left md:text-4xl lg:text-5xl">
            Transparência e Sustentabilidade no Agronegócio
          </h1>
          <p className="mt-12 text-center text-lg text-neutral-400 md:mt-20 md:text-left md:text-xl">
            Utilize a tecnologia blockchain para monitorar e valorizar a sua
            produção agrícola
          </p>
        </div>
        <div className="mt-4 flex flex-1 justify-center md:ml-4 md:mt-0">
          <img
            src="https://res.cloudinary.com/dtz06cfki/image/upload/v1721611323/hero_npsq4v.png"
            alt=""
            width={700}
            height={500}
          />
        </div>
      </section>

      <section className="mx-auto bg-black-300 p-24 text-center md:py-48 lg:py-80">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-16 text-2xl font-semibold text-primary-500 md:mb-32 md:text-3xl lg:text-4xl"
            id="about"
          >
            Sobre
          </h2>
          <p className="mb-24 text-base text-neutral-400 md:text-lg">
            A AgroChain é uma plataforma inovadora que utiliza sensores e
            tecnologia blockchain para capturar e armazenar dados da produção
            agrícola de forma imutável. Nosso objetivo é valorizar os esforços
            dos produtores em reduzir o desperdício de recursos e os impactos
            ambientais, proporcionando aos consumidores informações detalhadas e
            confiáveis sobre a origem dos alimentos.
          </p>
          <div className="mt-32 flex flex-col gap-24 md:flex-row">
            <div className="flex-1">
              <div className="flex items-center justify-center gap-8 md:justify-start">
                <Target color={theme.colors.primary[500]} />
                <h3 className="text-xl font-bold text-primary-500">Missão</h3>
              </div>
              <p className="mt-12 text-center text-base text-neutral-400 md:text-left md:text-lg">
                Transformar o agronegócio com tecnologia, promovendo
                transparência, qualidade e sustentabilidade, ao valorizar
                práticas agrícolas sustentáveis e aproximar consumidores e
                produtores.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-8 md:justify-start">
                <Eye color={theme.colors.primary[500]} />
                <h3 className="text-xl font-bold text-primary-500">Visão</h3>
              </div>
              <p className="mt-12 text-center text-base text-neutral-400 md:text-left md:text-lg">
                Ser a plataforma líder em transparência e sustentabilidade no
                agronegócio, revolucionando a monitorização e certificação da
                produção agrícola e incentivando escolhas informadas e
                responsáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto bg-black-100 p-24 text-center md:py-48 lg:py-80">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-2xl font-semibold text-primary-500 md:mb-32 md:text-3xl lg:text-4xl">
            Solução
          </h2>
          <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
            <Card className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border p-8">
              <div className="mb-12 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500">
                <Radio color={theme.colors.black[300]} />
              </div>
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                1. Integração de Sensores
              </h3>
              <p className="text-center text-base text-neutral-400 md:text-lg">
                Conecte seus sensores à plataforma AgroChain.
              </p>
            </Card>
            <Card className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border p-8">
              <div className="mb-12 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500">
                <Database color={theme.colors.black[300]} />
              </div>
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                2. Captura de Dados
              </h3>
              <p className="text-center text-base text-neutral-400 md:text-lg">
                Os dados são coletados e armazenados em blockchain via
                Chainlink.
              </p>
            </Card>
            <Card className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border p-8">
              <div className="mb-12 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500">
                <CheckCircle color={theme.colors.black[300]} />
              </div>
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                3. Monitoramento e Certificação
              </h3>
              <p className="text-center text-base text-neutral-400 md:text-lg">
                Acompanhe os dados e veja quais selos sua produção conquista.
              </p>
            </Card>
            <Card className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border p-8">
              <div className="mb-12 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500">
                <QrCode color={theme.colors.black[300]} />
              </div>
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                4. QR Code para Consumidores
              </h3>
              <p className="text-center text-base text-neutral-400 md:text-lg">
                Cada safra recebe um QR code que pode ser escaneado para
                verificar os selos de qualidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto bg-black-300 p-24 text-center md:py-48 lg:py-80">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-2xl font-semibold text-primary-500 md:mb-32 md:text-3xl lg:text-4xl">
            Vídeo Demonstrativo
          </h2>
          <div className="grid grid-cols-1 gap-24 md:grid-cols-2"></div>
          <div className="mt-24 md:mt-32">
            <video
              src="https://res.cloudinary.com/dtz06cfki/video/upload/v1721651409/v%C3%ADdeo_ftyhht.mp4"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loop
              autoPlay
              muted
            />
          </div>{' '}
        </div>
      </section>

      <section className="mx-auto bg-black-100 p-24 text-center md:py-48 lg:py-80">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col-reverse items-center justify-between gap-16 md:flex-row">
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/certification_agrochain.svg"
                alt="Certificação AgroChain"
                width={300}
                height={300}
                className="w-full max-w-[250px] lg:max-w-[300px]"
              />
            </div>
            <div className="space-y-4 text-justify text-lg text-neutral-600 md:w-1/2">
              <h2 className="mb-16 text-center text-2xl font-semibold text-primary-500 md:mb-24 md:text-left md:text-3xl lg:text-4xl">
                Faça o teste agora mesmo
              </h2>
              <p className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                Escaneie o QR code ao lado para acessar a página de
                Certificações e Sustentabilidade.
              </p>
              <p className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                Esse QR code será anexado na embalagem do produto.
              </p>
              <p className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                Além disso, você poderá ver a página que o produtor usa para
                consultar os dados, os selos adquiridos e os requisitos para
                obter novos selos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto bg-black-300 p-24 text-center md:py-48 lg:py-80"
        id="stamps"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="space-y-4 text-justify text-lg text-neutral-600 md:w-1/2">
              <h2 className="mb-16 text-center text-2xl font-semibold text-primary-500 md:mb-24 md:text-left md:text-3xl lg:text-4xl">
                Selos de Qualidade
              </h2>

              <p className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                Acesse o QR Code da embalagem na hora da compra, o consumidor
                terá a segurança de que o produto está em conformidade com os
                requisitos, indicadores e as melhores práticas dos selos de
                nossa solução.
              </p>
            </div>
            <div className="flex justify-center md:w-1/2">
              <img
                src="https://res.cloudinary.com/dtz06cfki/image/upload/v1721613801/certifications_sr1ig2.png"
                alt="Certificação AgroChain"
                width={600}
                height={600}
                className="w-full max-w-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto bg-black-100 p-24 text-center md:py-48 lg:py-80"
        id="benefits"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-2xl font-semibold text-primary-500 md:mb-32 md:text-3xl lg:text-4xl">
            Benefícios
          </h2>
          <div className="mb-32 mt-32 flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/cliente_satisfeito.svg"
                alt="Cliente Satisfeito"
                width={400}
                height={400}
              />
            </div>
            <div className="text-left md:w-1/2">
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                Clientes
              </h3>
              <ul className="list-inside list-disc text-lg text-neutral-600">
                <li className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                  Acesso a informações transparentes sobre a procedência dos
                  alimentos.
                </li>
                <li className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                  Escolha alimentos que correspondem ao seu estilo de vida e
                  valores.
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-32 mt-32 flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="text-left md:w-1/2">
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                Produtores
              </h3>
              <ul className="list-inside list-disc text-lg text-neutral-600">
                <li className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                  Reconhecimento e valorização monetária por práticas
                  sustentáveis.
                </li>
                <li className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                  Facilidade em obter financiamentos e investimentos com dados
                  comprovados.
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/produtor_satisfeito.svg"
                alt="Produtor Satisfeito"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="mb-32 mt-32 flex flex-col-reverse items-center justify-between gap-16 md:flex-row">
            <div className="flex justify-center md:w-1/2">
              <Image
                src="/sociedade.svg"
                alt="Sociedade"
                width={400}
                height={400}
              />
            </div>
            <div className="text-left md:w-1/2">
              <h3 className="md:font-2xl mb-4 text-xl font-semibold text-primary-500">
                Sociedade
              </h3>
              <ul className="list-inside list-disc text-lg text-neutral-600">
                <li className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                  Contribuição para a redução dos impactos das mudanças
                  climáticas.
                </li>
                <li className="text-center text-base text-neutral-400 md:text-left md:text-lg">
                  Fortalecimento da responsabilidade e união entre consumidores
                  e produtores.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black-400 py-16 text-white">
        <div className="mx-auto mb-40 max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="text-ms text-neutral-500">
              Contato: info@agrochain.fake
            </p>
          </div>

          <div className="mb-12 flex justify-center gap-16">
            <a href="#" className="text-white hover:text-primary-500">
              <Facebook />
            </a>
            <a href="#" className="text-white hover:text-primary-500">
              <Twitter />
            </a>
            <a href="#" className="text-white hover:text-primary-500">
              <LinkedinIcon />
            </a>
          </div>

          <p className="text-ms text-center text-neutral-500 md:text-center">
            &copy; 2024 AgroChain. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
