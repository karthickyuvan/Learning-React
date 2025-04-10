function Welcome(props){

    console.log(props);
    
return(
    <div>
        <h2>Vanakkam {props.name} 🙌</h2>
    </div>
)
}
export default Welcome;