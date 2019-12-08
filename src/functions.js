export const formatDate = (date, includeYear) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    let formattedDate = '';

    formattedDate += months[date.getMonth()];
    formattedDate += ' ';
    formattedDate += date.getDate();
    if (includeYear || date.getYear() !== now.getYear()) {
        formattedDate += date.getYear();
    }

    return formattedDate;
}