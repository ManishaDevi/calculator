import React from 'react';

import './Button.scss';

//common button
function Button({label, clicked, icon}) {
    return(
        <button type="submit" value= {label} className="btn" onClick={clicked}>{icon} {label}</button>
    );
}

export default Button;