const ArraySlice = ({nameList}) => {
    // const arr1 = [nameList[3], nameList[4], nameList[5]];
    const arr1 = nameList.slice(3,5);

    return (
        <div>
            
            <h1>Original Array Before Slice</h1>
            <table border={1} cellpadding={5}>
                {
                    nameList.map((name,index)=>(
                        <tr>
                            <td key ={index}>{index}</td>
                            <td key ={name}>{name}</td>
                        </tr>
                    ))
                }
            </table>

            <h1>Array Slice</h1>
            <table border={1} cellpadding={5}>
                {
                    arr1.map((name,index)=>(
                        <tr>
                            <td key ={index}>{index}</td>
                            <td key ={name}>{name}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default ArraySlice;