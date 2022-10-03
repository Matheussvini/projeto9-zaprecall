const CARDS = {
  react: [
    {
      id: 0,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      id: 1,
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      id: 2,
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula",
    },
    {
      id: 3,
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões",
    },
    {
      id: 4,
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      id: 5,
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      id: 6,
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes ",
    },
    {
      id: 7,
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ],
  JavaScript: [
    {
      id: 0,
      question: "Qual a diferença entre valor undefined e null?",
      answer:
        "Um valor undefined significa que uma variável foi declarada, mas ainda não foi atribuído um valor, já um valor null é um valor atribuído ou resultado de um erro que foi gerado.",
    },
    {
      id: 1,
      question: "O que o operador typeof do JavaScript faz?",
      answer:
        "Retorna o tipo do dado perguntado (String, Number, Boolean, Null, Undefined, entre outros).",
    },
    {
      id: 2,
      question: "Qual a diferença entre == e ===?",
      answer:
        "== compara somente o valor, já === compara se o tipo e valor são iguais.",
    },
    {
      id: 3,
      question: "O que é uma HOF e o que faz?",
      answer:
        "High Order Function funções que aceitam outras funções como parâmetro e/ou retorna a função como saída.",
    },
    {
      id: 4,
      question: "Utilizamos template string quando ___",
      answer: "precisamos adicionar em uma string uma ou mais variáveis.",
    },
    {
      id: 5,
      question: "O que faz a função map em uma coleção?",
      answer:
        "A função map permite percorrer uma coleção de itens de um array para fazer alguma operação de transformação ou alteração nos itens, ao final o map retorna uma nova lista com a mesma quantidade de itens da lista inicial.",
    },
    {
      id: 6,
      question: "Qual símbolo é usado para comentários em JavaScript?",
      answer:
        "Barra dupla ( // ): é conhecido como comentário de linha única. Barra com asterisco ( /* ... */ ): é conhecido como comentário de várias linhas. ",
    },
    {
      id: 7,
      question: "Qual é o uso da função isNaN?",
      answer:
        "é usada para determinar se o valor passado é do tipo “Number” ou não, retornando true ou false.",
    },
  ],
  html: [
    {
      id: 0,
      question: "HTML é uma linguagem de programação?",
      answer:
        "Não! HTML é uma linguagem de <strong>marcação<strong> usada para estruturar e exibir conteúdo na internet.",
    },
    {
      id: 1,
      question: "Como você vincula a outra página da web usando HTML5?",
      answer:
        "A marca âncora, ou marca <a> no código, é usada com o atributo 'href' para vincular a outras páginas da web. A URL e o texto vinculado são incluídos no elemento.",
    },
    {
      id: 2,
      question: "onClick é um atributo HTML5?",
      answer:
        "Não, onClick é um atibuto utilizado no React.js, o HTML5 possui o atributo onclick (sem o 'C' maiúsculo).",
    },
    {
      id: 3,
      question: "O que são mapas de imagens em HTML5?",
      answer:
        "Os mapas de imagem são imagens com várias áreas clicáveis ​​que levam a diferentes páginas da web. Eles usam as tags <map> e <area>. As coordenadas são especificadas para segmentar a imagem em diferentes áreas e, em seguida, os links relevantes são aplicados.",
    },
    {
      id: 4,
      question: "Utilizamos template string quando ___",
      answer: "precisamos adicionar em uma string uma ou mais variáveis.",
    },
    {
      id: 5,
      question: "Quais são os diferentes tipos de armazenamento em HTML5?",
      answer:
        "HTML5 suporta dois tipos de armazenamento na web. Estes são: sessionStorage -> armazenamento temporário disponível durante a sessão da página; e localStorage -> armazenamento permanente disponível até que os dados sejam excluídos pelo usuário",
    },
    {
      id: 6,
      question: "O que é uma <div>?",
      answer:
        "é um container genérico para conteúdo de fluxo, que de certa forma não representa nada. Ele pode ser utilizado para agrupar elementos para fins de estilos (usando class ou id), e é amplamente personalizável",
    },
    {
      id: 7,
      question: "O que são atributos em HTML5?",
      answer:
        "Atributos são propriedades ou características especiais usadas dentro de um elemento para modificar seu comportamento. Por exemplo, os atributos podem ser usados ​​para especificar as dimensões ou valores de posicionamento de uma imagem. Os atributos são especificados na tag de abertura e devem ser colocados entre aspas.",
    },
  ],
};

export default CARDS;
