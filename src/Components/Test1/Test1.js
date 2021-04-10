import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Test1() {
    const [toggleText, settoggleText] = useState(false);
    return (
        <>
            <Link to="#" onClick={() => settoggleText(!toggleText)}>
                click this text
            </Link>
            {toggleText && <p>toggle showing text</p>}
        </>
    )
}
export default Test1