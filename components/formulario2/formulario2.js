import Link from "next/link"

export default function Formulario2() {
    return (
        <div className="row justify-content-center">
            <div className="col-11 mt-5">
                <span>Nombre completo:</span>
                <input type="text" className="form-control" placeholder="Ingresar" aria-label="id number" aria-describedby="addon-wrapping" />
            </div>
            <div className="col-10 text-center">
                    <button type="button" className="btn btn-primary mt-3">Generar Código</button>
                
            </div>
        </div>
    )
}
