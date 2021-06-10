import { Button as MuiButton, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
  label: {
    textTransform: "none",
  },
}));

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      text={text}
      size={size || "large"}
      color={color || "primary"}
      variant={variant || "contained"}
      onClick={onClick}
      classes={{ root: classes.root, label: classes.label }}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
