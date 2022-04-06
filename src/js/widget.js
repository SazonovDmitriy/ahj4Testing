export default function widget(value) {
    if (/^4/.test(value)) {
        return '.visa-card';
    } else if (/^(?:5[1-5][0-9]{14})$/.test(value)) {
        return '.mastercard-card';
    } else if (/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(value)) {
        return '.discover-card';
    } else if (/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(value)) {
        return '.diners_club-card';
    } else if (/^(?:3[47][0-9]{13})$/.test(value)) {
        return '.american_express-card';
    } else if (/^(?:(?:2131|1800|35\d{3})\d{11})$/.test(value)) {
        return '.jcb-card';
    }
    return null;
}