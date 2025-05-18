const ArrayFilter =({nameList})=>{
    const filteredName = nameList.filter((name)=>{
        return (name.toLowerCase().startsWith("a"));
    });

    return (
        <div>
            <h1>Filtered Name List</h1>
            <ul>
                {
                    filteredName.map((name,index)=>{
                        return (
                            <li key = {index}>{name}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ArrayFilter;