import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  innerWrapper: {
    display: "flex",
  },
  outerWrapper: {
    display: "flex",
    flexDirection: "column",
    columnGap: "5px",
  },
  linkStyle: {
    flex: "auto",
    backgroundColor: "#046ac9",
    borderRadius: "0px",
    color: "white",
    width: "auto",
    textDecoration: "none",  
    display: "flex",         
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",   
    '&:active': {
      backgroundColor: "#034b8e",
    },
  },
  activeLinkStyle: {
    backgroundColor: "#034b8e", 
  },
});

export const TopBar = () => {
  const styles = useStyles();
  const location = useLocation();

  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <Link 
          to="/" 
          className={`${styles.linkStyle} ${location.pathname === "/" && styles.activeLinkStyle}`}
        >
          Start
        </Link>
        <Link 
          to="/pitchmark" 
          className={`${styles.linkStyle} ${location.pathname === "/pitchmark" && styles.activeLinkStyle}`}
        >
          Pitchmark
        </Link>
        <Link 
          to="/variables" 
          className={`${styles.linkStyle} ${location.pathname === "/variables" && styles.activeLinkStyle}`}
        >
          Variables
        </Link>
      </div>
    </div>
  );
};
