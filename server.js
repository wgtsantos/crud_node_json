const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware de Autenticação de Sessão
app.use(session({
    secret: 'senai456',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const authRoutes = require('./routes/auth')
const routesPaginas = require('./routes/paginas');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/uploads', express.static('uploads'));

// Rota de autenticação de Login e Senha
app.use('/api/auth', authRoutes);

// Rotas de Páginas do Sistema com permissões de acesso
app.use('/', routesPaginas);
app.use('/api/paginas', routesPaginas);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}!`);
});
