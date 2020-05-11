//Dans un premier temps, il faut importer Express et Mongoose pour la bdd

/*const express = require("express");
const mongoose = require("mongoose");

//Lancement du router

router.get("/", (req, res) => {
    res.send({ response: "Serveur fonctionnel" }).status(200);
});

//Il aurait fallut faire une connection avec mongoose

//Il nous aurait fallu aussi une direction poiur bdd

let dbURI = 'mongodb://localhost/utilisateurs';

mongoose
    .connect(dbURI, { useNewUrlParser: true})
    .then(() => console.log(`Connection reussie`))
    .catch(err => console.error(`Erreur connection ${err}`));


//Ici nous recuperons les données du formulaire pour les sauver (post)
router.post('/Formulaire', (req, res) => {
    //On reprend les données et on les stocks
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        website: req.body.website,
        phone: req.body.phone,
        street: req.body.street,
        city: req.body.city,

    });
    //Ici on les garde et on les envoie
    newUser
        .save()
        .then(post => res.json(post))
        .catch(err => console.error(err));
};

//Ici supprimons par l'id (delete)

router.delete('/:id', async (req, res) => {
    const user = await User
        .findByIdAndRemove(req.params.id)
        .then(() => 'User delete');
    res.json({ user });
});

//Ici nous recuperons tous les utilisateurs (get all)
router.get('/', function(req, res) {
    res.render('users', {
        users: []
    });
});


//Ici nous recuperons un user en particulier (get one)
router.get('/user', function(req, res){
    res.render('user', {
        user: req.user
    })
})*/


//Il faudrait créer une base de données sur mangoose.
//Il faut creer un modele qui auarit un schema de l'utilisateur.
//Il faut creer un router utilisteur.
//Dans ce router utilistateur il faut creer objet Utilisateur.
//Il faudra faire les differntes fonctions comme ajout avec Post ou supprimer avec delete comme en haut
