var Timer = window.setInterval(function(){tick()},1000);
var BuildingName = "Lemonade Stand";
var BuildingCost = 10;
var BuildingPerSec = 1;
var BuildingQty = 0;

window.onload = function()
{
	window.game = new GameSave();
}

window.building1 = new Building();
building1.name = "Lemonade Stand";
building1.cost = 10;
building1.persec = 1;
building1.qty = 0;

function GameSave()
{
	this.money = 0;
}

function GatherMoney()
{
	game.money ++;
	document.getElementById("money").innerHTML = game.money;
}

function Building() 
{
	this.name = "Building Name";
	this.cost = 10;
	this.persec = 1;
	this.qty = 0;
}

function tick()
{
	game.money += 1 + (building1.qty * building1.persec);
	document.getElementById("money").innerHTML = game.money;
}

function BuyLemonadeStand()
{
	if (game.money >= building1.cost)
	{
		game.money -= building1.cost;
		building1.qty++;
		document.getElementById("money").innerHTML = game.money;
		document.getElementById("buildingQty").innerHTML = building1.qty;
	}
}