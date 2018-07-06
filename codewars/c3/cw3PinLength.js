//
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.



function validatePIN (pin) {
 //return true or false

 console.log ( parseFloat( pin ));

 if ( pin.length === 4 || pin.length === 6) {

   if ( typeof parseFloat( pin ) != "number" || /\D/.test(pin) || /[a-z]/.test(pin)) {
     return false;
   } else {
     return true;
   }
 } else {
   return false;
 }
}



//
//
// Test Results:
//  validatePIN
//  should return False for pins with length other than 4 or 6 (9 of 9 Assertions)
//  should return False for pins which contain characters other than digits (2 of 2 Assertions)
//  should return True for valid pins (8 of 8 Assertions)
// Completed in 8ms
