MoreJS.wandererTrades((event) => {

// Basic trade additions
    event.addTrade(1, [TradeItem.of("minecraft:emerald", 8, 12)], "cobblemon:black_tumblestone");
    event.addTrade(1, [TradeItem.of("minecraft:emerald", 8, 12)], "cobblemon:tumblestone");
    event.addTrade(1, [TradeItem.of("minecraft:emerald", 8, 12)], "cobblemon:sky_tumblestone");
    event.addTrade(2, [TradeItem.of("minecraft:emerald", 32, 42)], "cobblemon:cherish_ball")
         .transform((offer, entity, random) => {
            offer.maxUses = 3});
    event.addTrade(2, [TradeItem.of("minecraft:emerald", 50, 64)], "cobblemon:ancient_origin_ball")
         .transform((offer, entity, random) => {
            offer.maxUses = 1});
    event.addTrade(2, [TradeItem.of("minecraft:emerald", 20, 32)], "cobblemon:ability_patch")
         .transform((offer, entity, random) => {
            offer.maxUses = 2});
    event.addTrade(2, [TradeItem.of("minecraft:emerald", 18, 24)], "cobblemon:lucky_egg")
         .transform((offer, entity, random) => {
            offer.maxUses = 1});
// Buying Fossils
})