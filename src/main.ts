import './style.css'

type Benefit = {
  title: string
  description: string
  icon: string
}

const affiliateLink = 'https://pay.kiwify.com.br/aFJXlVa?afid=SIs26xIg'

const benefits: Benefit[] = [
  {
    title: 'Diagnostico da porosidade',
    description:
      'Aprenda a identificar como quimicas e calor abriram sua cuticula e defina o nivel de dano antes de iniciar o tratamento.',
    icon: '01',
  },
  {
    title: 'Protocolos anti-ressecar',
    description:
      'Cronogramas semanais equilibram umectacao, nutricao e reconstrucao para devolver brilho sem pesar nos fios finos.',
    icon: '02',
  },
  {
    title: 'SOS pos-quimica',
    description:
      'Passo a passo imediato para neutralizar danos apos progressiva, descoloracao, botox ou escova, evitando elasticidade e quebra.',
    icon: '03',
  },
  {
    title: 'Ativacao do couro cabeludo',
    description:
      'Massagens guiadas e tonicos naturais reativam a circulacao e estimulam o nascimento de novos fios nas areas fragilizadas.',
    icon: '04',
  },
]

const planHighlights = [
  'Mapa de diagnostico para fios ressecados, porosos ou afinados',
  'Protocolos distintos para cabelos naturais, com quimica e em transicao',
  'Listas aprovadas de produtos e ativos seguros para cada fase',
  'Calendario editavel para acompanhar a evolucao semanal',
  'Acesso vitalicio com atualizacoes e lives de correcao',
]

const ctaChecklist = [
  'Feito para mulheres com danos por quimica, calor ou queda difusa',
  'Rotinas sustentaveis que cabem na agenda corrida',
  'Garantia de 7 dias para testar sem riscos',
  'Suporte direto com especialistas e comunidade no Telegram',
]

const benefitsHTML = benefits
  .map(
    (item) => `
      <article class="benefit-card">
        <span class="benefit-icon">${item.icon}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `,
  )
  .join('')

const highlightsHTML = planHighlights
  .map((feature) => `<li><span>&check;</span>${feature}</li>`)
  .join('')

const checklistHTML = ctaChecklist
  .map((item) => `<li><span>&middot;</span>${item}</li>`)
  .join('')

const app = document.querySelector<HTMLDivElement>('#app')

if (app) {
  app.innerHTML = `
    <main class="page">
      <header class="hero">
        <div class="hero-content">
          <p class="badge">Rotina anti-dano para mulheres</p>
          <h1>Metodo Recupery: recupere fios danificados por quimica e calor</h1>
          <p class="subtitle">
            Guia completo para quem enfrenta ressecamento extremo, pontas elásticas, queda por escovas progressivas ou ciclos de descoloração e quer reconstruir o cabelo de forma saudável e progressiva.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="${affiliateLink}" target="_blank" rel="noreferrer">Quero salvar meu cabelo</a>
            <a class="btn ghost" href="#beneficios">Ver beneficios</a>
          </div>
          <ul class="hero-stats">
            <li>
              <strong>8 sem</strong>
              <span>media para sentir maciez real</span>
            </li>
            <li>
              <strong>6k+</strong>
              <span>mulheres acompanhadas</span>
            </li>
            <li>
              <strong>98%</strong>
              <span>relatam menor quebra</span>
            </li>
          </ul>
        </div>
        <div class="hero-visual">
          <div class="mockup">
            <span>Preview</span>
            <p>Espaco reservado para fotos de antes e depois das alunas do Metodo Recupery.</p>
          </div>
        </div>
      </header>

      <section id="beneficios" class="section">
        <div class="section-header">
          <p class="eyebrow">por que funciona</p>
          <h2>Beneficios pensados para danos femininos</h2>
          <p>
            Cada aula ajuda a entender o que o uso de quimica, calor e falta de nutricao causou no fio e como reverter com tecnicas simples e acompanhadas por profissionais.
          </p>
        </div>
        <div class="benefits-grid">
          ${benefitsHTML}
        </div>
      </section>

      <section id="plano" class="section plan">
        <div class="section-header">
          <p class="eyebrow">tratamento orientado</p>
          <h2>Pare de “apagar incêndios” e siga um plano claro</h2>
          <p>O Metodo Recupery organiza o cuidado capilar em etapas de detox, nutricao profunda e blindagem para que voce recupere toque, brilho e densidade sem testar receitas aleatorias.</p>
        </div>
        <div class="plan-card">
          <div class="plan-info">
            <p class="plan-label">Metodo Recupery</p>
            <h3 class="plan-title">Programa completo de recuperacao capilar</h3>
            <p class="plan-note">Liberado na hora, com acesso vitalicio + atualizacoes futuras.</p>
          </div>
          <ul class="plan-list">
            ${highlightsHTML}
          </ul>
          <a class="btn primary full" href="${affiliateLink}" target="_blank" rel="noreferrer">Garantir acesso vitalicio</a>
          <p class="plan-guarantee">Se em 7 dias voce achar que o Metodo nao faz sentido, basta solicitar o estorno e receber 100% do valor de volta.</p>
        </div>
      </section>

      <section id="cta" class="section final-cta">
        <div>
          <p class="eyebrow">decida hoje</p>
          <h2>Cuide do seu cabelo como prioridade diaria</h2>
          <p>
            Bastam alguns minutos por dia para seguir as videoaulas, adaptar o cronograma ao seu tipo de cabelo e acompanhar a reducao da quebra com a supervisao do time Recupery.
          </p>
          <ul class="cta-list">
            ${checklistHTML}
          </ul>
        </div>
        <div class="cta-actions">
          <a class="btn primary" href="${affiliateLink}" target="_blank" rel="noreferrer">
            Quero entrar agora
          </a>
          <a class="btn outline" href="#plano">Ver tudo que vou receber</a>
        </div>
      </section>
    </main>
  `
}
