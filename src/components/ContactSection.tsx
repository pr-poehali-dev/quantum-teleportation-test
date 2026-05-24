import Icon from "@/components/ui/icon"

const contacts = [
  {
    icon: "MapPin",
    title: "Адрес",
    lines: ["г. Таганрог,", "ул. Петровская, 46а"],
  },
  {
    icon: "Phone",
    title: "Телефон",
    lines: ["8 (8634) 38-40-84", "8 (8634) 38-70-10"],
  },
  {
    icon: "Mail",
    title: "Email",
    lines: ["fond-tagan@yandex.ru"],
  },
  {
    icon: "Clock",
    title: "Режим работы",
    lines: ["Пн–Пт: 9:00–18:00", "Обед: 13:00–14:00", "Сб–Вс: выходной"],
  },
]

export function ContactSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Контакты</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Как нас найти</h2>
            <p className="text-muted-foreground">Приходите лично или свяжитесь с нами удобным способом.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact) => (
              <div key={contact.title} className="flex flex-col gap-3 bg-muted rounded-xl p-5">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Icon name={contact.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-foreground text-sm">{contact.title}</p>
                  {contact.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
              <Icon name="Info" size={20} className="text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground text-sm">НКО МКК «Фонд поддержки предпринимательства города Таганрога»</p>
              <p className="text-muted-foreground text-sm">
                Муниципальная некоммерческая организация — микрокредитная компания. Основана в 1995 году. Входит в инфраструктуру поддержки МСП Таганрога. Официальный сайт: <a href="https://tagfond.ru" target="_blank" rel="noopener noreferrer" className="text-primary underline">tagfond.ru</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}