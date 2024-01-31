function toRomanLazy(num) {
  let output = ""
  let romanNumeralToArabic = { 
    M: 1000, D: 500, C: 100, 
    L: 50, X: 10, V: 5, I: 1
  };

  let romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"]
  
  let i = 0

  while (i < romanNumeralPriorityOrder.length) {
      let qty = Math.floor(num / romanNumeralToArabic[romanNumeralPriorityOrder[i]]);
      while (qty > 0) {
        output = output + romanNumeralPriorityOrder[i]
        num -= romanNumeralToArabic[romanNumeralPriorityOrder[i]]
        qty -= 1
      }
    i++;
  }
  return output
}


function toRoman(num) {
  let output = ""
  
  let romanNumeralToArabic = { 
    M: 1000, CM: 900, D: 500, CD: 400, 
    C: 100,  XC: 90, L: 50, XL: 40, X: 10, 
    IX: 9, V: 5, IV: 4, I: 1
  };
  
  let romanNumeralPriorityOrder = [
    "M", "CM", "D", "CD", 
    "C", "XC", "L", "XL", "X", 
    "IX", "V", "IV", "I"
  ]
  
  let i = 0
  
  while (i < romanNumeralPriorityOrder.length) {
      let qty = Math.floor(num / romanNumeralToArabic[romanNumeralPriorityOrder[i]]);
      while (qty > 0) {
        output = output + romanNumeralPriorityOrder[i]
        num -= romanNumeralToArabic[romanNumeralPriorityOrder[i]]
        qty -= 1
      }
    i++;
  }
  return output
}

module.exports = { toRoman, toRomanLazy };
