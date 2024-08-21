import React from 'react';
import { makeStyles, Button } from '@fluentui/react-components';
import { Dropdown, Option, useId } from '@fluentui/react-components';
import type { DropdownProps } from '@fluentui/react-components';

const useCustomStyles = makeStyles({
    header: {
        margin: "10px 0",
    },
    
    searchContainer: {
        margin: "20px 0",
        display: "flex",
        gap: "20px",
    },
    searchText: {
        fontWeight: "600",
    },
    searchInput: {
        border: "1px solid gray",
        flex: "1",
        padding: "8px",
        borderRadius: "6px",
    },
    textAreaSmall: {
        width: "100%",
        height: "60px",
        border: "1px solid gray",
        borderRadius: "6px",
        marginBottom: "12px",
    },
    textAreaLarge: {
        width: "100%",
        height: "90px",
        border: "1px solid gray",
        borderRadius: "6px",
    },
    buttonContainer: {
        textAlign: "right",
    },
    container: {
        display: "flex",
        gap: "10px",
    },
    dropdown: {
        flex: "1",
        minWidth: "150px",
    }
});

function ModifiedPitchmark(props: Partial<DropdownProps>) {
    const styles = useCustomStyles();

    const customButtonStyle = {
        backgroundColor: "#0078D4",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "12px 22px",
        fontSize: "18px",
        cursor: "pointer",
    };

    const customButtonActiveStyle = {
        backgroundColor: "#005A9E", 
    };

    const dropdownId = useId("dropdown-custom");
    const dropdownOptions = [
        "Ahmed",
        "Ali",
        "Zain",
        "Usman",
        "Jawed",
        "Amir",
        "Ashfaq",
        "Waseem",
        "Bilal",
        "Zafar",
    ];

    return (
        <div style={{ padding: "10px 15px", backgroundColor: "#E0F7FA" }}>
            <div>
                <h3 className={styles.header}>Recipient & Document Type:</h3>
                <div className={styles.container}>
                    <Dropdown
                        aria-labelledby={dropdownId}
                        className={styles.dropdown}
                        placeholder="Recipient"
                        {...props}
                    >
                        {dropdownOptions.map((option) => (
                            <Option key={option} disabled={option === "Ferret"}>
                                {option}
                            </Option>
                        ))}
                    </Dropdown>
                    <Button appearance="primary">
                        Primary
                    </Button>
                </div>

                <h3 className={styles.header}>Choose Products / Services:</h3>
                <div className={styles.container}>
                    <Dropdown
                        aria-labelledby={dropdownId}
                        className={styles.dropdown}
                        placeholder="Products"
                        {...props}
                    >
                        {dropdownOptions.map((option) => (
                            <Option key={option} disabled={option === "Ferret"}>
                                {option}
                            </Option>
                        ))}
                    </Dropdown>
                    <Button appearance="primary">
                        Primary
                    </Button>
                </div>
                
                <h3 className={styles.header}>Choose IP Portfolio:</h3>
                <div className={styles.container}>
                    <Dropdown
                        aria-labelledby={dropdownId}
                        className={styles.dropdown}
                        placeholder="Portfolio"
                        {...props}
                    >
                        {dropdownOptions.map((option) => (
                            <Option key={option} disabled={option === "Ferret"}>
                                {option}
                            </Option>
                        ))}
                    </Dropdown>
                    <Button appearance="primary">
                        Primary
                    </Button>
                </div>
                
                <div className={styles.searchContainer}>
                    <label className={styles.searchText} htmlFor="search-input">Search:</label>
                    <input className={styles.searchInput} id='search-input' type="text" />
                </div>

                <textarea className={styles.textAreaSmall} readOnly></textarea>

                <textarea className={styles.textAreaLarge} readOnly> </textarea>

                <div className={styles.buttonContainer}>
                    <Button
                        style={customButtonStyle}
                        onMouseDown={(e) => e.currentTarget.style.backgroundColor = customButtonActiveStyle.backgroundColor}
                        onMouseUp={(e) => e.currentTarget.style.backgroundColor = customButtonStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = customButtonStyle.backgroundColor}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ModifiedPitchmark;
