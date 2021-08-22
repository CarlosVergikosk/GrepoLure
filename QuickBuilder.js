(function() {
    'use strict';
    const selectElement = document.querySelector('.value_container');

    selectElement.addEventListener('change', (event) => {

        const result = document.querySelector('.curr');
        result.textContent = `You like ${event.target.value}`;
        console.log("QuickBuilder", result.textContent);

    });

    //
    console.log("QuickBuilder.js");
})();
