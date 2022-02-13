import React from "react";
import { MemberEntity } from "../model";
import { MemberTableRow } from "./member-table-row";

import * as classes from "./members-table.styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

const getMembers = (org: string): Promise<MemberEntity[]> => {
	return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
		response.json()
	);
};

export const MembersTable: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [inputValue, setInputValue] = React.useState("lemoncode");

	React.useEffect(() => {
		getMembers(inputValue).then((data) => {
			setMembers(data);
		});
	}, []);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleClick = () => {
		getMembers(inputValue).then((data) => {
			setMembers(data);
		});
	};

	return (
		<>
			<div className={classes.inputHeader}>
				<TextField
					size="small"
					id="outlined-size-small"
					type="text"
					value={inputValue}
					onChange={handleChange}
					label=""
					variant="outlined"
				/>
				<Button
					size="small"
					type="submit"
					variant="contained"
					color="primary"
					onClick={handleClick}
				>
					Search
				</Button>
			</div>

			<table className="table">
				<thead>
					<tr className={classes.tableHeader}>
						<Typography>Avatar</Typography>
						<Typography>Id</Typography>
						<Typography>Name</Typography>
					</tr>
				</thead>
				<div>
					<List >
						{members.map((member) => (
							<MemberTableRow key={member.id} member={member} />
						))}
					</List>
				</div>
			</table>
		</>
	);
};
