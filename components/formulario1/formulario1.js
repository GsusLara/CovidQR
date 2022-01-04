import { useState } from "react"
import Link from "next/link"
import QRCode from "qrcode.react"

export default function Formulario1() {
    const [codigo, setcodigo] = useState(false)
    const [info, setInfo] = useState({
        nombre: "",
        cedula: "",
        idtipo: "",
        vacunacion: "esquema completo"
    })

    const infoUser = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const validar = () => {
        if (info.nombre == "" || info.cedula == "" || info.idtipo == "") {
            alert("complete todos los campos")
        } else {
            setcodigo(true)
        }
    }

    if (codigo == false) {
        return (
            <div className="row justify-content-center">
                <div className="text-center">
                    <span className="title mt-3 d-block">Coronavirus - COVID19</span>
                </div>
                <div className="col-11 mt-5">
                    <span>Nombre completo:</span>
                    <input
                        type="text"
                        onChange={infoUser}
                        name="nombre"
                        className="form-control"
                        placeholder="Ingrese su nombre completo"
                    />
                </div>
                <div className="col-11 mt-5 ">
                    <span>Seleccione el tipo de identificación:</span>
                    <select onChange={infoUser} className="form-select" name="idtipo" aria-label="select id" defaultValue="0" >
                        <option value="0">Seleccione</option>
                        <option value="1">Extranjero</option>
                        <option value="2">Indefinido</option>
                        <option value="3">Nacional</option>
                        <option value="4">Pasaporte</option>
                        <option value="5" >DIMEX</option>
                    </select>
                </div>
                <div className="col-11 mt-5">
                    <span>Número de identificación:</span>
                    <input
                        type="text"
                        onChange={infoUser}
                        name="cedula"
                        className="form-control"
                        placeholder="101230456"
                    />
                </div>
                <div className="col-10 mt-3 text-center">
                    <button type="button" className="btn btn-primary mt-3 mx-2" onClick={() => validar()}>Generar Código</button>
                    <Link href="/">
                        <a type="button" className="btn btn-danger mt-3">Salir</a>
                    </Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="row justify-content-center">
                <div className="text-center">
                    <span className="title mt-3 d-block">Coronavirus - COVID19</span>
                </div>
                <div className="col-11 mt-5 text-center">
                    <QRCode
                        value={`Nombre: ${info.nombre}\n tipo de identificacion: ${info.idtipo}\n id: ${info.cedula}\n vacunacion: ${info.vacunacion}`}
                        size={1080}
                        style={{ width: "80%", height: "auto", maxWidth: "300px" }} />
                </div>
                <div className="col-10 mt-3 text-center">
                    <Link href="/">
                        <a type="button" className="btn btn-danger mt-3">Salir</a>
                    </Link>
                </div>
            </div>
        )
    }
}
