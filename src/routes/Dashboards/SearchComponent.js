import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function SearchComponent(props) {
  return (
    <div className="searchContainer">
      <form onSubmit={(e) => props.handleSubmit(e)}>
          <div>
        <TextField
          id="standard-search"
          label="Enter Github Username"
          type="search"
          margin="normal"
          value={props.search}
          name='search'
          onChange={props.handleChanges}
        />
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
