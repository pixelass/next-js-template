import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import useGet from "../ions/hooks/fetch/get";

const Page = () => {
	const { data, loading, error } = useGet("https://rickandmortyapi.com/api/character/");

	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>Home</h1>
			{loading && <div>Loading...</div>}
			{error && <div>{error.message}</div>}
			{data && (
				<pre>
					<code>{JSON.stringify(data, null, 4)}</code>
				</pre>
			)}
		</Layout>
	);
};

export default Page;
