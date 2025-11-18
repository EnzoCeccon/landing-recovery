import './style.css'

type Benefit = {
  title: string
  description: string
  icon: string
}

type Module = {
  title: string
  subtitle: string
  description: string
}

const affiliateLink = 'https://pay.kiwify.com.br/aFJXlVa?afid=SIs26xIg'

const benefits: Benefit[] = [
  {
    title: 'Diagnostico da porosidade',
    description:
      'Entenda em minutos como quimicas e calor alteraram sua cuticula e qual protocolo seguir primeiro.',
    icon: '01',
  },
  {
    title: 'Protocolos anti-ressecar',
    description:
      'Cronogramas equilibram umectacao, nutricao e reconstrucao para devolver brilho sem pesar.',
    icon: '02',
  },
  {
    title: 'SOS pos-quimica',
    description:
      'Guia rapido para neutralizar danos apos progressiva, luzes, botox ou descoloracao.',
    icon: '03',
  },
  {
    title: 'Ativacao do couro cabeludo',
    description:
      'Massagens guiadas e tonicos naturais reativam a circulacao e estimulam o nascimento de novos fios.',
    icon: '04',
  },
]

const modules: Module[] = [
  {
    title: 'Modulo 01',
    subtitle: 'Raiz e fluxo sanguineo',
    description:
      'Reset detox + massoterapia para desobstruir o couro cabeludo e preparar os fios para absorver nutricao.',
  },
  {
    title: 'Modulo 02',
    subtitle: 'Nutricao de elite',
    description:
      'Protocolos de lipideos e ceramidas para selar a cuticula, controlar frizz extremo e recuperar o toque.',
  },
  {
    title: 'Modulo 03',
    subtitle: 'Reconstrucao segura',
    description:
      'Aplicacoes com aminoacidos e queratina em doses certas para evitar rigidez e quebra.',
  },
  {
    title: 'Modulo 04',
    subtitle: 'Blindagem de calor',
    description:
      'Tecnicas de styling, protetores e finalizadores que protegem o progresso mesmo usando secador ou prancha.',
  },
  {
    title: 'Modulo 05',
    subtitle: 'Cronograma vitalicio',
    description:
      'Planilhas editaveis, lembretes e ajustes sazonais para manter os resultados durante todo o ano.',
  },
]

const deliverables = [
  'Calendario anti-dano pronto para usar',
  'Listas de produtos aprovados por faixa de preco',
  'Acesso vitalicio + atualizacoes e lives mensais',
  'Comunidade privada com suporte diario',
  'Garantia incondicional de 7 dias',
]

const benefitsHTML = benefits
  .map(
    (item) => `
      <article class="card glass">
        <span class="pill">${item.icon}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `,
  )
  .join('')

const modulesHTML = modules
  .map(
    (item) => `
      <article class="module-card glass">
        <header>
          <span>${item.title}</span>
          <strong>${item.subtitle}</strong>
        </header>
        <p>${item.description}</p>
      </article>
    `,
  )
  .join('')

const deliverablesHTML = deliverables
  .map(
    (item) => `
      <li>
        <span></span>
        <p>${item}</p>
      </li>
    `,
  )
  .join('')

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <main class="page">
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="tag">Metodo Recupery · Mulher</p>
          <h1>Reconstrua cabelos detonados por quimica com um plano premium</h1>
          <p class="lede">
            Da raiz sensibilizada ao comprimento poroso: siga um roteiro que combina detox, nutricao profunda e blindagem para recuperar brilho e densidade sem apostas aleatorias.
          </p>
          <ul class="hero-list">
            <li>Protocolos prontos para progressiva, luzes, botox ou transicao</li>
            <li>Planilhas editaveis para ajustar ao seu tempo e budget</li>
            <li>Suporte diario com tricologista e equipe no Telegram</li>
          </ul>
          <div class="cta-row">
            <a class="btn primary" href="${affiliateLink}" target="_blank" rel="noreferrer">Quero entrar agora</a>
            <a class="btn secondary" href="#beneficios">Ver como funciona</a>
          </div>
          <div class="hero-metrics">
            <article>
              <strong>8 semanas</strong>
              <span>para sentir maciez real</span>
            </article>
            <article>
              <strong>6.000+</strong>
              <span>alunas com danos severos</span>
            </article>
            <article>
              <strong>98%</strong>
              <span>relataram menos quebra</span>
            </article>
          </div>
        </div>
        <div class="hero-visual">
          <div class="eclipse"></div>
          <div class="shot">
            <p>Insira seus antes e depois aqui</p>
          </div>
        </div>
      </section>

      <section id="beneficios" class="section glow">
        <div class="section-header">
          <p class="eyebrow">por que o recupery</p>
          <h2>O unico metodo criado para fios com dano quimico extremo</h2>
          <p>Os pilares combinam ciencia capilar + rotina real de mulheres que precisam recuperar a saude dos fios sem abandonar a agenda.</p>
        </div>
        <div class="card-grid">
          ${benefitsHTML}
        </div>
      </section>

      <section class="section modules">
        <div class="section-header">
          <p class="eyebrow">roadmap completo</p>
          <h2>Etapas que levam seu cabelo do SOS ao brilho espelhado</h2>
        </div>
        <div class="module-grid">
          ${modulesHTML}
        </div>
      </section>

      <section class="section offer">
        <div class="offer-copy">
          <p class="eyebrow">o que voce recebe hoje</p>
          <h2>Entre agora e tenha acesso vitalicio a todos os materiais</h2>
          <ul class="deliverables">
            ${deliverablesHTML}
          </ul>
          <div class="cta-row">
            <a class="btn primary" href="${affiliateLink}" target="_blank" rel="noreferrer">Garantir minha vaga</a>
            <span class="guarantee">Garantia incondicional de 7 dias</span>
          </div>
        </div>
        <div class="offer-visual">
          <div class="device">
            <span>mockup</span>
          </div>
        </div>
      </section>
    </main>
  `
}
