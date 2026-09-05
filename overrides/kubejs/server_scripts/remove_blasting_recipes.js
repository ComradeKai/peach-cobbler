ServerEvents.tags('fluid', event => {
    event.remove("create:fan_processing_catalysts/blasting", "minecraft:lava")
    event.remove("create:fan_processing_catalysts/blasting", "minecraft:flowing_lava")
})