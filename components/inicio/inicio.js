import Link from "next/link"

export default function Inicio() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 text-center position-relative inicio">
            <div className="divider" />
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="box1">
                        <div className="box2 p-5">
                            <span className="fs-1 d-block">CORONAVIRUS</span>
                            <span className="fs-6 d-block">COVID-19</span>
                        </div>
                    </div>
                    <Link href="/formulario">
                        <a type="button" className="btn btn-primary mt-2">COMENZAR</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
