const ArrayFind = ({nameList,numberList}) =>{

    const max = numberList.find((num)=>(num>5));
    const name = nameList.find((name)=>(name.includes("r")))

    return (
        <div>
            <h1>First Number Grater Than 5 (find)</h1>
            <table border={1} cellPadding={5}>
                <tr>
                    {numberList.map((number,index)=>(<td key={index}>{number}</td>))}
                </tr>
            </table>
            <hr />
            <p>first number grater than 5: {max}</p>

            <h1>First Name Include Letter 'r' (find)</h1>
            <table border={1} cellPadding={5}>
                <tr>
                    {nameList.map((name,index)=>(<td key={index}>{name}</td>))}
                </tr>
            </table>
            <hr />
            <p>first name includes letter 'r' : {name}</p>
        </div>
    );

}

export default ArrayFind;