import { css }from "@emotion/css";

export const memberId = css`
    text-align: right;
    margin-left: 3em;
`;

export const linkStyle = css`
    text-decoration: none;
    font-weight: bold;

    &:link,
    &:visited {
        color: black;
    }

    &:hover {
        color: #303F9F;
    }
`;