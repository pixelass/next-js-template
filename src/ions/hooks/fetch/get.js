import axios from "axios";
import { useEffect, useState } from "react";

const useGet = url => {
	const [state, setState] = useState({
		data: null,
		loading: false,
		error: null,
	});
	useEffect(() => {
		setState(({ data }) => ({
			data,
			error: null,
			loading: true,
		}));
		axios
			.get(url)
			.then(({ data }) => {
				setState({
					error: null,
					data,
					loading: false,
				});
			})
			.catch(error => {
				setState(({ data }) => ({
					data,
					error,
					loading: false,
				}));
			});
	}, [url]);
	return state;
};

export default useGet;
