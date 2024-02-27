function Food(){

    let food1 = "apple";
    let food2 = "banana";

    return(
    <Food>
      <ul>
        <li>Burgers</li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2}</li>
        </ul>  
    </Food>
    );
}

export default Food