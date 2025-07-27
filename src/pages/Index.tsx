import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Привет! Я ваш помощник. Чем могу помочь?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, 
      { type: 'user', text: chatInput },
      { type: 'bot', text: 'Спасибо за вопрос! Наш менеджер свяжется с вами в ближайшее время.' }
    ]);
    setChatInput('');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Code',
      title: 'Веб-разработка',
      description: 'Создание современных сайтов и приложений',
      price: 'от 50 000 ₽'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разработка iOS и Android приложений',
      price: 'от 150 000 ₽'
    },
    {
      icon: 'Palette',
      title: 'UI/UX Дизайн',
      description: 'Современный дизайн интерфейсов',
      price: 'от 30 000 ₽'
    },
    {
      icon: 'Search',
      title: 'SEO продвижение',
      description: 'Оптимизация и продвижение сайтов',
      price: 'от 20 000 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Интернет-магазин электроники',
      description: 'Полнофункциональный e-commerce с каталогом 10000+ товаров',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      image: '/img/83ebdccb-320e-4d1e-8cca-c761258ca246.jpg'
    },
    {
      title: 'Корпоративный портал',
      description: 'CRM система для управления клиентами и проектами',
      tech: ['Vue.js', 'Express', 'MongoDB'],
      image: '/img/83ebdccb-320e-4d1e-8cca-c761258ca246.jpg'
    },
    {
      title: 'Мобильное приложение доставки',
      description: 'iOS/Android приложение с геолокацией и онлайн-оплатой',
      tech: ['React Native', 'Firebase'],
      image: '/img/83ebdccb-320e-4d1e-8cca-c761258ca246.jpg'
    }
  ];

  const faq = [
    {
      question: 'Сколько времени займет разработка сайта?',
      answer: 'Сроки зависят от сложности проекта. Простой сайт-визитка - 1-2 недели, интернет-магазин - 1-2 месяца, сложные веб-приложения - 3-6 месяцев.'
    },
    {
      question: 'Какие технологии вы используете?',
      answer: 'Мы работаем с современным стеком: React, Vue.js, Node.js, Python, PHP. Выбор технологий зависит от требований проекта.'
    },
    {
      question: 'Предоставляете ли вы техподдержку?',
      answer: 'Да, мы предоставляем техподдержку и сопровождение проектов. Первые 3 месяца - бесплатно, далее по договоренности.'
    },
    {
      question: 'Можете ли вы доработать существующий сайт?',
      answer: 'Конечно! Мы можем провести аудит вашего сайта и предложить варианты доработки и оптимизации.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">WebStudio</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'portfolio', 'about', 'contact', 'faq'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`hover:text-primary transition-colors ${
                    activeSection === item ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item === 'home' && 'Главная'}
                  {item === 'services' && 'Услуги'}
                  {item === 'portfolio' && 'Портфолио'}
                  {item === 'about' && 'О нас'}
                  {item === 'contact' && 'Контакты'}
                  {item === 'faq' && 'Вопросы и ответы'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              WEBSTUDIO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаем современные сайты и приложения, которые работают и приносят результат
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => scrollToSection('services')}>
                <Icon name="Rocket" className="mr-2" />
                Наши услуги
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Eye" className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-card-foreground">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">О нас</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы команда профессиональных разработчиков с опытом работы более 10 лет. 
              Специализируемся на создании современных веб-решений для бизнеса любого масштаба.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Проектов выполнено</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Вопросы и ответы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Телефон" />
                <Textarea placeholder="Опишите ваш проект" className="min-h-[120px]" />
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Icon name="Phone" className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Телефон</div>
                <div className="text-muted-foreground">+7 (999) 123-45-67</div>
              </div>
              <div className="text-center">
                <Icon name="Mail" className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Email</div>
                <div className="text-muted-foreground">info@webstudio.ru</div>
              </div>
              <div className="text-center">
                <Icon name="MapPin" className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Адрес</div>
                <div className="text-muted-foreground">Москва, ул. Примерная, 123</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 WebStudio. Все права защищены.</p>
        </div>
      </footer>

      {/* Chat Bot */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            size="icon"
          >
            <Icon name="MessageCircle" className="w-6 h-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Чат-бот поддержки</DialogTitle>
            <DialogDescription>
              Задайте ваш вопрос и получите быстрый ответ
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="h-60 overflow-y-auto border rounded-lg p-4 space-y-3">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Введите ваш вопрос..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
              />
              <Button onClick={handleChatSend} size="icon">
                <Icon name="Send" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;