const height = parseFloat(prompt("To'rtburchakning uzunligini kiriting:"));
const width = parseFloat(prompt("To'rtburchakning balandligini kiriting:"));

if (isNaN(length) || isNaN(width) || height <= 0 || width <= 0) {
    alert("Raqamlar kiriting");
} else {
    const area = (height * width) ;
    const perimeter = (2 * (height + width));
    
    document.write("<h2>To'rtburchakning Natijalari</h2>");
    document.write("<p>Yuzi: " + area.toFixed(2) + "</p>");
    document.write("<p>Perimetri: " + perimeter.toFixed(2) + " </p>");
}
