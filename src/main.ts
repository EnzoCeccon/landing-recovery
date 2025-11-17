import './style.css'

type Benefit = {
  title: string
  description: string
  icon: string
}

const affiliateLink = 'https://pay.kiwify.com.br/aFJXlVa?afid=SIs26xIg'

const benefits: Benefit[] = [
  {
    title: 'Protocolo personalizado',
    description:
      'Mapeia causas hormonais, nutricionais e emocionais para montar o passo a passo ideal para cada grau de calvicie.',
    icon: '01',
  },
  {
    title: 'Aulas praticas',
    description:
      'Demonstra, em video, como aplicar shampoos, tonicos e massagens ativadoras para estimular o foliculo no dia a dia.',
    icon: '02',
  },
  {
    title: 'Suporte cientifico',
    description:
      'Equipe revisa duvidas semanalmente e atualiza os protocolos conforme novos estudos de tricologia.',
    icon: '03',
  },
  {
    title: 'Resultados sustentaveis',
    description:
      'Combina rotinas de nutricao, detox e fortalecimento para manter os fios no ciclo de crescimento por mais tempo.',
    icon: '04',
  },
]

const planHighlights = [
  'Modulo diagnostico para identificar o grau da queda',
  'Cronograma antiqueda dividido em detox, ativacao e blindagem',
  'Listas de produtos aprovados e combinacoes seguras para cada fase',
  'Acesso vitalicio a novas aulas, materiais e lives de correcao',
  'Acompanhamento em comunidade fechada por 60 dias',
]

const ctaChecklist = [
  'Videoaulas curtas, disponiveis em qualquer dispositivo',
  'Metodo 100% natural, compatível com tratamentos medicos',
  'Garantia de 7 dias para testar sem riscos',
  'Suporte direto com especialistas e time no Telegram',
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
          <p class="badge">Saude capilar orientada</p>
          <h1>Metodo Recupery: traga seus fios de volta ao ciclo ativo</h1>
          <p class="subtitle">
            Protocolo completo para mulheres e homens com calvicie ou afinamento que desejam reconstruir o couro cabeludo de forma natural, guiada e segura.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="${affiliateLink}" target="_blank" rel="noreferrer">Quero recuperar meus fios</a>
            <a class="btn ghost" href="#beneficios">Ver beneficios</a>
          </div>
          <ul class="hero-stats">
            <li>
              <strong>12 sem</strong>
              <span>media para os primeiros sinais</span>
            </li>
            <li>
              <strong>6k+</strong>
              <span>alunos acompanhados</span>
            </li>
            <li>
              <strong>98%</strong>
              <span>aprovam o metodo</span>
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
          <h2>Beneficios que aceleram a recuperacao capilar</h2>
          <p>
            Cada etapa combina aulas praticas, protocolos supervisionados e ajustes finos para que o couro cabeludo volte a produzir fios mais densos e fortes.
          </p>
        </div>
        <div class="benefits-grid">
          ${benefitsHTML}
        </div>
      </section>

      <section id="plano" class="section plan">
        <div class="section-header">
          <p class="eyebrow">tratamento orientado</p>
          <h2>Como o Metodo Recupery devolve volume aos fios</h2>
          <p>Aplicacao simples, baseada em protocolos clinicos e com monitoramento da equipe para que voce nao perca tempo com tentativas soltas.</p>
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
          <h2>Entre para o Metodo Recupery e retome sua autoestima</h2>
          <p>
            Bastam alguns minutos por dia para seguir as videoaulas, aplicar os protocolos e acompanhar a reducao da queda com a supervisao do time Recupery.
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
