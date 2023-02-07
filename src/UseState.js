import { useState } from "react"
/* reglas de los hooks:
- NO SE LLAMAN EN LOOP
- SI TENO UN "FOR" O UN "IF" NO PUEDO LLAMAR USESTATE 
- NO PUEDE ESTAR DENTRO DE UN "IF" O UN "FOR" O UN "WHILE" NO PUEDE ESTAR DENTRO DE UN "FOR EACH" O DENTRO DE UN "MAP"
-TIENE QUE PONERSE AL COMIENZO DE MI COMPONENTE 
-TIENE QUE ESTAR EN EL NIVEL MAS ALTO DELA FUNCION 
-SOLO SE LLAMAN EN DOS PARTES 
     * COMONENTES DE REACT 
     * CUSTOM HOOKS
-CUANDO SE CREE UN CUSTOM HOOK TIENE QUE COMENZAR CON EL NOMBRE DE "USE" - Y EL NOMBRE QUE LE QUERAMOS DAR 

*/


/* Construido utilizando classes */

/* class App extends Component {
    state = { contador: 0 }
    incrementar = () => {
        this.setState({ contador: this.state.contador + 1})
    }
    render() {
        return (
            <div>
                contador: {this.state.contador}
                <button onClick={this.incrementar}>Incrementar</button>
            </div>
        )
    }
} */



/* Construido utilizando Hooks (useState) */


/* const App = () => {
    const [contador, setContador] = useState(0)
    return (
        <div>
            Contador: {contador}
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    )
} */

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    return [contador, incrementar, restar]
}
const App = () => {
    const [contador, incrementar, restar] = useContador(0)
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={restar}>Restar</button>
        </div>
    )
}




export default App