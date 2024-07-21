import HeaderOnePage from "@/components/HeaderOnePage";
import Logo from "@/components/Logo";
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <HeaderOnePage />
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center p-4 mt-80">
        <div className="flex-1 text-center">
          <h1 className="text-5xl mr-10 font-bold text-primary-500">Transparência e Sustentabilidade no Agronegócio</h1>
          <p className="mt-10 mr-10 text-xl text-neutral-600">Utilize a tecnologia blockchain para monitorar e valorizar a sua produção agrícola</p>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:ml-4 flex justify-center">
          <Image src="/morango_capa.svg" alt="Estufa com morango semi-hidroponico" width={700} height={500} />
        </div>
      </section>
      <section className="max-w-6xl mx-auto mt-80 px-4 text-center">
        <h2 className="text-4xl font-bold text-primary-500 mb-16">Sobre</h2>
        <p className="text-lg text-neutral-600 mb-24 text-justify">
          A AgroChain é uma plataforma inovadora que utiliza sensores e tecnologia blockchain para capturar e armazenar dados da produção agrícola de forma imutável. Nosso objetivo é valorizar os esforços dos produtores em reduzir o desperdício de recursos e os impactos ambientais, proporcionando aos consumidores informações detalhadas e confiáveis sobre a origem dos alimentos.
        </p>
        <div className="flex flex-col md:flex-row gap-24 mt-32">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary-500 mb-8">Missão</h3>
            <p className="text-lg text-neutral-600 text-justify">
              Transformar o agronegócio com tecnologia, promovendo transparência, qualidade e sustentabilidade, ao valorizar práticas agrícolas sustentáveis e aproximar consumidores e produtores.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary-500 mb-8">Visão</h3>
            <p className="text-lg text-neutral-600 text-justify">
              Ser a plataforma líder em transparência e sustentabilidade no agronegócio, revolucionando a monitorização e certificação da produção agrícola e incentivando escolhas informadas e responsáveis.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto mt-80 px-4 flex justify-center">
        <Image src="/frutas.svg" alt="Foto de diversas frutas juntas" width={998} height={272} />
      </section>
      <section className="max-w-6xl mx-auto mt-80 px-4 text-center">
        <h2 className="text-4xl font-bold text-primary-500 mb-24 mt-32">Solução</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="border rounded-lg p-8 flex flex-col justify-center items-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">1. Integração de Sensores</h3>
            <p className="text-lg text-neutral-600 text-center">Conecte seus sensores à plataforma AgroChain.</p>
          </div>
          <div className="border rounded-lg p-8 flex flex-col justify-center items-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">2. Captura de Dados</h3>
            <p className="text-lg text-neutral-600 text-center">Os dados são coletados e armazenados em blockchain via Chainlink.</p>
          </div>
          <div className="border rounded-lg p-8 flex flex-col justify-center items-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">3. Monitoramento e Certificação</h3>
            <p className="text-lg text-neutral-600 text-center">Acompanhe os dados e veja quais selos sua produção conquista.</p>
          </div>
          <div className="border rounded-lg p-8 flex flex-col justify-center items-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">4. QR Code para Consumidores</h3>
            <p className="text-lg text-neutral-600 text-center">Cada safra recebe um QR code que pode ser escaneado para verificar os selos de qualidade.</p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto mt-32 px-4 text-center">
        <h2 className="text-4xl font-bold text-primary-500 mb-80 mt-80">Faça o teste agora mesmo</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/certification_agrochain.svg" alt="Certificação AgroChain" width={300} height={300} />
          </div>
          <div className="md:w-1/2 text-lg text-neutral-600 space-y-4 text-justify">
            <p>Escaneie o QR code ao lado para acessar a página de Certificações e Sustentabilidade.</p>
            <p>Esse QR code será anexado na embalagem do produto.</p>
            <p>Além disso, você poderá ver a página que o produtor usa para consultar os dados, os selos adquiridos e os requisitos para obter novos selos.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-80 px-4 text-center">
        <h2 className="text-4xl font-bold text-primary-500 mb-16">Selos de Qualidade</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mt-32">
          <p className="text-lg text-neutral-600 md:w-1/2 text-justify">
            Ao acessar nosso NFT pelo QR Code da embalagem na hora da compra, o consumidor terá a segurança de que o produto está em conformidade com os requisitos, indicadores e as melhores práticas dos selos de nossa solução.
          </p>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/qrcode_morango.svg" alt="QR Code Morango" width={400} height={400} />
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto mt-80 px-4 text-center">
        <h2 className="text-4xl font-bold text-primary-500 mb-16">Benefícios</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32 mt-32">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/cliente_satisfeito.svg" alt="Cliente Satisfeito" width={400} height={400} />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">Clientes</h3>
            <ul className="list-disc list-inside text-lg text-neutral-600">
              <li className="mb-2">Acesso a informações transparentes sobre a procedência dos alimentos.</li>
              <li>Escolha alimentos que correspondem ao seu estilo de vida e valores.</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32 mt-32">
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">Produtores</h3>
            <ul className="list-disc list-inside text-lg text-neutral-600">
              <li className="mb-2">Reconhecimento e valorização monetária por práticas sustentáveis.</li>
              <li>Facilidade em obter financiamentos e investimentos com dados comprovados.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src="/produtor_satisfeito.svg" alt="Produtor Satisfeito" width={400} height={400} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32 mt-32">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/sociedade.svg" alt="Sociedade" width={400} height={400} />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">Sociedade</h3>
            <ul className="list-disc list-inside text-lg text-neutral-600">
              <li className="mb-2">Contribuição para a redução dos impactos das mudanças climáticas.</li>
              <li>Fortalecimento da responsabilidade e união entre consumidores e produtores.</li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center mt-20 ml-40">
                <Logo />
              </Link>
              <p>&copy; 2024 AgroChain. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-white hover:text-primary-500">Home</a>
              <a href="#" className="text-white hover:text-primary-500">Sobre</a>
              <a href="#" className="text-white hover:text-primary-500">Solução e Tecnologia</a>
              <a href="#" className="text-white hover:text-primary-500">Benefícios</a>
              <a href="#" className="text-white hover:text-primary-500">Selos de Qualidade</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-500">Facebook</a>
              <a href="#" className="text-white hover:text-primary-500">Twitter</a>
              <a href="#" className="text-white hover:text-primary-500">LinkedIn</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>Contato: info@agrochain.fake</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
