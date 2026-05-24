import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Кто может получить микрозайм в Фонде?",
    answer: "Микрозаймы выдаются субъектам малого и среднего предпринимательства (МСП), зарегистрированным и ведущим деятельность на территории города Таганрога. Необходимо состоять в реестре МСП ФНС и не иметь просроченной задолженности перед бюджетом.",
  },
  {
    question: "Каковы условия микрозаймов?",
    answer: "Фонд выдаёт микрозаймы на сумму до 5 000 000 рублей по ставке от 4,5% годовых на срок до 3 лет. Также доступны займы до 3 000 000 рублей для субъектов МСП. Точные условия и ставка определяются индивидуально на основе анализа заявки.",
  },
  {
    question: "Консультации платные?",
    answer: "Нет, все консультации для предпринимателей Таганрога абсолютно бесплатны. Фонд оказывает поддержку по вопросам налогообложения, бухгалтерского учёта, финансового анализа, юридическим вопросам и бизнес-планированию.",
  },
  {
    question: "Что такое бизнес-инкубатор Фонда?",
    answer: "Бизнес-инкубатор предоставляет начинающим предпринимателям офисные помещения на льготных условиях аренды. Резиденты получают рабочее пространство, доступ к переговорным комнатам, оргтехнике и консультационной поддержке специалистов Фонда.",
  },
  {
    question: "Что такое Консультационный центр поддержки технологического предпринимательства?",
    answer: "В 2024 году на базе Фонда открылся специализированный центр для поддержки IT-предпринимателей и технологических проектов. Центр помогает с разработкой бизнес-модели, поиском финансирования и выходом на рынок технологических стартапов.",
  },
  {
    question: "Является ли Фонд государственной организацией?",
    answer: "Да, НКО МКК «Фонд поддержки предпринимательства города Таганрога» — муниципальная некоммерческая организация, входящая в инфраструктуру поддержки предпринимательства города. Фонд работает с 1995 года под эгидой администрации Таганрога.",
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