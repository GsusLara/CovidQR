import Navbar from "../navbar"


export default function Layout(props) {
    const { children } = props
    return (
        <div className="container-fluid Pagina">
            <Navbar/>
            <div className="container Contenido">
                {children}
            </div>
        </div>
    )
}
