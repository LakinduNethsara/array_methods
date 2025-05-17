const ArrayFindIndex = ({nameList})=>{
    const nameIndex = nameList.findIndex((name)=>(name.toLowerCase().includes("r")))

    return (
        <div>
            <h1>First Name Include Letter 'r' (findIndex)</h1>
            <table border={1} cellPadding={5}>
                    {nameList.map((name,index)=>(
                            <tr bgcolor={index===nameIndex ? "red" : null}>
                                <td key={index}>{index}</td>
                                <td key={name}>{name}</td>
                            </tr>))
                    }
            </table>
            <hr />
            <p>{nameIndex}</p>
        </div>
    );



};

export default ArrayFindIndex;