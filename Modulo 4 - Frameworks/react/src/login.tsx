import React from "react";
import * as classes from "./login.styles";

import { useNavigate } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (username === "admin" && password === "test") {
			navigate("/list");
		} else {
			alert("User / password not valid, psst... admin / test");
		}
	};

	return (
		<>
    <div className={classes.root}>
      <Card>
				<CardHeader title="Login" />
				<CardContent>
					<form onSubmit={handleNavigation}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<TextField
								label="Name"
								margin="normal"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<TextField
								label="Password"
								type="password"
								margin="normal"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button type="submit" variant="contained" color="primary">
								Login
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
    </div>
		</>
	);
};
