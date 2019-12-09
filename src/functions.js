export const formatDate = (dateString, includeYear) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    const date = new Date(dateString);
    console.log(date);
    let formattedDate = '';

    formattedDate += months[date.getMonth()];
    formattedDate += ' ';
    formattedDate += date.getDate();
    if (includeYear || date.getYear() != now.getYear()) {
        formattedDate += ', ';
        formattedDate += date.getFullYear();
    }

    return formattedDate;
}