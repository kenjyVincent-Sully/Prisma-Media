import Head from 'next/head';
import PropTypes, { InferProps } from "prop-types";
import Header from '@components/Header';

export default function Layout({ children }: InferProps<typeof Layout.propTypes>) {
    return (
        <>
            <Head>
                <title>Test Prisma Media</title>
                <meta name="description" content="Test technique React" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}

        </>
    );
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};