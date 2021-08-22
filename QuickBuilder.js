(function() {
    'use strict';
   
    $(document).ajaxComplete(function() {
        console.log("1", document.getElementsByClassName("value_container"));
        console.log("2", document.getElementsByClassName("value_container")[0]);
        const selectElement = document.getElementsByClassName("value_container")[0];
        if (selectElement) {
           selectElement.addEventListener('change', (event) => {
                const result = document.querySelector('.curr');
                result.textContent = `You like ${event.target.value}`;
                console.log("QuickBuilder", result.textContent);
            });
        }
    });

    console.log("QuickBuilder.js loaded");
})();
