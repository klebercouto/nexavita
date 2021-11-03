import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>NexaVita</title>
        <meta name="description" content="NexaVita website" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      
        <Image src={logo} alt="NexaVita"/>
        <br/>
        Somos uma holding que atua no setor do luto através da participação societária em empresas de plano funerário, cemitérios, crematórios
        e demais empresas relacionadas.
        <br/><br/>
        Atuamos promovendo a profissionalização da gestão que o setor necessita para se fortalecer no Brasil e com o 
        intensivo uso da tecnologia e transformação digital para evoluir o mercado do luto (death care) para o mercado da saúde e do cuidado (life care). 
       <br/><br/>
       Nossa missão é promover qualidade de vida através do cuidado. <br/>
       Se procurarmos no dicionário o significado da palavra cuidado, encontraremos “aquilo que é objeto de tratamento especial, com afeto”. No latim, a palavra significa 
       “tratar com afinco do corpo e espírito”. Contudo, na prática, “o cuidar” representa muito nas relações humanas, cuidar é atender, curar, encarregar-se, interessar-se, medicar,
        ocupar-se de, olhar, preocupar-se, responsabilizar-se, tomar conta de, tratar de, tutelar, velar, vigiar e muito mais. 
       <br/><br/>
        <font color="#999999">NexaVita S.A. - Alameda Mamoré, 535 - Conj. 306 - Alphaville, Barueri - SP, CEP 06454-040</font>
    </div> 
  )
}
