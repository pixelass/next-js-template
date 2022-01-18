import { Global } from "@emotion/react";
import React from "react";
import { globalStyle } from "../ions/styles";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Global styles={globalStyle} />
			<Component {...pageProps} />
		</>
	);
};

export default App;
