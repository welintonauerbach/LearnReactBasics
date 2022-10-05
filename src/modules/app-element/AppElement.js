import React from "react";

export default props =>
<React.Fragment>
<input type="text" placeholder="Digite aqui" value={props.name} onChange={props.func}/>            
<button type="button">Enviar</button>
</React.Fragment>