import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const paths= data.map((ninja: { id: { toString: () => any; }; }) =>{
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths, 
        fallback: false,
    }
}

export const getStaticProps = async (context: { params: { id: any; }; }) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data}
    }
}

const Details = (ninja: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; website: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; address: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    return (
        <div>
            <h2>{ninja.name}</h2>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address}</p>            
        </div>
    );
}
 
export default Details;