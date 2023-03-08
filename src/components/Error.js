import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    const { status, statusText, error } = err;
    console.log(err);
    return (
        <div className="w-3/5 m-auto mt-32 min-h-screen flex flex-wrap flex-col font-extralight text-4xl text-gray-900 gap-2">
            <h1>Oops!</h1>
            <h2>Something went wrong!!</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
            <p>{err.data}</p>
        </div>
    )
};

export default Error;