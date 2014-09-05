$(document).ready(function () {
    localStorage.getItem('haveItems') || (localStorage.haveItems = JSON.stringify({}));
    localStorage.getItem('totalCount') || (localStorage.totalCount = JSON.stringify(0));
    get_total_count();
});