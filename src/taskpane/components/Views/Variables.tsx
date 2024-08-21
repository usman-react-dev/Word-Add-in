import { makeStyles, Button } from '@fluentui/react-components';
import React from 'react';

const useStyles = makeStyles({
  input: {
    flex: "1",
    padding: "2px 4px",
    borderRadius: "5px",
    border: "1px solid black",
    height: "24px", 
    fontSize: "12px", 
  },
  allOtherDivs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
  },
  button: {
    backgroundColor: "#00B0F0", 
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "0 10px", 
    height: "30px", 
    fontSize: "12px", 
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    backgroundColor: "#156082", 
  }
});

function Variables() {
  const styles = useStyles();
  
  const handleButtonMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add('active');
  };

  const handleButtonMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove('active');
  };

  return (
    <div style={{ padding: "5px 10px", backgroundColor: "#C1E5F5" }}>
      <h3>Examples:</h3>
      <p>Date:</p>
      <div className={styles.allOtherDivs}>
        <input className={styles.input} type="date" />
        <Button
          className={styles.button}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Insert
        </Button>
      </div>

      <p>Counterparty name:</p>
      <div className={styles.allOtherDivs}>
        <input className={styles.input} type="text" />
        <Button
          className={styles.button}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Insert
        </Button>
      </div>

      <p>Counterparty address:</p>
      <div className={styles.allOtherDivs}>
        <input className={styles.input} type="text" />
        <Button
          className={styles.button}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Insert
        </Button>
      </div>

      <p>Contract start date:</p>
      <div className={styles.allOtherDivs}>
        <input className={styles.input} type="date" />
        <Button
          className={styles.button}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Insert
        </Button>
      </div>

      <p>Contract end date:</p>
      <div className={styles.allOtherDivs}>
        <input className={styles.input} type="date" />
        <Button
          className={styles.button}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Insert
        </Button>
      </div>

      <p>Currency:</p>
      <div className={styles.allOtherDivs}>
        <input className={styles.input} type="text" />
        <Button
          className={styles.button}
          onMouseDown={handleButtonMouseDown}
          onMouseUp={handleButtonMouseUp}
        >
          Insert
        </Button>
      </div>
    </div>
  );
}

export default Variables;
