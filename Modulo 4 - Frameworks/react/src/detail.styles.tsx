import { css }from "@emotion/css";

export const root = css`
  width: 40%;
  margin: 1.5em;
  padding: 1.5em;
  display: flex;
  justify-content: space-between;
`;

export const detailTitle = css`
    padding: 1.5em 0em .3em 1.5em;
    color: #4557bc;
`;

export const cardContent = css`
    margin-bottom: 1em;
`;

export const memberName = css`
    font-size: 1.5em;
`;

export const memberId = css`
    font-size: 1em;
`;

export const memberLogin = css`
    font-size: 1em;
`;

export const memberCompany = css`
    font-size: 1em;
`;

export const linkStyle = css`
    text-decoration: none;
    font-weight: bold;
    font-family: sans-serif;
    align-self: end;

    &:link,
    &:visited {
        color: #303F9F;
    }

    &:hover {
        color: #4557bc;
    }
`;