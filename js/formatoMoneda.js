export const formatoMoneda = (num) => {
    return new Intl.NumberFormat("pt-MX", {
        style: "currency",
        currency: "MXN",
    }).format(num);
};