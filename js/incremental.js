// the timer to run code every second
var Timer = window.setInterval(function(){Tick()},1000);
// the array of buildings
var buildings = [];

// the object constructor for game saves
function GameSave()
{
	this.money = 0;
	this.buildings = [];
	for (var i = 0; i < buildings.length; i++)
	{
		this.buildings[i] = 0;
	}
}

// the object constructor for buildings
function Building() 
{
	this.name = "Building Name";
	this.cost = 10;
	this.persec = 1;
}

// the function to initialize all the buildings
function InitBuildings()
{
	LoadBuilding("Lemonade Stand",10,1);
}

// the function to load a building into the array
function LoadBuilding(name, cost, persec)
{
	var cur = buildings.length;
	
	buildings[cur] = new Building();
	buildings[cur].name = name;
	buildings[cur].cost = cost;
	buildings[cur].persec = persec;
}

// the function called when the money button is clicked
function GatherMoney()
{
	game.money ++; //increment
	document.getElementById("money").innerHTML = game.money; //update display
}

function Tick()
{
	// increment the money by 1 plus the buildings' income
	for (var i = 0; i < buildings.length; i++)
	{
		game.money += 1 + (game.buildings[i] * buildings[i].persec);	
	}
	document.getElementById("money").innerHTML = game.money;
}

//the function to build a building
function Build(id)
{
	if (game.money >= buildings[id].cost) 	// is there enough money?
	{
		game.money -= buildings[id].cost;	//decrease the money by the cost
		game.buildings[id]++;				//increase the quantity of that building
		document.getElementById("money").innerHTML = game.money;				//update the money display
		document.getElementById("buildingQty").innerHTML = game.buildings[id];	//update the building display
	}
}

window.onload = function()
{
	InitBuildings();
	window.game = new GameSave();
}