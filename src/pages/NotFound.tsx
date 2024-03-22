import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col gap-8 h-[80vh] w-full justify-center items-center">
            <h1>Oh, que pena! Não encontramos o que estava procurando!😥</h1>
            <Link className="bg-slate-500 px-4 py-2 rounded-lg" to={"/"}>
                Voltar
            </Link>
        </div>
    )
}

export default NotFound;