  ServerEvents.recipes((event) => {
  [
    "create:belt_connector",
    "farmersdelight:sweet_berry_cookie",
    "farmersdelight:apple_pie",
    "farmersdelight:pie_crust"
  ].forEach((id) => {
    event.replaceInput(
        {id: id},
        "minecraft:wheat",
        "farmersdelight:wheat_dough"
    );
  })