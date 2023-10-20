import React from "react";
import Layout from "../../components/layout";

const PortfolioPage = () => (
    <Layout>
        <h1 className="text-2xl p-4 underline">Professional Projects</h1>
            <h2 className="px-10">Project 1</h2>
            <h2 className="px-10">Project 2</h2>
            <h2 className="px-10">Project 3</h2>

        <h1 className="text-2xl p-4 underline">Personnal Projects</h1>
            <h2 className="px-10">Project 1</h2>
            <h2 className="px-10">Project 2</h2>
            <h2 className="px-10">This Page!</h2>
                <p className="px-12">This page started as my portfolio.</p>
    </Layout>
);

export default PortfolioPage;