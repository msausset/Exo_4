// TP TESTS UNITAIRES
// EXEMPLE

var assert = require("assert");
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// EXERCICE 3

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1, nombre2) {
  return nombre1 + nombre2;
}

// Avec les valeurs de paramètres 2 et 5, la fonction somme() est sensée retrourner la valeur 7

//SANS FONCTION SOMME
describe("Addition test 1", function () {
  it("should return the addition of the 2 numbers", function () {
    resultat = 2 + 5;
    assert.strictEqual(resultat, 7);
  });
});

//AVEC FONCTION SOMME
describe("Addition test 1", function () {
  it("should return the addition of the 2 numbers", function () {
    assert.strictEqual(somme(2, 5), 7);
  });
});

// Avec les valeurs de paramètres 30 et 50, la fonction somme() est sensée retrourner la valeur 80

//SANS FONCTION SOMME
describe("Addition test 2", function () {
  it("should return the addition of the 2 numbers", function () {
    resultat = 30 + 50;
    assert.strictEqual(resultat, 80);
  });
});

//AVEC FONCTION SOMME
describe("Addition test 2", function () {
  it("should return the addition of the 2 numbers", function () {
    assert.strictEqual(somme(30, 50), 80);
  });
});

// Avec les valeurs de paramètres 215 et 5978, la fonction somme() est sensée retrourner la valeur 6193

//SANS FONCTION SOMME
describe("Addition test 3", function () {
  it("should return the addition of the 2 numbers", function () {
    resultat = 215 + 5978;
    assert.strictEqual(resultat, 6193);
  });
});

//AVEC FONCTION SOMME
describe("Addition test 3", function () {
  it("should return the addition of the 2 numbers", function () {
    assert.strictEqual(somme(215, 5978), 6193);
  });
});

// EXERCICE 4

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chai = require("chai");
const expect = chai.expect;

// Création d'un nouveau Schema
const testSchema = new Schema({
  nom: { type: String, required: true },
});
//Création d'une nouvelle collection
const Nom = mongoose.model("Nom", testSchema);
describe("Test BDD", function () {
  before(function (done) {
    mongoose.connect(
      "mongodb+srv://mangeonsensemble:projet_pim_estiam@cluster0.svlza.mongodb.net/test"
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function () {
      console.log("Connexion réussie !");
      done();
    });
  });
  describe("Test BDD", function () {
    //Nouveau doc nom : Maxime
    it("Nouveau document dans la BDD", function (done) {
      var testNom = Nom({
        nom: "Maxime",
      });

      testNom.save(done);
    });
  });
});
