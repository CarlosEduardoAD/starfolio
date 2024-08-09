---
title: 'Velocidade e simplicidade com Golang'
pubDate: 2023-03-29
description: 'Quais as vantagens da linguagem ?'
author: 'Karl'
tags: ["go", "programacao", "learning"]
layout: ../../layouts/MarkdownLayout.astro
---
# Velocidade e simplicidade com golang

*Isso aqui é um artigo de linkedin, ignore a fala mais formal.*

Do pouco tempo que trabalhei com a linguagem, pude tirar algumas conclusões sobre como ela pode tornar uma aplicação mais performática e ao mesmo tempo mais fácil de ser trabalhada.

A linguagem de programação Golang (popularmente conhecida apenas como "Go") foi criada pela Google em 2009 e lançada como projeto open-source em 2012, em seu desevolvimento estiverem envolvidos Ken Thompson, criador da Linguagem C e o engenheiro de software Rob Pike. O que tornou a linguagem popular nos últimos tempos foi a sua simplicidade e facilidade de aprender, junto de sua alta performance devido à sua forma inteligente de gerenciar threads.

Por quê Simplicidade ?: Fácil, a linguagem contém cerca de apenas 25 palavras reservadas e é apenas procedural, contém uma sintaxe agradável de se desenvolver e pode ser facilmente transportada, pois contém um sistema de módulos que pode "buildar" aplicações para todos os sistemas operacionais populares (Windows, Linux, Mac os etc...). Tudo isso permite que se possa alcançar resultados como sistemas embarcados ou servidores web de maneiras mais eficiente e com uma base de código mais acessível para desenvolvedores em geral.

Por quê Velocidade ?: Go consegue ser uma performática linguagem por causa de seu sistema de threads inteligente, seu garbage collector e principalmente por causa do seu sistema de Análise de dependências, que diferente de outras linguagens compiladas e de tipagem estática, consegue diferenciar e otimizar dependências sem deixar muito "lixo" no compilado final, essa é a principal razão de ele estar ganhando um lugar grande no mercado acima de outras linguagens, alguns nomes que a utilizam são Netflix, Mercado Livre e Twitch.


Quais as suas ferramentas ?: A linguagem pode ser utilizada para vários propósitos, como sistemas que precisam de manipular volumes grandes de dados com uma performance rápida, ela tem ferramentas para vários tipos, neste artigo vou focar nas relacionadas à desenvolvimento web.

- O pacote net/http: Contém o básico para que você crie manipule requisições http e até crie pequenos web servers, é bem simples de se usar, veloz e consegue lidar com a maioria dos desafios que temos ao mexer http sem precisar se preocupar com lentidões. Mas às vezes precisamos de algo mais completo ou no mínimo menos complicado, por isso, muitos frameworks foram escritos em cima desse módulo.

- Gin Gonic: Um deles é o Gin, mantido por uma equipe de desenvolvedores, o projeto open-source se inspira em frameworks como Flask de Python e Express de NodeJS para criar uma solução perspicaz para desenvolvimento de API's que consegue trazer a velocidade não só para o desempenho da aplicação mas também para o processo de desenvolvimento dela, vindo com várias funções que utilizamos direto em aplicações REST, graphQL e gRPC sem precisar de configuração e claro, sem abrir mão da velocidade que é o grande "carro-chefe" do Go.
Como posso começar a usar ela ?: Você pode começar usando ela no editor de código on-line Replit, mas caso queira utilizar ela em sua máquina, siga os passos de instalação do site oficial, é bem fácil instalar ela e você provavelmente não vai ter muitos problemas.


Depois em outros posts meus vou falar sobre minha experiência com outros frameworks de Golang