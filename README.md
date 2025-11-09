# 🕹️ Alugames

## 📜 Sobre

Este projeto foi desenvolvido durante os cursos de lógica de programação da Alura e simula um painel interativo para aluguel e devolução de jogos.

**O que o projeto faz:**
* Exibe uma lista de jogos disponíveis para aluguel.
* Permite ao usuário **alternar o status** de cada jogo (Alugar/Devolver) com um clique.
* Utiliza classes CSS para indicar visualmente se um jogo está alugado (por exemplo, escurecendo a imagem).
* Inclui uma **contagem dinâmica** de quantos jogos estão alugados no momento (exibida no console).

## 💡 Funcionalidades Chave (Baseadas no Código)

O projeto se destaca pela sua lógica de gerenciamento de estado:

1.  **Troca de Status:** A função principal `alterarStatus(id)` gerencia a transição entre os estados 'Alugar' e 'Devolver'.
2.  **Confirmação do Usuário:** Utiliza um `confirm()` para garantir que o usuário realmente deseja alugar ou devolver o jogo.
3.  **Atualização Visual:** Altera a aparência da imagem (`dashboard__item__img--rented`) e o texto/cor do botão de forma dinâmica via JavaScript.
4.  **Contagem Global:** Mantém um registro exato do número de jogos alugados (`jogosAlugados`).

## 💻 Tecnologias

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Logo HTML5" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Logo CSS3" width="50" height="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo JavaScript" width="50" height="50"/>
</div>

---
Desenvolvido por Anderson Júnior.
