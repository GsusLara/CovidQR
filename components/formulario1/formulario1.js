import Link from "next/link"

export default function Formulario1() {
    return (
        <div className="row justify-content-center">
            <div className="text-center">
                <span className="title mt-3 d-block">Coronavirus - COVID19</span>
            </div>
            <div className="col-11 mt-5 ">
                <span>Seleccione el tipo de identificación:</span>
                <select className="form-select" aria-label="select id" defaultValue="3" >
                    <option value="0" >DIMEX</option>
                    <option value="1">Extranjero</option>
                    <option value="2">Indefinido</option>
                    <option value="3">Nacional</option>
                    <option value="4">Pasaporte</option>
                </select>
            </div>
            <div className="col-11 mt-5">
                <span>Número de identificación:</span>
                <input type="text" className="form-control" placeholder="Ingresar" aria-label="id number" aria-describedby="addon-wrapping" />
            </div>
            <div className="col-10 text-center">
                <Link href="/formularioCodigo">
                    <a type="button" className="btn btn-primary mt-3">Continuar</a>
                </Link>
            </div>
        </div>
    )
}
