module.exports = {
    getType: function(type) {
        switch (type){
            case 'Café en grains':
                return 1;
            case 'Café moulu':
                return 2;
            case 'Café dosette':
                return 3;
            case 'Café capsule':
                return 4;
            default:
                return 5;
        }
    },
    getGrinding: function(machine) {
        switch (machine){
            case 'French Press':
            case 'Cold Brew':
                return 'Coarse';
            case 'Pour over':
                return 'Medium coarse';
            case 'Machine drip':
            case 'Siphon':
                return 'Medium';
            case 'Moka pot':
                return 'Fine';
            case 'Turkish coffee pot':
                return 'Extra fine';
            default:
                return 'Unknown grinding';
        }
    }
}