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

type GalleryItem = {
  src: string
  caption: string
}

type Testimonial = {
  image: string
  quote: string
  author: string
  result: string
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

const supportItems = [
  {
    title: 'Aulas ao vivo quinzenais',
    description:
      'Sessões em grupo para tirar dúvidas, revisar cronogramas e receber orientações diretamente da equipe Recupery.',
  },
  {
    title: 'Comunidade premium',
    description:
      'Espaço seguro no Telegram para compartilhar evoluções, fotos e receber feedback diário de especialistas.',
  },
  {
    title: 'Acompanhamento guiado',
    description:
      'Check-ins estruturados nas 4 primeiras semanas para garantir que você está executando o cronograma corretamente.',
  },
]

const deliverables = [
  '13 modulos HD com passo a passo gravado',
  'Aulas ao vivo quinzenais para ajustes finos',
  'Comunidade privada com suporte diario',
  'Calendario anti-dano e listas de produtos por faixa de preco',
  'Garantia incondicional de 7 dias',
]

const gallery: GalleryItem[] = [
  {
    src: '/provas/28.webp',
    caption: 'Reposicao de massa em fios castanhos apos cronograma antiqueda.',
  },
  {
    src: '/provas/29.webp',
    caption: 'Volume controlado e brilho espelhado em apenas 30 dias.',
  },
  {
    src: '/provas/22.webp',
    caption: 'Fio loiro fortalecido para suportar nova rodada de luzes.',
  },
  {
    src: '/provas/d8c5a48e-10de-4190-af3a-64a0d1c892d5.webp',
    caption: 'Cachos definidos sem frizz usando o modulo de ativacao.',
  },
  {
    src: '/provas/19.webp',
    caption: 'Transicao do afinamento ao comprimento cheio e alinhado.',
  },
  {
    src: '/provas/21.webp',
    caption: 'Fios grisalhos protegidos e com corte polido.',
  },
]

const testimonials: Testimonial[] = [
  {
    image: '/provas/img_9146_2.webp',
    quote:
      'Progresiva na raiz e zero quebra na primeira lavagem pos quimica. Amei, deu certo demais!',
    author: 'Bruna S.',
    result: 'Cronograma aplicado por 4 semanas',
  },
  {
    image: '/provas/995e4153-0661-449b-aadf-536c58484f68.webp',
    quote:
      'Meu cabelo era poroso, pontas espigadas e mesmo com produtos caros nao resolvia. O Recupery foi o melhor investimento da minha vida.',
    author: 'Leticia M.',
    result: 'Preparacao pre-quimica completa',
  },
  {
    image: '/provas/img_9151.webp',
    quote:
      'Fiz terapia de oleos por 3 semanas e a queda caiu drasticamente. To chocada com a diferenca.',
    author: 'Karen P.',
    result: 'Modulo de ativacao do couro cabeludo',
  },
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

const galleryHTML = gallery
  .map(
    (item) => `
      <figure class="proof-card">
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <figcaption>${item.caption}</figcaption>
      </figure>
    `,
  )
  .join('')

const testimonialsHTML = testimonials
  .map(
    (item) => `
      <article class="testimonial-card glass">
        <div class="avatar">
          <img src="${item.image}" alt="${item.author}" loading="lazy" />
        </div>
        <p class="quote">"${item.quote}"</p>
        <div class="author">
          <strong>${item.author}</strong>
          <span>${item.result}</span>
        </div>
      </article>
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
          <h1>Programa Recupery: 13 modulos para recuperar fios detonados</h1>
          <p class="lede">
            Da raiz sensibilizada ao comprimento poroso: siga um roteiro com 13 modulos que combinam detox, nutricao profunda e blindagem para recuperar brilho e densidade sem apostas aleatorias. Em 1 mes voce ja percebe diferenca real no brilho, na forca e na saude dos fios, exatamente como as mais de 3.000 mulheres que ja passaram pelo metodo.
          </p>
          <ul class="hero-list">
            <li>13 modulos sob demanda cobrindo diagnostico, cronograma e selagem</li>
            <li>Aulas ao vivo, comunidade premium e acompanhamento guiado</li>
            <li>Protocolos prontos para progressiva, luzes, botox ou transicao</li>
          </ul>
          <div class="cta-row">
            <a class="btn primary" href="${affiliateLink}" target="_blank" rel="noreferrer">Quero entrar agora</a>
            <a class="btn secondary" href="#beneficios">Ver como funciona</a>
          </div>
          <div class="hero-metrics">
            <article>
              <strong>4 semanas</strong>
              <span>para notar brilho, força e saude dos fios</span>
            </article>
            <article>
              <strong>3.000+</strong>
              <span>mulheres com resultados comprovados</span>
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
          <h2>13 modulos que levam seu cabelo do SOS ao brilho espelhado</h2>
        </div>
        <div class="module-grid">
          ${modulesHTML}
        </div>
      </section>

      <section class="section support">
        <div class="section-header">
          <p class="eyebrow"> acompanhamento real </p>
          <h2>Aulas ao vivo, comunidade e suporte pra aplicar o plano</h2>
          <p>O Recupery nao e apenas video gravado. Voce aprende, aplica e ajusta com o time acompanhando cada fase.</p>
        </div>
        <div class="support-grid">
          ${supportItems
            .map(
              (item) => `
            <article class="card glass">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </article>
          `,
            )
            .join('')}
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

      <section class="section gallery">
        <div class="section-header">
          <p class="eyebrow">antes e depois reais</p>
          <h2>Resultados que mostram o brilho, forca e densidade de volta</h2>
        </div>
        <div class="proof-grid">
          ${galleryHTML}
        </div>
      </section>

      <section class="section testimonials">
        <div class="section-header">
          <p class="eyebrow">depoimentos</p>
          <h2>Mensagens que chegam todos os dias da comunidade</h2>
        </div>
        <div class="testimonial-grid">
          ${testimonialsHTML}
        </div>
      </section>
    </main>
  `
}
