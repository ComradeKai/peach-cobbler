StartupEvents.registry('item', event => {
  
  event.create('rice_flour')
    .displayName('Rice Flour')
    
  event.create('treated_tarp')
    .displayName('Treated Tarp')
    
    })

StartupEvents.modifyCreativeTab('create:create', event => {
	event.addAfter('create:wheat_flour', 'kubejs:rice_flour')
	
	})
	
StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
	event.addAfter('minecraft:leather', 'kubejs:treated_tarp')
	
	})