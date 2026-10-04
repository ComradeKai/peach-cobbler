LootJS.modifiers(event => {
    event
        .addTableModifier("minecraft:chests/abandoned_mineshaft")
        .replaceLoot("minecraft:glow_berries", "minersdelight:cave_carrot", true)
})