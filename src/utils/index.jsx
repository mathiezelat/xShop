export const onClickUp = () => {
    window.scrollTo(0,0)
}

export const formatNumber = (number) => {
    return (
    (number) ? 
        <span style={{ color: "green" }}>
            {new Intl.NumberFormat("ES-AR", {
            style: "currency",
            currency: "ARS"
            }).format(number)}
        </span>
    : null
    );
}