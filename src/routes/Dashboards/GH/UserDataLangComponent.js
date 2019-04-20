import React from "react";
import Typography from "@material-ui/core/Typography";

function UserDataLangComponent(props) {
  console.log();
  if (props.langs.length > 0) {
    const lang = [];
    Object.entries(props.langs[0][0]).forEach((el, key) => {
      const obj = { language: el[0], repositories: el[1] };
      return lang.push(obj);
    });
    console.log(lang);
    return (
      <>
        {lang.map(el => {
          return (
            <div className='langInfo'>
              <Typography  id='langInfo--lang' variant="subtitle2"  gutterBottom>
                {el.language}
              </Typography>


              <Typography color="textSecondary">Repositories: {el.repositories}</Typography>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>Cibbe</h1>;
  }
}

export default UserDataLangComponent;
