
//code1 kilometerToMeter

function kilometerToMeter(kilo){
  //1km =1000m thats why multifly with 1000.
    meter = kilo * 1000;
      return meter;
}
/** 
var result = kilometerToMeter(14);
console.log(result);
*/


//code2 budgetCalculator

function budgetCalculator(watch, phone, laptop){
  var watchprice = watch*50;
  var phoneprice = phone*100;
  var laptopprice = laptop*500;
  var total = watchprice + phoneprice + laptopprice;
   return total;
}
/**
var result = budgetCalculator(2, 2, 2);
console.log(result);
*/


//code3 hotelCost

function hotelCost(n){
  var total = 0;
  // first 10days costing condition
  if (n<=10){
      total = n*100;
  }
  //after 10days and before 20days or equal condition
  else if(n<=20){
      var firstTenDays = 10*100;
      var remaining = n - 10;
      var secondTenDays = remaining * 80;
      total = firstTenDays + secondTenDays;
  }
  //after 20days condition
  else{
      var firstTenDays = 10 * 100;
      var secondTenDays = 10 * 80;
      var remaining = n - 20;
      var afterTwintyDays = remaining * 50;
      total = firstTenDays + secondTenDays + afterTwintyDays;
  }
  return total;
}

/**
var results = hotelCost(12);
console.log(results);
*/

//code4 megaFriend

function megaFriend(myFriends){
  var longestFriendsName = myFriends[0];
  for(var i=0; i<myFriends.length; i++){
      var element = myFriends[i];
      if (element.length > longestFriendsName.length){
          longestFriendsName = element;
      }
  }
  return longestFriendsName;
}

/** 
var myFriends = ["Raj", "Niloy", "Akashdev", "Joykumardey", "rajkumardey"];
var result = megaFriend(myFriends);
console.log(result);
*/
