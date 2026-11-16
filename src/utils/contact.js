export const business = {
  phones: [
    { number: "6384148805", tel: "+916384148805" },
    { number: "9360748142", tel: "+919360748142" },
  ],
  email: "deepankarthikeyan2000@gmail.com",
  address: "No. 315, Alagappa Chettiar Road, Tatabad, Coimbatore - 641012",
  whatsappNumber: "916384148805",
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent("No. 315, Alagappa Chettiar Road, Tatabad, Coimbatore - 641012")}&output=embed`,
};

export function whatsappUrl(message) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
