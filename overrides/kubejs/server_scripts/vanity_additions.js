LootJS.lootTables(event => {
  event
      .getLootTable("minecraft:chests/underwater_ruin_small")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_deep_forged:glassteel_blade\", minecraft:item_name=\"'Glassteel Design'\"]").withWeight(1))
  event
      .getLootTable("minecraft:chests/abandoned_mineshaft")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_deep_forged:refined_implements\", minecraft:item_name=\"'Refined Implements Design'\"]").withWeight(15))
  event
      .getLootTable("minecraft:chests/jungle_temple")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_aesthetic_armory:fine_swordsmithing\", minecraft:item_name=\"'Fine Swordsmithing Design'\"]").withWeight(20))
  event
      .getLootTable("minecraft:chests/village/village_weaponsmith")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_aesthetic_armory:blacksmithing\", minecraft:item_name=\"'Blacksmithing Design'\"]").withWeight(10))
  event
      .getLootTable("nomansland:chests/small_dungeon_core")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_aesthetic_armory:polearm\", minecraft:item_name=\"'Polearm Design'\"]").withWeight(20))
  event
      .getLootTable("minecraft:chests/village/village_mason")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_statue_decoration:statue_decoration\", minecraft:item_name=\"'Statue Decoration Design'\"]").withWeight(2))
  event
      .getLootTable("minecraft:chests/ancient_city")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_colossal_weapons:heavy_blacksmithing\", minecraft:item_name=\"'Heavy Blacksmithing Design'\"]").withWeight(1))
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_deep_forged:deep_forged\", minecraft:item_name=\"'Deep Forged Design'\"]").withWeight(1))
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"ancient_tools:ancient\", minecraft:item_name=\"'Ancient Design'\"]").withWeight(1))
  event
      .getLootTable("minecraft:chests/desert_pyramid")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"ornate_weaponry:ornate\", minecraft:item_name=\"'Ornate Design'\"]").withWeight(30))
  event
      .getLootTable("minecraft:chests/nether_bridge")
      .firstPool()
      .addEntry(LootEntry.of("vanity:design[vanity:design=\"vanity_deep_forged:stygian_brass\", minecraft:item_name=\"'Stygian Brass Design'\"]").withWeight(8))
})