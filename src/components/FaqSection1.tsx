import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Кто может получить микрозайм?",
    answer: "Микрозаймы выдаются субъектам малого и среднего предпринимательства, зарегистрированным и осуществляющим деятельность на территории города Таганрога. Необходимо соответствовать критериям МСП и не иметь задолженностей по налогам.",
  },
  {
    question: "На каких условиях выдаются займы?",
    answer: "Микрозаймы выдаются по льготной ставке от 1% годовых на срок до 3 лет. Максимальная сумма — до 5 000 000 рублей. Точные условия зависят от вашего проекта и определяются индивидуально.",
  },
  {
    question: "Консультации платные?",
    answer: "Нет, консультации для предпринимателей абсолютно бесплатны. Фонд оказывает консультационную поддержку по вопросам налогообложения, бухгалтерского учёта, финансового анализа и юридическим вопросам на безвозмездной основе.",
  },
  {
    question: "Что такое бизнес-инкубатор?",
    answer: "Бизнес-инкубатор — это площадка, где начинающие предприниматели могут арендовать офисное помещение на льготных условиях. Вы получаете рабочее место, доступ к переговорным комнатам и инфраструктуре, а также поддержку специалистов Фонда.",
  },
  {
    question: "Что такое Консультационный центр поддержки технологического предпринимательства?",
    answer: "В 2024 году на базе Фонда создан специализированный центр для поддержки IT-предпринимателей и технологических стартапов. Центр помогает с развитием технологических проектов, привлечением инвестиций и выходом на рынок.",
  },
]

export function FaqSection1() {
  return (
    <section id="faq" className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы и ответы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Часто задаваемые вопросы
          </h1>
          <p className="text-muted-foreground">
            Собрали ответы на самые популярные вопросы. Не нашли нужного?{" "}
            <a href="#contact" className="text-primary underline">
              Свяжитесь с нами.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div id="contact" className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Готовы начать?</h2>
            <p className="text-base text-muted-foreground">
              Оставьте заявку или позвоните нам — поможем выбрать подходящую услугу.
            </p>
          </div>
          <Button size="lg" aria-label="Подать заявку">Подать заявку</Button>
        </div>
      </div>
    </section>
  )
}
