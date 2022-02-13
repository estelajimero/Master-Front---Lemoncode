import React from "react";
import { MemberEntity } from "../model";
import { generatePath, Link } from "react-router-dom";

import * as classes from "./member-table-row.styles";

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

interface Props {
	member: MemberEntity;
}

export const MemberTableRow: React.FC<Props> = (props) => {
	const { member } = props;

	return (
		<>
			<ListItem key={member.id} alignItems="flex-start">
        		<ListItemAvatar>
          			<Avatar alt="Member Avatar" src={member.avatar_url} />
        		</ListItemAvatar>
				<ListItemText 
					primary={member.login}
					secondary={
					<React.Fragment>
						<Typography 
							component="span"
							variant="body2"
							color="textPrimary"
						>
							{member.id}
						</Typography>
					</React.Fragment>
					}
        		/>
				<br></br>
				<ListItemText className={classes.memberId}>
					<Link className={classes.linkStyle} to={generatePath("/detail/:id", { id: member.login })}>
						{member.login}
					</Link>
				</ListItemText>
      		</ListItem>
      		<Divider variant="inset" component="li" />
		</>
	);
};
