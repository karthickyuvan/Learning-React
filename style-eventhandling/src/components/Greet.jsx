

function Greet({name}){
const sayHello=(name)=>{
    alert(`Hello ${name}`);
}
return<button onClick={()=>sayHello(name)}>Say Hello</button>
}

export default Greet;