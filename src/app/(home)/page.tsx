import React from "react";
import Layout from "../components/layout";

const Home = () => (
    <Layout>
        <section id='hero' className="text-center">
            <h1 className="text-3xl font-semibold">Hello, I'm John Bissontz</h1>
            <p className="mt-2">A passionate and creative professional.</p>
            <a href='#contact' className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Contact Me</a>
        </section>

        {/* Add more sections here */}
    </Layout>
);

export default Home;