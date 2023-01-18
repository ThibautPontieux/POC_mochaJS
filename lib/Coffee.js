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
            case 'Cafetière à piston':
            case 'Cafetière infusion à froid':
                return 'Coarse';
            case 'Cafetière à filtre':
                return 'Medium coarse';
            case 'Cafetière électrique':
            case 'Cafetière à dépression':
                return 'Medium';
            case 'Cafetière italienne':
                return 'Fine';
            case 'Cafetière turque':
                return 'Extra fine';
            default:
                return 'Unknown grinding';
        }
    }
}