export function Findmaxvalue(numbers:number[]):number|undefined{ 
    if(numbers.length===0){
        return undefined
    }

    let max=numbers[0]

    for(let i=1;i<numbers.length;i++){
         if(numbers[i]>max){
            max=numbers[i]
         }
    }
    return max
    
  }
  const numbersArray =[0,1,9,2,7,3,4,5,6,8]
  const maxValue=Findmaxvalue(numbersArray)

  if(maxValue !==undefined){
    console.log(`maximum number is : ${maxValue}`)
  }else{
    console.log("Array is empty.")
  }
  
 
  