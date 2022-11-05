// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Validate credit cards with Luhn's algorithm
const validateCred = a => {
    
    const oL = a.length;
    let sum = 0;
    let sum2 = 0;
    let total = 0;

    // reversly iterate through and multiply every other number starting from array.length - 2 (excluding checker number (very last one))
    for(let i = oL - 2; i >= 0; i -= 2) {
        sum = a[i] * 2
        if(sum > 9) {
            sum -= 9;
        }
        // ads everyother to total
        total += sum;
        
    }
    

    for (let j = oL - 1; j >= 0; j -= 2) {
      sum2 += a[j];
    }
    total += sum2;

    // final check with modulo 10 if it is 0 returns true(valid card)
    return total % 10 === 0;
}


const findInvalidCards = b => {
    
    let inv = [];
    
    for (let i = 0; i < b.length; i++){
        // Add to array - valid credit cards
        if(validateCred(b[i])) {
        // Checks first number if it from Visa, Mastercard etc or unknown
        if (b[i][0]) {
            switch(b[i][0]) {
            case 3:
                inv.push(['Amex (American Express)',b[i],true]);
                break;
            case 4:
                inv.push(['Visa',b[i],true]);
                break;
            case 5:
                inv.push(['Mastercard',b[i],true]);
                break;
            case 6:
                inv.push(['Discover',b[i],true]);
                break;
            default:
                console.log("Company not found");
                break;
            }
        } 
        
        
        // Add to array - invalid credit cards
        } else {
            if (b[i][0]) {
            switch(b[i][0]) {
            case 3:
                inv.push(['Amex (American Express)',b[i],false]);
                break;
            case 4:
                inv.push(['Visa',b[i],false]);
                break;
            case 5:
                inv.push(['Mastercard',b[i],false]);
                break;
            case 6:
                inv.push(['Discover',b[i],false]);
                break;
            default:
                console.log("Company not found");
                break;
            }
        }
        }
    }
    return inv;
} 

console.log(findInvalidCards(batch))
