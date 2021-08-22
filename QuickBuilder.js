(function() {
    'use strict';
    const selectElement = document.getElementsByClassName("value_container")[0];
    console.log(selectElement)
    selectElement.addEventListener('change', (event) => {

        const result = document.querySelector('.curr');
        result.textContent = `You like ${event.target.value}`;
        console.log("QuickBuilder", result.textContent);

    });

    console.log("QuickBuilder.js loaded");
})();
