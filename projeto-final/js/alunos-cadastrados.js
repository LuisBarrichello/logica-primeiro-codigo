export const database = {
    turmas: [
        { codigo: 1, maximo: 7 },
        { codigo: 2, maximo: 8 },
        { codigo: 3, maximo: 6 },
        { codigo: 4, maximo: 5 },
        { codigo: 5, maximo: 10 }
    ],
    alunos: [
    {
        nome: "João",
        sobrenome: "Silva",
        email: "joao@example.com",
        turma: 2,
        nascimento: "15/03/2002",
        notas: [8.5, 7.2, 9.0],
        ativo: true
    },
    {
        nome: "Maria",
        sobrenome: "Souza",
        email: "maria@example.com",
        turma: 1,
        nascimento: "10/07/2003",
        notas: [9.8, 8.0, 7.5],
        ativo: true
    },
    {
        nome: "Pedro",
        sobrenome: "Ribeiro",
        email: "pedro@example.com",
        turma: 3,
        nascimento: "05/11/2002",
        notas: [6.4, 7.8, 8.2],
        ativo: true
    }
    ]
};

  // Adicione mais turmas e alunos conforme necessário

console.log(database);
