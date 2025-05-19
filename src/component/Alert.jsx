import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext";


const Alert = () => {
    const { alert } = useContext(AlertContext);

    return alert !== null && ( 
        <>
        {alert.type === 'error' &&
            <div role="alert" className="alert bg-base-100  border-none text-red-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current " fillRule="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{alert.msg} </span>
        </div>
        }
        </>
    )
}

export default Alert
