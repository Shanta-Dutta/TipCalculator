
// let qualityServe= function quality(tip){
//   if(tip===60){
//   console.log("great");
// }
// else if(tip===40){
//   console.log("good");
// }
// else{
//   console.log("need to improve")
// }
// };quality();


//The querySelector() method returns the first element that matches
////The onchange event occurs when the user interacts with the form.
// This action will execute a function that computes the final bill amount based on the percentage tip, then returns the results.

document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);//taking the input data from the user
  var tip = document.getElementById('tipInput').value;//taking the input of tip from the user to display the range of the tip
  document.getElementById('tipOutput').innerHTML = `${tip}%`;//select percentage of the tip
  var tipAmount = document.querySelector('#tipAmount')//it converts the percentage as amount.

  var totalBillWithTip = document.querySelector('#totalBillWithTip')//
   
    
  var tipValue = bill * (tip/100)
  var finalBill = bill + tipValue
    console.log(finalBill)


    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value =finalBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}