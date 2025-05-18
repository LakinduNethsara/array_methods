const ArraySort = ({nameList}) => {
    
    // const sortedArray = nameList.sort((a,b)=>(a.localeCompare(b)));
    // const sortedArray =[...nameList].sort((a,b)=>{return(a.localeCompare(b));});
    const sortedArray = [...nameList].sort((a,b)=>(a.length - b.length));


    return (
        <div>
            <h1>Array Sort</h1>
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
            <h2>Sorted List</h2>
            <table border={1} cellpadding={5}>
                {
                    sortedArray.map((name,index)=>(
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

export default ArraySort;