(function() {
    'use strict';
   
    $(document).ajaxComplete(function() {
        const select = document.getElementsByClassName("curr")[1];
        console.log(select)
        select.addEventListener('change', (event) => {
            const result = selectElement.innerText
            result = parseInt(result.split(":")[1])
            console.log("QuickBuilder", result);
        });
    });

    console.log("QuickBuilder.js loaded");
})();
