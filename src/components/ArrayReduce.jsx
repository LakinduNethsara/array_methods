const ArrayReduce = ({numberList})=>{

    const sum = numberList.reduce((total,number)=>{return(total+number)},100);

    return (
    <div>
        <h1>Number List (sum)</h1>
        <ul>
            {
                numberList.map((number,index) =>{
                    return (
                        <li key={index}>{number}</li>
                    )
                })
                
            }
        </ul>
        <p>Total is {sum}</p>
    </div>
    );

}

export default ArrayReduce;