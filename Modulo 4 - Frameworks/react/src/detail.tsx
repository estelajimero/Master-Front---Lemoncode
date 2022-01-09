import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity } from "./model";

const createDefaultMemberDetail = () => ({
	id: "",
	login: "",
	name: "",
	company: "",
	bio: "",
});

export const DetailPage: React.FC = () => {
	const [member, setMember] = React.useState<MemberDetailEntity>(
		createDefaultMemberDetail()
	);

	const { id } = useParams();

	return (
		<>
			<h2>Hello from Detail page</h2>
			<p>Id: {member.id}</p>
			<p>Login: {member.login}</p>
			<p>Name: {member.name}</p>
			<p>Company: {member.company}</p>
			<p>Bio: {member.bio}</p>
			<Link to="/list">Back to list page</Link>
		</>
	);
};
