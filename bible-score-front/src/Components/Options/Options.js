import react from "react";

export default function Options({ array }){ 
    return(
        <>
            {
                array.map((e, i) => {
                    return <option  key={i} style={{'fontFamily': 'custom1', 'fontWeight': 'bold', 'fontSize': '15px'}} value={e.id}>{e.name}</option>
                })
            }
        </>
    );
}