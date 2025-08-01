"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  Clock,
  Users,
  Trophy,
  Target,
  Heart,
  Shield,
  Star,
  MessageCircle,
  ChevronRight,
  Zap,
  Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BoxingAcademyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.9, 1])

  const whatsappNumber = "41998714229"
  const whatsappMessage = "Olá, quero saber mais sobre as aulas de boxe"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/logo.png" alt="Logo" className="w-56 h-20" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="md:flex items-center space-x-8">
              {["inicio", "sobre", "beneficios", "planos", "depoimentos", "contato"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 capitalize font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20b358] text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden mt-4 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4">
                  {["inicio", "sobre", "beneficios", "planos", "depoimentos", "contato"].map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 capitalize font-medium text-left"
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20b358] text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </motion.a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-black bg-[url('/background.jpeg?height=1080&width=1920')] bg-contain bg-no-repeat bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="flex flex-col items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 font-anton px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="flex flex-row items-center gap-4">
                <span className="text-white">DESPERTE O</span>
                <span className="text-[#DB1F1F] drop-shadow-2xl">LUTADOR</span>
              </span>
              <span className="text-[#FFD700] mt-6 block">EM VOCÊ</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transforme seu corpo, mente e espírito com o boxe mais autêntico da cidade.
              <span className="text-[#FFD700] font-semibold"> Treinos profissionais, resultados reais.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20b358] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl w-full sm:w-auto justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(37, 211, 102, 0.6)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span className="whitespace-nowrap">Fale com o Professor</span>
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("sobre")}
                className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça a Academia
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#FFD700] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12 md:mb-16 px-4" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-[#FFD700] font-anton">
                NOSSA HISTÓRIA
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#DB1F1F] mx-auto mb-6 md:mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <div className="relative">
                  <Image
                    src="/luvPreta.jpeg?height=500&width=600"
                    alt="Interior da academia"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#DB1F1F]/20 to-transparent rounded-2xl"></div>
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeInUp}>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Mais de <span className="text-[#FFD700]">5 anos</span> formando campeões
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Fundada em 2020, nossa academia nasceu da paixão pelo boxe autêntico e pela transformação de vidas.
                  Começamos com um pequenos paços e grandes sonhos.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hoje somos referência como academia de boxe, com mais de{" "}
                  <span className="text-[#FFD700] font-semibold">150 alunos</span> e dezenas de campeões que se tornam
                  parte da nossa família. Cada treino é uma oportunidade de superação, disciplina e crescimento pessoal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 md:mt-8">
                  {[
                    { icon: Award, label: "Excelência técnica", value: <img src="/checked.png" alt="check" className="inline w-5 h-5 mx-auto" /> },
                    { icon: Users, label: "Alunos", value: "150+" },
                    { icon: Target, label: "Anos", value: "5+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                      whileHover={{ scale: 1.05, borderColor: "#FFD700" }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFD700] mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12 md:mb-16 px-4" variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-[#DB1F1F] font-anton">
                BENEFÍCIOS DO BOXE
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#FFD700] mx-auto mb-6 md:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra como o boxe pode transformar completamente sua vida física e mental
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
              {[
                {
                  icon: Zap,
                  title: "Condicionamento Físico",
                  description:
                    "Queime até 800 calorias por treino. Desenvolva força, resistência e agilidade como nunca antes.",
                  color: "#DB1F1F",
                },
                {
                  icon: Shield,
                  title: "Disciplina Mental",
                  description: "Desenvolva foco, determinação e controle emocional. O boxe forja mentes vencedoras.",
                  color: "#FFD700",
                },
                {
                  icon: Heart,
                  title: "Autoconfiança",
                  description: "Sinta-se mais seguro e confiante. O boxe desperta o guerreiro que existe em você.",
                  color: "#25D366",
                },
                {
                  icon: Target,
                  title: "Defesa Pessoal",
                  description: "Aprenda técnicas reais de proteção. Segurança que você leva para a vida toda.",
                  color: "#DB1F1F",
                },
                {
                  icon: Users,
                  title: "Comunidade",
                  description: "Faça parte de uma família de lutadores. Amizades que duram para sempre.",
                  color: "#FFD700",
                },
                {
                  icon: Trophy,
                  title: "Superação",
                  description: "Quebre seus limites diariamente. Cada treino é uma vitória sobre você mesmo.",
                  color: "#25D366",
                },
              ].map((benefit, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index}>
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-[#FFD700] transition-all duration-300 h-full group">
                    <CardContent className="p-6">
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                        style={{ backgroundColor: `${benefit.color}20` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-[#FFD700] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 text-center leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#FFD700] font-anton">PLANOS E HORÁRIOS</h2>
              <div className="w-24 h-1 bg-[#DB1F1F] mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Escolha o plano ideal para sua jornada no boxe</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
              {[
                {
                  name: "INICIANTE",
                  price: "R$ 120",
                  period: "/mês",
                  description: "Perfeito para quem está começando",
                  features: [
                    "2x por semana",
                    "Aulas em grupo",
                    "Equipamentos básicos inclusos",
                    "Avaliação inicial do professor",
                    "Treinos focados na técnica",
                  ],
                  popular: false,
                  color: "border-gray-600",
                },
                {
                  name: "GUERREIRO",
                  price: "R$ 150",
                  period: "/mês",
                  description: "Para quem quer resultados sérios",
                  features: [
                    "3x por semana",
                    "Aulas em grupo + individual",
                    "Todos os equipamentos",
                    "Sessões de avaliação de desenvolvimento",
                    "Acesso a treinos de sparring supervisionados",
                    "Suporte para desenvolvimento de resistência",
                  ],
                  popular: true,
                  color: "border-[#FFD700]",
                },
                {
                  name: "CAMPEÃO",
                  price: "R$ 250",
                  period: "/mês",
                  description: "Treinamento de alto nível",
                  features: [
                    "Treinos ilimitados",
                    "Aulas individuais",
                    "Preparação para competições",
                    "Planos de treino personalizados",
                    "Fisioterapeuta",
                    "Acesso total à academia em tempo integral",
                    "Orientação para melhora da performance",
                    "Feedback periódico para ajustes no treino",
                  ],
                  popular: false,
                  color: "border-[#DB1F1F]",
                },
              ].map((plan, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index}>
                  <Card
                    className={`flex flex-col justify-between p-4 bg-gray-800/50 ${plan.color} border-2 hover:scale-105 transition-all duration-300 h-full relative overflow-hidden group ${plan.popular ? "shadow-2xl shadow-[#FFD700]/20" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-[#FFD700] text-black text-center py-2 font-bold text-sm">
                        MAIS POPULAR
                      </div>
                    )}
                    <CardContent className={`p-6 ${plan.popular ? "pt-12" : ""}`}>
                      <div>
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-black text-white mb-2 font-anton">{plan.name}</h3>
                          <div className="flex items-baseline justify-center mb-2">
                            <span className="text-4xl font-bold text-[#FFD700]">{plan.price}</span>
                            <span className="text-gray-400 ml-1">{plan.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{plan.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-[#25D366] rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>

                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 ${plan.popular
                        ? "bg-[#FFD700] text-black hover:bg-[#e6c200]"
                        : "bg-[#25D366] text-white hover:bg-[#20b358]"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={18} />
                      Escolher Plano
                    </motion.a>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Schedule */}
            <motion.div className="mt-12 md:mt-16 px-4" variants={fadeInUp}>
              <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 md:mb-8">
                Horários de <span className="text-[#FFD700]">Funcionamento</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {/* Segunda a Sexta */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Segunda a Sexta
                    </h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Manhã:</span>
                        <span className="font-semibold">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tarde:</span>
                        <span className="font-semibold">14:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noite:</span>
                        <span className="font-semibold">18:00 - 22:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sábado */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Sábado
                    </h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Manhã:</span>
                        <span className="font-semibold">09:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tarde:</span>
                        <span className="text-gray-500">Fechado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noite:</span>
                        <span className="text-gray-500">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Domingo */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Domingo
                    </h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>Manhã:</span>
                        <span className="text-gray-500">Fechado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tarde:</span>
                        <span className="text-gray-500">Fechado</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Noite:</span>
                        <span className="text-gray-500">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#DB1F1F] font-anton">DEPOIMENTOS</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Veja o que nossos alunos falam sobre sua transformação
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
              {[
                {
                  name: "Carlos Silva",
                  age: "32 anos",
                  text: "Perdi 15kg em 6 meses e ganhei uma confiança que nunca tive. O boxe mudou minha vida completamente!",
                  rating: 5,
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Ana Rodrigues",
                  age: "28 anos",
                  text: "Sempre tive medo de me defender. Hoje me sinto segura e forte. Os professores são incríveis!",
                  rating: 5,
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "João Santos",
                  age: "45 anos",
                  text: "Começei aos 40 achando que era tarde. Hoje sou mais forte que aos 30! Nunca é tarde para começar.",
                  rating: 5,
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Maria Costa",
                  age: "35 anos",
                  text: "O ambiente é família! Todos se ajudam e incentivam. É mais que uma academia, é uma comunidade.",
                  rating: 5,
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Pedro Lima",
                  age: "22 anos",
                  text: "Comecei como hobby e hoje compito em nível estadual. O suporte técnico aqui é de outro nível!",
                  rating: 5,
                  image: "/placeholder.svg?height=80&width=80",
                },
                {
                  name: "Lucia Ferreira",
                  age: "29 anos",
                  text: "Melhor investimento que já fiz! Saúde física e mental em dia. Recomendo de olhos fechados!",
                  rating: 5,
                  image: "/placeholder.svg?height=80&width=80",
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index}>
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-[#FFD700] transition-all duration-300 h-full group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-white group-hover:text-[#FFD700] transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-400 text-sm">{testimonial.age}</p>
                        </div>
                      </div>

                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                        ))}
                      </div>

                      <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background.jpeg?height=600&width=1200')] bg-cover bg-no-repeat bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-white font-anton px-4"
              variants={fadeInUp}
            >
              PRONTO PARA <span className="text-[#DB1F1F]">LUTAR</span>?
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              variants={fadeInUp}
            >
              Não deixe para amanhã a transformação que você pode começar hoje.
              <span className="text-[#FFD700] font-semibold"> Sua primeira aula é gratuita!</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={fadeInUp}
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20b358] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full flex items-center gap-2 sm:gap-3 font-bold text-lg sm:text-xl transition-all duration-300 shadow-2xl w-full sm:w-auto justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(37, 211, 102, 0.6)",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={24} className="sm:w-7 sm:h-7" />
                <span className="whitespace-nowrap">Agendar Aula Gratuita</span>
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center px-4" variants={fadeInUp}>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-[#FFD700] mb-3" />
                <h4 className="font-bold text-white mb-2">Telefone</h4>
                <p className="text-gray-300">(41) 9 9871-4229</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-[#FFD700] mb-3" />
                <h4 className="font-bold text-white mb-2">Horário</h4>
                <p className="text-gray-300 text-left">
                  Seg-Sex: 9h-22h
                  <br />
                  Sáb: 9h-12h
                  <br />
                  Dom: Fechado
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-[#FFD700] mb-3" />
                <h4 className="font-bold text-white mb-2">Endereço</h4>
                <p className="text-gray-300">
                  R. Pio XII, 873
                  <br />
                  Neva - Cascavel/PR
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <img src="/logo.png" alt="Logo" className="w-56 h-22" />
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 BrasaBoxing Academia. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">Desenvolvido por Luiz Moll</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#25D366] hover:bg-[#20b358] text-white p-3 sm:p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 font-bold transition-all duration-300"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px rgba(37, 211, 102, 0.6)",
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
        <span className="hidden sm:inline text-sm sm:text-base">Fale Conosco</span>
      </motion.a>
    </div>
  )
}
