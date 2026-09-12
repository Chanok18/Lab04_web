// "Base de datos" en memoria de jugadores del Manchester United
const players = [];

const players_view = (req, res) => {
    res.render("players", { players });
};

const addPlayer = (req, res) => {
    const { nombre, posicion, dorsal, nacionalidad, goles } = req.body;
    players.push({ nombre, posicion, dorsal, nacionalidad, goles });
    res.redirect('/players');
};

const playersController = {
    players_view,
    addPlayer
};

module.exports = playersController;