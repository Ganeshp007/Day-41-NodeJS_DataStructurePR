// => Generating 10 random 3 digit numbers
// => Adding Those Numbers into an Array
// => Finding out 2nd Largest Num and @nd Smallest Num into that array withoue sorting

//Function to get smallest and second smallest random number
function Get2ndSmallestNum()
{
    let first=Number.MAX_SAFE_INTEGER ;
    let second=Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < ArrayofRanNum.length ; i ++)
    {
        /* If current element is smaller than first
        then update both first and second */
        if (ArrayofRanNum[i] < first)
        {
            second = first;
            first = ArrayofRanNum[i];
        }
 
        /* If arr[i] is in between first and second
        then update second */
        else if (ArrayofRanNum[i] < second && ArrayofRanNum[i] != first)
            second = ArrayofRanNum[i];
    }
    if (second == Number.MAX_VALUE )
        console.log("\nThere is no second smallest element!!");
    else
        console.log("\n>> The smallest element is " + first + "\n>> second "+
            "Smallest element is " + second +'\n');

}

// Function to get Largest and Second Largest random number
function Get2ndLargestNum()
{
    let first=Number.MIN_SAFE_INTEGER ;
    let second=Number.MIN_SAFE_INTEGER ;
    for (let i = 0; i < ArrayofRanNum.length ; i ++)
    {
        /* If current element is smaller than first
        then update both first and second */
        if (ArrayofRanNum[i] > first)
        {
            second = first;
            first = ArrayofRanNum[i];
        }
 
        /* If arr[i] is in between first and second
        then update second */
        else if (ArrayofRanNum[i] > second && ArrayofRanNum[i] != first)
            second = ArrayofRanNum[i];
    }
    if (second == Number.MIN_SAFE_INTEGER )
        console.log("There is no second Largest element!!");
    else
        console.log("\n>> The Largest element is " + first + "\n>> The second "+
            "Largest element is " + second +'\n');

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
Get2ndSmallestNum();
Get2ndLargestNum();       
