global.woods = {
    vanilla: [
        "oak",
        "birch",
        "spruce",
        "dark_oak",
        "jungle",
        "acacia",
        "cherry",
        "mangrove",
        "crimson",
        "warped",
        "bamboo",
    ],
    modded: [
        "nomansland:maple",
        "nomansland:pine",
        "nomansland:walnut",
        "nomansland:willow",
        "newworld:fir",
        "abundant_atmosphere:gourdrot",
        "abundant_atmosphere:ashroot",
        "abundant_atmosphere:red_bamboo",
        "caverns_and_chasms:azalea",
        "cobblemon:apricorn",
        "cobblemon:saccharine"
    ],
};

global.ingredientOf = (id) => {
    return id.charAt(0) === "#" ? { tag: id.substring(1) } : { item: id };
};

global.cutting = (event, input, tool, results) => {
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [global.ingredientOf(input)],
        result: results.map((r) => {
            const entry = { item: { count: r.count || 1, id: r.id } };
            if (r.chance) entry.chance = r.chance;
            return entry;
        }),
        tool: { tag: tool },
    });
};