import React from "react";
import Layout from "../../components/layout";

const AboutPage = () => (
    <Layout>
        <h1>Under Construction</h1>
        <div className="hero mx-auto min-h-fit max-w-fit bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="profileimg.jpg" className="max-w-sm rounded-lg shadow-2xl"/>
                <div>
                    <h1 className="text-4xl font-bold">About Me!</h1>
                    <p className="py-6"> I was born and raised in the Pittburgh area.</p>
                </div>
            </div>
        </div>
    </Layout>
    );


    export default AboutPage;