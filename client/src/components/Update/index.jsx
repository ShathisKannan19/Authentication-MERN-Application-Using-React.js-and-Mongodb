import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Update = () => {
	const [data, setData] = useState({
		DOB: "",
		Gender: "",
		Age: "",
		Mobile: "",
	});
    const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/update";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>

				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Update your Account</h1>
						<input
							type="text"
							placeholder="Date of Birth Ex : '19-06-2002'"
							name="DOB"
							onChange={handleChange}
							value={data.DOB}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Gender (Male , Female and Other Specifications..)"
							name="Gender"
							onChange={handleChange}
							value={data.Gender}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Age Ex: 20 "
							name="Age"
							onChange={handleChange}
							value={data.Age}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Mobile Number"
							name="Mobile"
							onChange={handleChange}
							value={data.Mobile}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
                            Update
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Update;
