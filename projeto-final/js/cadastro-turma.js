import { database } from "./alunos-cadastrados";

function Turma(idTurma, maximo) {

    if (!new.target) { // if you run me without new
        return new Turma(idTurma, Aluno); // ...I will add new for you
    };

    this.idTurma = idTurma;
    this.maximo = maximo > 10 ? 10 : maximo < 5 ? 5 : maximo;

    database.turmas.push(this);
}


function Aluno (nome, sobrenome, email, idTurma, nascimento, notas, ativo) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.idTurma = idTurma;
    this.nascimento = nascimento;
    this.notas = notas;
    this.ativo = ativo === 'ativo' ? true : false;
}

let teste = new Turma()

console.log(database.alunos)