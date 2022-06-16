// => Generating 10 random 3 digit numbers
// => Adding Those Numbers into an Array
// => Finding out 2nd Largest Num and @nd Smallest Num into that array with sorting

//Function to get 2nd Largest and 2nd Smallest number using sorting
function Get2ndLargest2ndSmallestNum()
{
    let n=ArrayofRanNum.length; 
    //sorting array
    for(let i = 0 ; i <n ; i++)
    {
        let temp;
        for(let j=i+1; j< n ;j++)
        {
            if(ArrayofRanNum[i]<ArrayofRanNum[j])
            {
                temp=ArrayofRanNum[i];
                ArrayofRanNum[i]=ArrayofRanNum[j];
                ArrayofRanNum[j]=temp;
            }
        }
    }
    console.log("The second smallest element is ",ArrayofRanNum[n-2]);   //Accessing the smallest element
    console.log("The second largest element is ",ArrayofRanNum[1]);      //Accessing the largest element
}

let ArrayofRanNum=[];  //declraing array
let count=0            
//Using for loop to generate 10 Random 3 digit numbers and adding them into ArrayofRanNum
for(let i=0;i<10;i++)
{   
    count++;
    let num=Math.floor(Math.random() * (1000-100+1)+100);  //Gen 10 Random 3 digit Num (min value=100 ,Max value=1000)
    console.log("Num "+count+" = "+num);
    ArrayofRanNum[i]=num;                       //Adding each randomly gen num into an array
}

//Function Calls
Get2ndLargest2ndSmallestNum();     
