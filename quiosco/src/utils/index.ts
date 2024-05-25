export function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

export function getImagePath(image: string) {
    const baseUrl = `https://res.cloudinary.com`;
    if(image.startsWith(baseUrl)){
        return image;
    } else {
        return `/products/${image}.jpg`
    }
}