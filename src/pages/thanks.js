import React from 'react'
import Layout from "../components/layout";
import { GenericH2, GenericParaAbout } from "../styles/IndexStyles";

export default () => (
    <Layout>
        <GenericH2 none dark some style={{
            textAlign: 'center', padding: '3rem'
        }}>Thank you!</GenericH2>
        <GenericParaAbout lessSize grey>Form submission has been successful</GenericParaAbout>
    </Layout>
)