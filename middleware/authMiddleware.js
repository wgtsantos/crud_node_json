/* Middleware para verificar se o usuário está logado/autenticado no sistema */
function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next(); // Acessar o sistema como admin
    } else {
        res.redirect('login.html'); // Redirecionar para tela de login
    }
}

module.exports = { isAuthenticated };