var input = {
	type: "maximize",
	objective : "50X1 + 38.50X2",
	constraints : [ "3X1 + 2.6X2 <= 110",
     
	 "36X1 + 24X2 <= 1140",				
        "0.35X1  + 0.22X2  <= 12",		
       "8X1  + 6X2  <= 288",			
      "16X1  +  4X2 <= 360",				
      "270X1  +  160X2 <= 8160"			

	]
};
var output = YASMIJ.solve( input );
console.log(JSON.stringify(output, null, 2));
