import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/Logo"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

const conditions = [
  { label: "Сумма займа", value: "до 5 000 000 ₽", icon: "Banknote" },
  { label: "Процентная ставка", value: "от 4,5% до 19% годовых", icon: "Percent" },
  { label: "Срок займа", value: "до 3 лет", icon: "Calendar" },
  { label: "Цель", value: "Оборотные средства или инвестиции", icon: "Target" },
]

const programs = [
  {
    name: "Стандартный микрозайм",
    amount: "до 3 000 000 ₽",
    rate: "от 4,5% годовых",
    term: "до 3 лет",
    target: "Субъекты МСП Таганрога",
    purpose: "Пополнение оборотных средств, инвестиционные цели",
    highlight: false,
  },
  {
    name: "Расширенный заём",
    amount: "до 5 000 000 ₽",
    rate: "от 4,5% до 19% годовых",
    term: "до 3 лет",
    target: "Субъекты МСП с обеспечением",
    purpose: "Инвестиционные цели, развитие производства",
    highlight: true,
  },
]

const requirements = [
  "Регистрация и ведение деятельности на территории г. Таганрога",
  "Статус субъекта малого или среднего предпринимательства (реестр МСП ФНС)",
  "Отсутствие просроченной задолженности по налогам и сборам",
  "Отсутствие задолженности по ранее полученным займам и кредитам",
  "Срок ведения деятельности — не менее 3 месяцев",
  "Наличие обеспечения (залог имущества, поручительство)",
]

const documents = [
  {
    category: "Для ИП",
    icon: "User",
    items: [
      "Паспорт гражданина РФ (все страницы)",
      "Свидетельство о регистрации ИП / лист записи ЕГРИП",
      "ИНН предпринимателя",
      "Налоговая декларация за последний отчётный период",
      "Банковские выписки за последние 6 месяцев",
      "Документы по обеспечению (договор залога / поручительство)",
    ],
  },
  {
    category: "Для ООО / юридических лиц",
    icon: "Building2",
    items: [
      "Устав организации (все страницы)",
      "Свидетельство о государственной регистрации / лист записи ЕГРЮЛ",
      "Протокол (решение) о назначении руководителя",
      "Паспорт руководителя и главного бухгалтера",
      "Бухгалтерская отчётность за последний год (баланс, ОФР)",
      "Банковские выписки за последние 6 месяцев",
      "Документы по обеспечению (договор залога / поручительство)",
    ],
  },
]

const steps = [
  {
    number: "01",
    title: "Подача заявки",
    description: "Заполните анкету на сайте или обратитесь лично. Специалист проконсультирует по условиям и поможет с документами.",
  },
  {
    number: "02",
    title: "Рассмотрение",
    description: "Специалисты Фонда проверяют документы, анализируют финансовое состояние и платёжеспособность заёмщика.",
  },
  {
    number: "03",
    title: "Решение комитета",
    description: "Кредитный комитет Фонда рассматривает заявку и принимает решение о выдаче займа и его условиях.",
  },
  {
    number: "04",
    title: "Подписание и выдача",
    description: "После одобрения подписывается договор займа, оформляется обеспечение. Средства перечисляются на расчётный счёт.",
  },
]

const faqs = [
  {
    q: "Можно ли получить заём без залога?",
    a: "В ряде случаев возможно поручительство вместо залога. Конкретные требования к обеспечению определяются индивидуально при рассмотрении заявки.",
  },
  {
    q: "Как рассчитывается процентная ставка?",
    a: "Ставка устанавливается индивидуально в диапазоне от 4,5% до 19% годовых в зависимости от суммы займа, срока, качества обеспечения и финансового состояния заёмщика.",
  },
  {
    q: "Можно ли досрочно погасить заём?",
    a: "Да, досрочное погашение допускается. Условия досрочного погашения прописываются в договоре займа.",
  },
  {
    q: "Какой максимальный срок рассмотрения заявки?",
    a: "Стандартный срок рассмотрения — до 5 рабочих дней с момента предоставления полного пакета документов.",
  },
]

