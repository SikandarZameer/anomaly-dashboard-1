import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(),
      backgroundColor: "lightgrey",
      borderRadius: `15px`
    }
  },
  ib: {
    padding: "1px 15px"
  },
  inputMaginDense: {
    paddingLeft: "5px"
  }
}));

const SearchBar = ({ callback_func }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <InputBase
        className={classes.ib}
        classes={{ inputMarginDense: classes.inputMaginDense }}
        placeholder="Enter Patient ID "
        fullWidth
        margin="dense"
        startAdornment={<SearchIcon />}
        onChange={callback_func}
      />
    </form>
  );
};

export default SearchBar;
