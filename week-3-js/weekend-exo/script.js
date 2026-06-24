// *==================start besmillah==============================
let players = {
   firstName: "Ahmed",
   energy: 100,
   inventory: [],
   currentRoom: "Room 1",
   isAlive: true
}
let rooms = [
  {
    name: "Room 1",
    item: "Rusty Key",
    energyCost: 15,
    isLocked: false
  },
  {
    name: "Room 2",
    item: "Energy Elixir",
    energyCost: 20,
    isLocked: true
  },
  {
    name: "Room 3",
    item: "Crowbar",
    energyCost: 25,
    isLocked: true
  },
  {
    name: "Room 4",
    item: "Shield Crest",
    energyCost: 30,
    isLocked: true
  },
  {
    name: "Room 5",
    item: "Golden Freedom Medal",
    energyCost: 40,
    isLocked: true
  }
];
function  displayRooms( displayRooms) {
    displayRooms.forEach(element => {console.log(element.name);
        console.log(element.energyCost);
        console.log(element.isLocked);
    
        
    });
}
displayRooms(rooms)
//! ===================================================
function  enterRoom(players, rooms,roomName) {
     let items =rooms.find((element)=>element.name === roomName);
     
    if ((players.energy) >= (items.energyCost)) {
       players.energy-=items.energyCost;
       players.currentRoom = roomName;
        console.log('play');
        
    }
    else{
        console.log('Not enough energy');
        
    }
    
}
enterRoom(players,rooms, "Room 5")
console.log(players);
// !====================================================
function  collectItem(players,rooms, roomName) {
    if (players.currentRoom === roomName) {
      let totalItems = 0;
       let items =  rooms.find(element=>{ return element.name === roomName})
       if (items && items.item) {
        totalItems += items.item;
         players.inventory.push(items.item)
          items.item = null
        }
        else{
            console.log('already collected');
        }
        
    }
}
collectItem(players,rooms, 'Room 5')
// ============

console.log(players);
// =

function  collectItem(players,rooms, roomName) {
    if (players.currentRoom === roomName) {
      let totalItems = 0;
       let items =  rooms.find(element=>{ return element.name === roomName})
       if (items && items.item) {
        totalItems += items.item;
         players.inventory.push(items.item)
          // items.item = null
        }
        else{
            console.log('already collected');
            
        }
        
    }
}
collectItem(players,rooms, 'Room 5')
// ============
console.log(players);
// !====================================================
function unlockRoom(rooms,players,roomkey) {
  if (rooms.find(element=>{ return element.isLocked === true})) {
    if ( players.inventory.includes(roomkey)) {
      rooms.isLocked = false
      console.log('room is unlocked');
      
    }else{
    console.log('No key is currently availabe');
    
  }
  }
}
unlockRoom(rooms,players, "Golden Freedom Medal")
console.log(players);
// !====================================================
function removeItem(rooms,players,roomkey) {
  if (players.currentRoom === rooms.name) {
  }
  let index = players.inventory.indexOf(roomkey)
  if (index!= -1) {
  players.inventory.splice(index,1)
  
  
}else{
  console.log(players.inventory);
}
  }
  
removeItem(rooms,players,'Golden Freedom Medal')
console.log(players);
// !======================================================
function showInventory(players) {
  players.inventory.forEach((element)=>{console.log(element)})
  
}
showInventory(players)
// !======================================================
function sortRoomsByEnergy(rooms) {
  rooms.sort((lowestenergy,highestenergy)=> lowestenergy.energyCost-highestenergy.energyCost)
}
sortRoomsByEnergy(rooms)
// console.log(rooms);
// !======================================================
function generateGameReport(players , rooms) {
  console.log(players.currentRoom);
  console.log(players.energy);
  console.log(players.inventory);
 let locked= rooms.filter(element=>element.isLocked === false);
 console.log(locked);
 let unlocked= rooms.filter(element=>element.isLocked === true);
 console.log(unlocked);

}
generateGameReport(players,rooms)