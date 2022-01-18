import axios from "axios";
import { useEffect, useState } from "react";

const useGet = url => {
	const [state, setState] = useState({
		data: null,
		loading: false,
		error: null,
	});
	useEffect(() => {
		setState(previousState => ({
			...previousState,
			loading: true,
		}));
		axios
			.get(url)
			.then(({ data }) => {
				setState(previousState => ({
					...previousState,
					data,
					loading: false,
				}));
			})
			.catch(error => {
				setState(previousState => ({
					...previousState,
					error,
					loading: false,
				}));
			});
	}, [url]);
	return state;
};

export default useGet;
