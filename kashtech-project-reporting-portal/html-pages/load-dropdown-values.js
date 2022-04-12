// Mystery Solved: pipe symbols in URL from within a fex are treated differently from pipe symbols in pain HTML
// URL from within FEX File: <EDASERVE&|IBIMR...>   The "|" symbol is necesary for fex files to concatenate against reading the "&" as a variable declaration
// Within an HTML file being read directly, the pipe is uncessary - HTML does not read & as a reserved, special character


(function() {
    var path = window.location.href.substr(0, window.location.href.indexOf('ibi_apps')) ;
    var myUrl = path + 'ibi_apps/WFServlet?IBIC_server=EDASERVE&IBIMR_drill=IBFS,RUNFEX,IBIF_ex,true&IBIF_ex=IBFS:/WFC/Repository/KashDemo_Files/KASH_Operations/html-pages/external_html_and_assets/html/dropdown-fex-files/employee-dropdown.fex';
    // var myUrl = path + 'ibi_apps/WFServlet?IBIC_server=EDASERVE&IBIMR_drill=IBFS,RUNFEX,IBIF_ex,true&IBIF_ex=IBFS:/WFC/Repository/KashDemo_Files/Ben/Dropdown_handcoded_html/get_cars.fex';
    
    fetch(myUrl).then(res => res.text()).then(
        function(data) {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            var column1Vals = xml.querySelectorAll('td[colnum="c1"]')
            for (value of column1Vals) {
                var optionValue = document.createElement('option')
                optionValue.innerHTML = value.innerHTML;
                optionValue.value = value.innerHTML;
                document.querySelector('#employee-dropdown-input').appendChild(optionValue)
            }
        }
    )
})();


$.ajax({
    type: "GET" ,
    url: myUrl ,
    dataType: "xml" ,
    success: function(xml) {
var column1= xml.querySelectorAll('[colnum="c1"]');
for(i=1; i<column1.length; i++){
var newOption = document.createElement('option');
newOption.innerHTML = column1[i].innerHTML;
newOption.value = column1[i].innerHTML;
document.getElementById('sampledropdown').appendChild(newOption);
}
}
});

const hiddenFrame = document.createElement('iframe')
hiddenFrame.src = 'myUrl'
document.querySelector('#timesheet-summary_iframe').appendChild(hiddenFrame);



(function(){

    var path = window.location.href.substr(0, window.location.href.indexOf('ibi_apps')) ;
    var myUrl = path + 'ibi_apps/WFServlet?IBIC_server=EDASERVE&|IBIMR_drill=IBFS,RUNFEX,IBIF_ex,true&|IBIF_ex=IBFS:/WFC/Repository/KashDemo_Files/Ben/Dropdown_handcoded_html/get_cars.fex';


$.ajax({
      type: "GET" ,
      url: myUrl ,
      dataType: "xml" ,
      success: function(xml) {
    var column1= xml.querySelectorAll('[column="c0"]');
    console.log(column1);
}
  });

})();