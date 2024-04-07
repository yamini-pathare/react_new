let name='yamini';

function checkEvenOrOdd(num){
if(num%2 === 0){
  return<div>even</div>
}
else{
  return<div> odd </div>
}
}

function checkAlphabet(char)
{
switch(char){
  case 'a': 
  case 'e':
    case 'i':
      case 'o':
        case 'u':
  return <div>vowel </div>
          default : 
        return <div> not vowel </div>}
}
let num=12;
const users =[
  { name:'yami',age:19 },
  { name:'somi',age:18}

]

function Jsx()
{
  return (
    <div>
      <h2> Hello {name}</h2>
      <div>
  
        {
          checkEvenOrOdd(12)
        }
      {
       num%2===0 ? <div>even</div>
                 : <div>odd</div>
      }
      <h3>if statement</h3>
      {
        num%2===0 &&<div> even number</div>
      }
      {
        num%2>0 && <div> odd number </div>
      }
      </div>
    
    <h3> loop </h3>
    {
      users.map((item,index)=> 
      { return <div key ={index} >
        {item.name} - {item.age}
          </div>}
)
}
    
 <h3> switch 
 </h3>
 {
  checkAlphabet('z')
 }
 </div>
 );
}

export default Jsx;
export function Greet(){
    return  <h1> hiii</h1>
}