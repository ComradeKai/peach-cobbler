StartupEvents.registry('item', event => {
  
  event.create('rice_flour')
    .displayName('Rice Flour')
    
    })

StartupEvents.modifyCreativeTab('create:create', event => {
	event.addAfter('create:wheat_flour', 'kubejs:rice_flour')
	
	})