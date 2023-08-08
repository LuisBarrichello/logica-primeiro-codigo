/* export */ const database = {
    turmas: [
        { idTurma: 1, maximo: 7 },
        { idTurma: 2, maximo: 8 },
        { idTurma: 3, maximo: 6 },
        { idTurma: 4, maximo: 5 },
        { idTurma: 5, maximo: 10 }
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
