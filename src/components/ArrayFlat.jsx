const ArrayFlat = ({nameList}) => {

    const newNameList = [...nameList.slice(0,3),[...nameList.slice(3,5),[...nameList.slice(5,10)]]];
    const flatNameList1 = newNameList.flat();
    const flatNameList2 = flatNameList1.flat(2);
    return (
        <div>
            <h1>Nested Array</h1>
            <table border={1} cellpadding={5}>
                <tr>
                    <td>
                        {JSON.stringify(newNameList)}
                    </td>
                </tr>
            </table>

            <h3>Flatted Array Level 1</h3>
            <table border={1} cellpadding={5}>
                <tr>
                    <td>
                        {JSON.stringify(flatNameList1)}
                    </td>
                </tr>
            </table>

            <h3>Flatted Array Level 2</h3>
            <table border={1} cellpadding={5}>
                <tr>
                    <td>
                        {JSON.stringify(flatNameList2)}
                    </td>
                </tr>
            </table>
        </div>
    );

}
    export default ArrayFlat;