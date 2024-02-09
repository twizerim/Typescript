export function convertoArray(objc: object) {
    const keyvalue = Object.entries(objc);
    const convert = keyvalue;
    return convert;
  }
  
  const fruits = { mango: "yellow", avocado: "green", tomatos: "red" };
  const resulte = convertoArray(fruits);
  console.log(resulte);
  