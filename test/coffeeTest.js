var assert = require('assert');
var Coffee = require('../lib/Coffee');
// Bloc de tests de la classe Coffee
describe('Coffee', function () {
  // Test la méthode getType
  describe('#type', function () {
    it('doit retourner la référence du type de café passé en paramètre', function () {
      assert.equal(Coffee.getType('Café en grains'), 1, 'Type inconnu');
      assert.equal(Coffee.getType('Café moulu'), 2, 'Type inconnu');
      assert.equal(Coffee.getType('Café dosette'), 3, 'Type inconnu');
      assert.equal(Coffee.getType('Café capsule'), 4, 'Type inconnu');
      assert.equal(Coffee.getType('Café qui n\'existe pas'), 5, 'Type inconnu');
    });
  });

  //Test la methode getGrinding
  describe('#grinding', function() {
    // Ici on passe les tests à partir d'un jeu de données
    const machineNames = [
      {args: 'Cafetière à piston', expected: 'Coarse'},
      {args: 'Cafetière infusion à froid', expected: 'Coarse'},
      {args: 'Cafetière à filtre', expected: 'Medium coarse'},
      {args: 'Cafetière électrique', expected: 'Medium'},
      {args: 'Cafetière à dépression', expected: 'Medium'},
      {args: 'Cafetière italienne', expected: 'Fine'},
      {args: 'Cafetière turque', expected: 'Extra fine'}
    ];

    machineNames.forEach(({args, expected}) => {
      it('doit retourner l\'appareil ' + args + ' associée à la mouture ' + expected, function () {
        assert.strictEqual(Coffee.getGrinding(args), expected);
      });
    });
  })
})