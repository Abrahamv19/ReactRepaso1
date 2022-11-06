import Titulo from "../Titulo/Titulo"

const Form = ({tituloForm}) => {
    // variable de estado
    return (
            <form>
                <Titulo titulo={tituloForm}
                //subtitulo={subtituloApp}
                />
                        <input type="text" placeholder='Ingrese nombre' />
                        <br />
                        <input type="text" placeholder='Ingrese apellidoe' />
            </form>
            )
}

export default Form