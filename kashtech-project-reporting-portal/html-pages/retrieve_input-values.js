function sendFormValuesToFex() {
    preventDefault();
    const formInputs = document.querySelectorAll('.add-employee-form-input');

    // Perhaps need to turn it to an array?

    // add a dataParam attribute that links FEX parameter to form value?


    let fexParameters = [
        '&EMP_ID', 
        '&FIRST_NAME', 
        '&LAST_NAME',
        '&EMAIL_ADDRESS',
        '&PHONE_NUMBER',
        '&EMP_LOCATION_CITY',
        '&EMP_LOCATION_STATE',
        '&EMP_LOCATION_COUNTRY'
    ]
    let inputArray = Array.from(formInputs);

    const parametizedVariables = inputArray.map((item,arrIndex) => {
        return (`${fexParameters[arrIndex]}=${item.value}`)
    })

    parametizedVariables.forEach(
        function(item) {
        myUrl = myUrl + item
        }
    ) 
        
    console.log(myUrl)
    document.getElementById('employee-list-summary_iframe').src = url;

}