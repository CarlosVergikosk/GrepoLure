(function() {
    'use strict';
   
    $(document).ajaxComplete(function() {
        console.log("2", document.getElementsByClassName("value_container")[1]);
        const selectElement = document.getElementsByClassName("value_container")[1];
        const select = document.getElementsByClassName("curr");
        console.log(select)
        select.addEventListener('change', (event) => {
            const result = selectElement.innerText
            result = parseInt(result.split(":")[1])
            console.log("QuickBuilder", result);
        });
    });

    console.log("QuickBuilder.js loaded");
})();
