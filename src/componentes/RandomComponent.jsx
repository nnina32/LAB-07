export const RandomComponent = (props) => {
    const { name, age, ocupation } = props;
    return(
        <div style={styles.container}>
            <div style={styles.dates}>
                    <h2>{name}</h2>
                    <p>Age: {age}</p>
                    <p>Ocupation: {ocupation}</p>
                    <button style={styles.boton}>Add</button>
            </div>
        </div>
    )
}
const styles ={
    container:{
        display: "flex",
        width: "500px",
        margin: "20px 20px",
    },
    dates:{
        margin: "20px 20px",
        textaling: "center",
    },
    boton:{
        backgroundColor: "skyblue",
        fontWeight: "700",
        width: "100px",
    },
}
