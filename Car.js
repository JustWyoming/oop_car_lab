function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;

  //TODO: add year, color, seats here
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];

}

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner);
	this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.start = function(start){
	this.running = true;
};

Car.prototype.off = function(off){
	this.running = false;
};

Car.prototype.driveTo = function(destination){
	if(this.running === false){
		return false
	} else {
	console.log("drving to" + destination)
	return true;
	}	
};
Car.prototype.park = function(park){
	if(this.running === true){
		return false;
	} else {
		console.log("parked");
		return true;		
	}
};
Car.prototype.pickUp = function(name){
	if(this.running === true && this.seats-1 > this.passengers.length){
		this.passengers.push(name);
		return true; 
			} else {
				return false;
		}
	};
Car.prototype.dropOff = function(name){
	var droppedOff = this.passengers.indexOf(name);
	
	if(this.running === false || droppedOff < 0){
		return false
	} else{
		this.passengers.splice(droppedOff, 1)
		console.log("dropped off" + name);
		return true
	}

	// if running drop off person and remove name from 
	//passengers array with 'dropping off ___ message' return true
	//else return false
	//create variable for this.passengers.indexOf for array of who you are looking 
	//for to get the index or it will be -1 //look at .splice for examples for pulling from array
};
Car.prototype.passengerCount = function(){
	return this.passengers.length 
};
	







// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;