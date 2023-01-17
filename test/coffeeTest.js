var assert = require('assert');
var Coffee = require('../lib/Coffee');

describe('Coffee', function () {

  describe('#type', function () {
    it('doit retourner la référence du type de café passé en paramètre', function () {
      assert.equal(Coffee.getType('Café en grains'), 1, 'Type inconnu');
      assert.equal(Coffee.getType('Café moulu'), 2, 'Type inconnu');
      assert.equal(Coffee.getType('Café dosette'), 3, 'Type inconnu');
      assert.equal(Coffee.getType('Café capsule'), 4, 'Type inconnu');
      assert.equal(Coffee.getType('Café qui n\'existe pas'), 5, 'Type inconnu');
    });
  });

  // Passer les tests sur un jeu de données
  describe('#grinding', function() {
    const machineNames = [
      {args: 'French Press', expected: 'Coarse'},
      {args: 'Cold Brew', expected: 'Coarse'},
      {args: 'Pour over', expected: 'Medium coarse'},
      {args: 'Machine drip', expected: 'Medium'},
      {args: 'Siphon', expected: 'Medium'},
      {args: 'Moka pot', expected: 'Fine'},
      {args: 'Turkish coffee pot', expected: 'Extra fine'}
    ];

    machineNames.forEach(({args, expected}) => {
      it('doit retourner la mouture associée à l\'appareil passé en paramètre', function () {
        assert.strictEqual(Coffee.getGrinding(args), expected);
      });  
    });
  })
})