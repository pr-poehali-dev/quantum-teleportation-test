import Icon from '@/components/ui/icon'

const steps = [
  {
    icon: "ClipboardList",
    title: "Подайте заявку",
    description: "Заполните анкету на сайте или приходите лично по адресу Фонда — мы поможем оформить всё правильно.",
  },
  {
    icon: "UserCheck",
    title: "Консультация и анализ",
    description: "Наши специалисты проконсультируют, проверят документы и подберут оптимальные условия для вашего бизнеса.",
  },
  {
    icon: "BadgeCheck",
    title: "Получите поддержку",
    description: "Получите финансирование или консультацию и развивайте свой бизнес в Таганроге с уверенностью.",
  },
]

export function FeatureSection3() {
  return (
    <section id="how" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Как получить поддержку</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Просто и прозрачно!</h2>
            <p className="text-base text-muted-foreground">Всего 3 шага до финансирования или консультации:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-foreground">Фонд поддержки предпринимательства</h3>
              <p className="text-muted-foreground text-sm">г. Таганрог, муниципальная организация</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Ставка по микрозаймам", value: "от 1% в год" },
                { label: "Сумма займа", value: "до 5 000 000 ₽" },
                { label: "Срок рассмотрения", value: "до 5 рабочих дней" },
                { label: "Консультации", value: "Бесплатно" },
              ].map((item) => (
                <div key={item.label} className="bg-muted rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">* Условия уточняйте у наших специалистов</p>
          </div>
        </div>
      </div>
    </section>
  )
}
