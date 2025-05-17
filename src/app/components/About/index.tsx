import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">🎯 Nossa Missão</h2>
        <p className="text-lg text-justify">
          O projeto "Everything About Art" nasceu da paixão compartilhada por
          arte e tecnologia. Nosso objetivo é criar uma plataforma que una essas
          duas áreas, proporcionando uma experiência enriquecedora para os
          amantes da arte e desenvolvedores.
        </p>
      </section>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🛤️ Nossa Jornada
        </h2>
        <p className="text-lg text-justify">
          Tudo começou quando Bruno Machado, profissional da Mindera, conheceu
          Luís Moreira durante um estágio focado em neurodiversidade. Bruno
          tornou-se mentor de Luís, ensinando sobre qualidade e testes de
          software. Durante esse período, desenvolveram o hábito de, após o
          almoço, assistir a episódios do programa "duARTe: uma peça de arte",
          descobrindo um interesse comum por arte.
        </p>
        <p className="text-lg text-justify mt-4">
          Após o término do estágio, continuaram a se reunir e decidiram iniciar
          este projeto. Inspirados pelas obras apresentadas no programa, criaram
          uma página frontend e APIs para alimentar o site com informações,
          visando aprimorar suas habilidades e construir um portfólio. Aplicaram
          diversas técnicas de teste, tanto manuais quanto automáticas, ao longo
          do desenvolvimento.
        </p>
      </section>

      <section className="mb-12 max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 text-center">👥 Quem Somos</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Bruno */}
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/brunomrs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/dtglidvcw/image/upload/v1747474612/everythingAboutArt/brunoMachado.jpg"
                alt="Bruno Machado"
                className="rounded-full mx-auto mb-4 shadow-lg hover:scale-105 transition"
                width={250}
                height={160}
              />
            </a>
            <h3 className="text-xl font-semibold text-yellow-500">
              Bruno Machado
            </h3>
            <p className="max-w-xs mx-auto">
              Profissional da Mindera, Bruno atua na área de qualidade de
              software. Com experiência em testes e mentoria, é apaixonado por
              arte e tecnologia.
            </p>
            <a
              href="https://www.linkedin.com/in/brunomrs/"
              className="text-blue-500 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn de Bruno Machado
            </a>
          </div>

          {/* Luís */}
          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/lu%C3%ADs-moreira-931982185/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/dtglidvcw/image/upload/t_luis_moreira/everythingAboutArt/Luis%20Moreira"
                alt="Luís Moreira"
                className="rounded-full mx-auto mb-4 shadow-lg hover:scale-105 transition"
                width={250}
                height={250}
              />
            </a>
            <h3 className="text-xl font-semibold text-yellow-500">
              Luís Moreira
            </h3>
            <p className=" max-w-xs mx-auto">
              Luís iniciou sua jornada na tecnologia através de um estágio
              focado em neurodiversidade. Com o apoio de Bruno, desenvolveu
              habilidades em qualidade de software e compartilha o entusiasmo
              por arte.
            </p>
            <a
              href="https://www.linkedin.com/in/lu%C3%ADs-moreira-931982185/"
              className="text-blue-500 hover:underline mt-2 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn de Luís Moreira
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
