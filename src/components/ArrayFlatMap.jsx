const ArrayFlatMap = ({nameList}) => {

    var arr1 = nameList.map((name)=>(name.split('')));
    var arr2 = nameList.flatMap((name)=>(name.split('')));
    return (
        <div>
            <h1> Array Flat Map</h1>
            <h3>Original Array</h3>
            <table border={1} cellpadding={5}>
                <tr>
                    <td>
                        {JSON.stringify(nameList)}
                    </td>
                </tr>
            </table>

            <h3>Flatted Array Level 1</h3>
            <table border={1} cellpadding={5}>
                <tr>
                    <td>
                        {JSON.stringify(arr1)}
                    </td>
                </tr>
            </table>

            <h3>Flatted Array Level 2</h3>
            <table border={1} cellpadding={5}>
                <tr>
                    <td>
                        {JSON.stringify(arr2)}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ArrayFlatMap;