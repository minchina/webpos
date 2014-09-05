$(document).ready(function () {
    localStorage.getItem('haveItems') || (localStorage.haveItems = JSON.stringify({}));
});