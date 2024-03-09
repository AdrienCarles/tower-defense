const waves = [
    { // Niveau 1
        level: 1,
        wave: [
            { // Vague 1
                enemies: {
                    'type1': { count: 3 },
                }
            },
            { // Vague 2
                enemies: {
                    'type1': { count: 4 },
                    'type2': { count: 3 },
                }
            },
            { // Vague 3
                enemies: {
                    'type2': { count: 4 },
                    'type3': { count: 3 }
                }
            }
        ]
    },
    { // Niveau 2
        level: 2,
        wave: [
            { // Vague 1
                enemies: {
                    'type1': { count: 3 },
                    'type2': { count: 4 },
                    'type3': { count: 3 }
                }
            },
            { // Vague 2
                enemies: {
                    'type1': { count: 3 },
                    'type2': { count: 4 },
                    'type3': { count: 3 }
                }
            },
            { // Vague 3
                enemies: {
                    'type1': { count: 3 },
                    'type2': { count: 4 },
                    'type3': { count: 3 }
                }
            }
        ]
    },
];

export default waves;