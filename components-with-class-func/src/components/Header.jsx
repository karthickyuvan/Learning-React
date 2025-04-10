//Creating Components With Function

function Header(props)
{
    console.log(props);
    
    return(
        <header>
            <h1>To do List</h1>
        </header>
    )
}
export default Header;