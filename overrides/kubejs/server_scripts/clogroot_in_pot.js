LootJS.lootTables(event => {
  event
      .getLootTable("nomansland:chests/ancient_pot_cave")
      .firstPool()
      .addEntry(LootEntry.of("minersdelight:cave_carrot").withWeight(125).setCount([1, 3]))
    })