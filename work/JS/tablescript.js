 function table(){                                                  /*===== NOTES =====*/

    var input    = document.getElementById("input").value;         // input for loop var i 
    var maxInput = document.getElementById("maxInput").value;      // max input for loop                                                         
    var txttable;                                                   // table
    var txtrow;                                                     // table row with table data in it
    var txthead;                                                    // table head
    var txtheadRow;                                                 // table head row
    var txt2ndheadRow;                                              // table head row 2nd table data
    var fahrenheit;                                                 // from celcius to fahrenheit calculation
    var txt2ndrow;                                                  // second table row with calculated table data in it
    
    txttable       = "<table>";                                     // start of table
    
    txthead        = "<thead>";                                     // making header of table
    txttable      += txthead;                                       // adding txthead to table
    // txtheadRow     = "<tr><th>Nr.</th>";
    // txttable      += txtheadRow;
    txtheadRow     = "<th>Celcius</th>";                        // first tabledata in table row "Celcius"
    txttable      += txtheadRow;                                    // adding txtheadRow to table

    txt2ndheadRow  = "<th>Fahrenheit</th></tr>";                    // second tabledata in table row "Fahrenheit"
    txttable      += txt2ndheadRow;                                 // adding txt2ndheadRow to table

    txthead        = "</thead>";                                    // closing thead tag
    txttable      += txthead;                                       //adding txthead to table
    
    for (var i = input; i <= maxInput; i++) {

        // for (var j = 1; j <= maxInput; j++) {
        //         txtrow = ("<tr><td>" + j + "</td>");
        //         txttable += txtrow;
        // }    
        txtrow     = ("<td>" + i + "</td>");                    //for loop on celcius values [i]
        txttable  += txtrow;                                        //adding values to table

        fahrenheit = i * 1.8 +32;                                   // calculation Celcius -> Fahrenheit

        txt2ndrow  = "<td>" + fahrenheit.toFixed(1) + "</td></tr>"; // putting fahrenheit into tabledata 
        txttable  += txt2ndrow;                                     // adding txt2ndrow to table
    }

    txttable      += "</table>";                                    // closing table tag

    document.getElementById("tabel").innerHTML= txttable;           // output table
}                                       