export default function Microloan() {
  return (
    <div className="min-h-screen bg-background">
      {/* Навбар */}
      <nav className="sticky top-0 z-50 bg-background border-b py-3.5">
        <div className="container px-6 mx-auto flex items-center justify-between gap-4">
          <Link to="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Icon name="ArrowLeft" size={16} className="mr-1" />
                На главную
              </Button>
            </Link>
            <a href="#apply">
              <Button size="sm">Подать заявку</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-muted pattern-1 py-14 md:py-20">
        <div className="container px-6 mx-auto max-w-4xl flex flex-col gap-6 items-center text-center">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Микрокредитование субъектов МСП
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Займы до 5 млн рублей<br />
            <span className="text-primary">от 4,5% годовых</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
            НКО МКК «Фонд поддержки предпринимательства города Таганрога» выдаёт микрозаймы субъектам малого и среднего предпринимательства на пополнение оборотных средств и инвестиционные цели.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href="#apply">Оставить заявку</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:78634391891">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (8634) 391-891
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Ключевые условия */}
      <section className="py-14 bg-background">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {conditions.map((c) => (
              <div key={c.label} className="flex flex-col gap-3 bg-muted rounded-xl p-5">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon name={c.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-bold text-foreground text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Программы */}
      <section className="py-14 bg-muted">
        <div className="container px-6 mx-auto max-w-4xl flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Программы займов</h2>
            <p className="text-muted-foreground">Выберите подходящую программу в зависимости от потребностей вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <Card key={p.name} className={`p-6 flex flex-col gap-5 ${p.highlight ? "border-primary border-2" : ""}`}>
                {p.highlight && (
                  <span className="self-start text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                    Максимальная сумма
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Сумма", value: p.amount },
                    { label: "Ставка", value: p.rate },
                    { label: "Срок", value: p.term },
                    { label: "Получатели", value: p.target },
                  ].map((item) => (
                    <div key={item.label} className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon name="Target" size={14} className="text-primary mt-0.5 shrink-0" />
                  {p.purpose}
                </div>
                <Button className="w-full mt-auto" variant={p.highlight ? "default" : "outline"} asChild>
                  <a href="#apply">Подать заявку</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Требования к заёмщику */}
      <section className="py-14 bg-background">
        <div className="container px-6 mx-auto max-w-4xl flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Требования к заёмщику</h2>
            <p className="text-muted-foreground">Займы выдаются субъектам МСП, зарегистрированным и работающим в Таганроге</p>
          </div>
          <div className="bg-muted rounded-2xl p-6 md:p-8 flex flex-col gap-3">
            {requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Check" size={12} className="text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Документы */}
      <section className="py-14 bg-muted">
        <div className="container px-6 mx-auto max-w-4xl flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Перечень документов</h2>
            <p className="text-muted-foreground">Подготовьте документы заранее — это ускорит рассмотрение заявки</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <Card key={doc.category} className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon name={doc.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{doc.category}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {doc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <Icon name="AlertCircle" size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              Перечень документов может быть уточнён или расширен специалистом Фонда по итогам первичной консультации в зависимости от особенностей вашего бизнеса.
            </p>
          </div>
        </div>
      </section>

      {/* Порядок получения */}
      <section className="py-14 bg-background">
        <div className="container px-6 mx-auto max-w-4xl flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Порядок получения займа</h2>
            <p className="text-muted-foreground">От заявки до получения средств — 4 шага</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="text-4xl font-black text-primary/20 leading-none shrink-0 w-12">{step.number}</div>
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-muted">
        <div className="container px-6 mx-auto max-w-3xl flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Частые вопросы</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-5 flex flex-col gap-2">
                <p className="font-semibold text-foreground text-sm">{faq.q}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Форма */}
      <section id="apply" className="py-14 bg-primary text-primary-foreground">
        <div className="container px-6 mx-auto max-w-2xl flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl font-bold">Готовы подать заявку?</h2>
            <p className="opacity-80">Обратитесь к нам удобным способом — специалист проконсультирует бесплатно и поможет собрать документы.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <a href="tel:78634391891" className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-xl p-4">
              <Icon name="Phone" size={22} />
              <span className="text-sm font-medium">+7 (8634) 391-891</span>
            </a>
            <a href="tel:78634611229" className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-xl p-4">
              <Icon name="Phone" size={22} />
              <span className="text-sm font-medium">+7 (8634) 611-229</span>
            </a>
            <a href="mailto:391-891@mail.ru" className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-xl p-4">
              <Icon name="Mail" size={22} />
              <span className="text-sm font-medium">391-891@mail.ru</span>
            </a>
          </div>
          <div className="flex flex-col gap-1 text-sm opacity-70">
            <p>пер. Гоголевский, 27, офис 1, г. Таганрог, 347900</p>
            <p>Пн–Пт: 9:00–18:00, обед 13:00–14:00</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/#contact">
              <Button size="lg" variant="secondary">
                Оставить заявку онлайн
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-muted py-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 НКО МКК «Фонд поддержки предпринимательства города Таганрога» ·{" "}
          <a href="https://tagfond.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            tagfond.ru
          </a>
        </p>
      </footer>
    </div>
  )
}
