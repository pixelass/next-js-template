import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>About</h1>
		</Layout>
	);
};

export default Page;
