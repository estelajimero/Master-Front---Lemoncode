import React from "react";
import { MemberEntity } from "../model";
import { MemberTableRow } from "./member-table-row";

const getMembers = (org: string): Promise<MemberEntity[]> => {
	return fetch(`https://api.github.com/orgs/${org}/members`).then(
		(response) => response.json()
	);
};

export const MembersTable: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [inputValue, setInputValue] = React.useState('lemoncode');

	React.useEffect(() => {
		getMembers(inputValue).then((data) => {
      setMembers(data)
    });
	}, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

	const handleClick = () => {
    getMembers(inputValue).then((data) => {
      setMembers(data)
    });
  };

	return (
		<>
			<input type="text" value={inputValue} onChange={handleChange} />
			<button onClick={handleClick}>Search</button>

			<table className="table">
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Id</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member) => (
						<MemberTableRow member={member} />
					))}
				</tbody>
			</table>
		</>
	);
};
