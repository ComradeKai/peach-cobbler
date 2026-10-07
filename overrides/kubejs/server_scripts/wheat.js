ServerEvents.recipes((event) => {
  global.cutting(event, "minecraft:wheat", "c:tools/knife", [
    {id: "create:wheat_flour", chance: 1.0},
    {id: "farmersdelight:straw", chance: 0.5},
  ]);

  global.cutting(event, "farmersdelight:rice", "c:tools/knife", [
    {id: "kubejs:rice_flour", chance: 1.0},
    {id: "minecraft:bone_meal", chance: 0.1},
  ]);

  event.remove({id: "farmersdelight:wheat_dough_from_egg"});
  event.remove({id: "farmersdelight:wheat_dough_from_water"});

  event.shapeless("8x farmersdelight:wheat_dough", [
    "4x create:wheat_flour",
    "1x minecraft:egg",
    "4x create:wheat_flour",
  ]);
  event.shapeless("8x farmersdelight:wheat_dough", [
    "4x create:wheat_flour",
    "1x minecraft:water_bucket",
    "4x create:wheat_flour",
  ]);

  event.replaceInput(
      {id: "supplementaries:sack_2"},
      "minecraft:wheat",
      "farmersdelight:canvas"
  );

  [
    "farmersdelight:honey_cookie",
    "farmersdelight:sweet_berry_cookie",
    "farmersdelight:apple_pie",
    "farmersdelight:pie_crust",
    "nomansland:food/pear_cobbler",
    "farmersdelight:cake_from_milk_bottle",
    "minecraft:cake",
    "minecraft:cookie",
    "nomansland:food/fruit_cake",
    "nomansland:food/sweet_tart",
    "nomansland:food/maple_tart",
    "brewinandchewin:pizza",
    "brewinandchewin:rich_chocolate_cake",
    "abundant_atmosphere:squashberry_bread",
    "abundant_atmosphere:integration/farmersdelight/squashberry_cookie",
    "nirvana:weed_brownie",
    "minersdelight:nutritional_bar",
    "minersdelight:bat_cookie"
  ].forEach((id) => {
    event.replaceInput(
        {id: id},
        "minecraft:wheat",
        "farmersdelight:wheat_dough"
    );
  })
})