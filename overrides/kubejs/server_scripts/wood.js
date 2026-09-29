ServerEvents.recipes((event) => {
  let furniture = (tableId, shutterId, planks) => {
    event.remove({id: tableId});
    event.shaped(tableId, [
      "PPP",
      "S S",
      "S S"
    ], {
      S: "minecraft:stick",
      P: planks,
    });

    event.remove({id: shutterId});
    event.shaped(`4x ${shutterId}`, [
      "PPS",
      "PPS",
      "PPS"
    ], {
      P: planks,
      S: "minecraft:stick"
    });
  };
  global.woods.vanilla.forEach((wood) => {
    furniture(
        `another_furniture:${wood}_table`,
        `another_furniture:${wood}_shutter`,
        `minecraft:${wood}_planks`
    );
  });

  global.woods.modded.forEach((id) => {
    const mod = id.split(":")[0];
    const wood = id.split(":")[1];
    furniture(
        `everycomp:af/${mod}/${wood}_table`,
        `everycomp:af/${mod}/${wood}_shutter`,
        `${id}_planks`
    );
  });
})

