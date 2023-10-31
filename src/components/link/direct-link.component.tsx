import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface IRedirectLinkProps {
  text: string;
  url: string;
  textForLink: string;
}

const RedirectLink: React.FC<IRedirectLinkProps> = ({
  text,
  url,
  textForLink,
}) => (
  <Box textAlign="center">
    <Typography variant="body2">
      {text}{" "}
      <MuiLink
        component={RouterLink}
        to={url}
        underline="always"
        color="primary"
      >
        {textForLink}
      </MuiLink>
    </Typography>
  </Box>
);

export default RedirectLink;
