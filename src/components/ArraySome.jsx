import React from 'react'

export default function ArraySome({nameList}) {
    const letter ='r';
    const status = nameList.some((name)=>(name.includes(letter)));
  return (
    <div>
        <h1>Check if any name include '{letter}' (some)</h1>
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
