export default function ArrayEvery({nameList}) {

    const letter ='r';
    const status = nameList.every((name)=>(name.includes(letter)));
    return (
        <div>
            <h1>Check if all name include '{letter}' (every)</h1>
            <table border={1} cellpadding={5}>
                {
                    nameList.map((name,index)=>(
                        <tr>
                            <td key={index}>{index}</td>
                            <td key={name}>{name}</td>
                        </tr>
                    ))
                }
            </table>
            <p>{status? "yes" : "No"}</p>
        </div>
    )
  
}
