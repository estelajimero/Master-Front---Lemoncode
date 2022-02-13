import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity } from "./model";

import * as classes from "./detail.styles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

	React.useEffect(() => {
		fetch(`https://api.github.com/users/${id}`)
			.then((response) => response.json())
			.then((json) => setMember(json));
	}, []);

	return (
		<>
			<Typography className={classes.detailTitle} variant="h5" component="h2">{member.name}</Typography>
			<Card className={classes.root}>
				<CardContent className={classes.cardContent}>
					<Typography className={classes.memberName} variant="h5" component="h2">
						Name: {member.name}
					</Typography>
					<Typography className={classes.memberId} color="textSecondary" gutterBottom>
						ID: {id}
					</Typography>
					<Typography className={classes.memberLogin} color="textSecondary">
						Login: {member.login}
					</Typography>
					<Typography className={classes.memberCompany} color="textSecondary">
						Company: {member.company}
					</Typography>
					<Typography variant="body2" component="p">
						Bio: {member.bio}
					</Typography>
				</CardContent>
				<Link className={classes.linkStyle} to="/list">Back to list page</Link>
			</Card>
		</>
	);
};
