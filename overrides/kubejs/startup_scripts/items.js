StartupEvents.registry('item', event => {
  
  event.create('rice_flour')
    .displayName('Rice Flour')
    
  event.create('crushed_deepslate')
    .displayName('Crushed Deepslate')
    
    })

StartupEvents.modifyCreativeTab('create:create', event => {
	event.addAfter('create:wheat_flour', 'kubejs:rice_flour')
	event.addAfter('create:powdered_obsidian', 'kubejs:crushed_deepslate')
	
	})