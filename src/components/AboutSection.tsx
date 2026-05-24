import Icon from "@/components/ui/icon"

const achievements = [
  {
    year: "2006",
    text: "Победитель конкурса «Лучший объект инфраструктуры поддержки малого предпринимательства» в Ростовской области в номинации «Лучший объект инфраструктуры в сфере консалтинга»",
  },
  {
    year: "2008, 2010, 2012, 2013",
    text: "Победитель конкурса «Лучшая микрофинансовая организация» в Ростовской области в номинации «Лучший фонд развития предпринимательства»",
  },
]

const directions = [
  {
    icon: "TrendingUp",
    title: "Финансово-кредитная поддержка",
    items: [
      "Содействие в получении кредитов в банках г. Таганрога и Ростовской области",
      "Разработка бизнес-планов и инвестиционных проектов",
      "Документальное сопровождение проектов для получения господдержки",
      "Консультации по финансово-кредитным операциям",
    ],
  },
  {
    icon: "Banknote",
    title: "Микрокредитование субъектов МСП",
    items: [
      "Микрозаймы от 4,5% до 19% годовых",
      "Сумма до 5 000 000 рублей",
      "Срок до 3 лет",
      "На пополнение оборотных средств или инвестиционные цели",
    ],
  },
  {
    icon: "Scale",
    title: "Юридическая поддержка",
    items: [
      "Консультации по предпринимательскому, жилищному, гражданскому, трудовому праву",
      "Подготовка исковых заявлений, жалоб, представительство в суде и арбитраже",
      "Разработка внутренних документов: должностных инструкций, приказов, положений",
      "Подготовка документов для регистрации ООО и ИП",
    ],
  },
  {
    icon: "Building2",
    title: "Бизнес-инкубирование",
    items: [
      "Льготная аренда помещений",
      "Экономическое, юридическое и имущественное сопровождение",
    ],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-14 max-w-5xl mx-auto">

          {/* Заголовок */}
          <div className="flex flex-col gap-5 text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">О Фонде</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              НКО МКК «Фонд поддержки предпринимательства города Таганрога»
            </h2>
          </div>

          {/* Описание */}
          <div className="bg-muted rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <p className="text-foreground leading-relaxed">
              Некоммерческая организация — микрокредитная компания Фонд поддержки предпринимательства города Таганрога существует с <strong>1994 года</strong>. Основной целью деятельности Фонда является аккумулирование средств и направление их на обеспечение и реализацию одного из важнейших направлений экономической реформы — развития и поддержки малого и среднего предпринимательства.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Деятельность Фонда способствует развитию конкуренции, наполнению потребительского рынка товарами и услугами, созданию новых рабочих мест, формированию широкого слоя предпринимателей. Руководство Фондом осуществляется Попечительским Советом, Правлением Фонда и Уставом Фонда.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Единоличный исполнительный орган — <strong>Генеральный директор Пасечник Ирина Валериевна</strong>.
            </p>
          </div>

          {/* Направления деятельности */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold text-foreground text-center">Направления деятельности</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {directions.map((dir) => (
                <div key={dir.title} className="flex flex-col gap-4 border rounded-xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name={dir.icon} size={20} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{dir.title}</h4>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {dir.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Достижения */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-foreground text-center">Достижения и награды</h3>
            <div className="flex flex-col gap-4">
              {achievements.map((a) => (
                <div key={a.year} className="flex flex-col sm:flex-row gap-4 bg-primary/5 border border-primary/20 rounded-xl p-5">
                  <div className="shrink-0">
                    <span className="inline-block bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                      {a.year}
                    </span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Членство в СРО */}
          <div className="bg-muted rounded-xl p-5 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <Icon name="Award" size={20} className="text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground text-sm">Член саморегулируемой организации</p>
              <p className="text-muted-foreground text-sm">
                МКК ФПП является членом Союза микрофинансовых организаций «Микрофинансирование и Развитие» (СРО «МиР»). Обращение получателя услуг может быть направлено в СРО «МиР»: info@npmir.ru, тел. 8 800 775 27 55.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
