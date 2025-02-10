import { GetServerSideProps } from 'next';

interface ProductProps {
    params: {
        id: string;
    };
}

export default function Product({ params }: ProductProps) {
    const { id } = params;

    return <h1>Product: {id}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string };

    return {
        props: {
            params: {
                id,
            },
        },
    };
};