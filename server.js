const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

let alunos = [
    {
        Id: 1,
        nome: "Ana",
        email: "ana@gmail.com",
        turma: "TDS2026"
    },
    {
        Id: 2,
        nome: "Pedro",
        email: "pedro@gmail.com",
        turma: "TDS2026"
    }
]

// GET - Listar todos os alunos
app.get("/alunos", (req, res) =>{
    res.status(200).json(alunos);
});

// GET - Consultar aluno pelo id
app.get("/alunos/:id", (req, res) =>{
    const id = Number(req.params.id);

    const aluno = alunos.find(a => a.Id === id);

    if(!aluno){
        return res.status(404).json({
            mensagem: "Aluno não encontrado."
        });
    }
});

// POST - Cadrastar aluno
app.post("/alunos",(req, res) =>{
    const { nome, email, turma } = req.body;
    
})