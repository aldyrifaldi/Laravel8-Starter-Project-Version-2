!function(a){"use strict";var e=function(){this.$body=a("body")};e.prototype.createLineChart=function(e,t,o,a){var i={fontName:"Roboto",height:340,curveType:"function",fontSize:12,chartArea:{left:"8%",width:"90%",height:300},backgroundColor:"#323a46",hAxis:{textStyle:{color:"#98a6ad"}},pointSize:4,tooltip:{textStyle:{fontName:"Roboto",fontSize:14}},vAxis:{title:o,titleTextStyle:{fontSize:12,italic:!1},gridlines:{color:"#394452",count:10},textStyle:{color:"#98a6ad"},titleTextStyle:{color:"#98a6ad"},minValue:0},legend:{position:"top",alignment:"center",textStyle:{fontSize:14,color:"#98a6ad"}},lineWidth:3,colors:a},r=google.visualization.arrayToDataTable(t),l=new google.visualization.LineChart(e);return l.draw(r,i),l},e.prototype.createAreaChart=function(e,t,o,a){var i={fontName:"Roboto",height:340,curveType:"function",fontSize:12,backgroundColor:"#323a46",chartArea:{left:"8%",width:"90%",height:300},pointSize:4,tooltip:{textStyle:{fontName:"Roboto",fontSize:12}},hAxis:{textStyle:{color:"#98a6ad"}},vAxis:{title:o,titleTextStyle:{fontSize:14,italic:!1},gridarea:{color:"#394452",count:10},gridlines:{color:"#394452"},textStyle:{color:"#98a6ad"},titleTextStyle:{color:"#98a6ad"},minValue:0},legend:{position:"top",alignment:"end",textStyle:{fontSize:14,color:"#98a6ad"}},lineWidth:2,colors:a},r=google.visualization.arrayToDataTable(t),l=new google.visualization.AreaChart(e);return l.draw(r,i),l},e.prototype.createColumnChart=function(e,t,o,a){var i={fontName:"Roboto",height:400,fontSize:12,chartArea:{left:"8%",width:"90%",height:350},backgroundColor:"#323a46",tooltip:{textStyle:{fontName:"Roboto",fontSize:12}},vAxis:{title:o,titleTextStyle:{fontSize:12,italic:!1},gridlines:{color:"#394452",count:10},textStyle:{color:"#98a6ad"},titleTextStyle:{color:"#98a6ad"},minValue:0},hAxis:{textStyle:{color:"#98a6ad"}},legend:{position:"top",alignment:"center",textStyle:{fontSize:13,color:"#98a6ad"}},colors:a},r=google.visualization.arrayToDataTable(t),l=new google.visualization.ColumnChart(e);return l.draw(r,i),l},e.prototype.createBarChart=function(e,t,o){var a={fontName:"Roboto",height:400,fontSize:12,backgroundColor:"#323a46",chartArea:{left:"8%",width:"90%",height:350},tooltip:{textStyle:{fontName:"Roboto",fontSize:12}},vAxis:{gridlines:{color:"#394452",count:10},textStyle:{color:"#98a6ad"},minValue:0},hAxis:{textStyle:{color:"#98a6ad"},gridlines:{color:"#394452"}},legend:{position:"top",alignment:"center",textStyle:{fontSize:13,color:"#98a6ad"}},colors:o},i=google.visualization.arrayToDataTable(t),r=new google.visualization.BarChart(e);return r.draw(i,a),r},e.prototype.createColumnStackChart=function(e,t,o,a){var i={fontName:"Roboto",height:400,fontSize:12,chartArea:{left:"8%",width:"90%",height:350},backgroundColor:"#323a46",isStacked:!0,tooltip:{textStyle:{fontName:"Roboto",fontSize:12}},vAxis:{title:o,titleTextStyle:{fontSize:12,italic:!1},textStyle:{color:"#98a6ad"},gridlines:{color:"#394452",count:10},titleTextStyle:{color:"#98a6ad"},minValue:0},hAxis:{textStyle:{color:"#98a6ad"},gridlines:{color:"#394452"}},legend:{position:"top",alignment:"center",textStyle:{fontSize:13,color:"#98a6ad"}},colors:a},r=google.visualization.arrayToDataTable(t),l=new google.visualization.ColumnChart(e);return l.draw(r,i),l},e.prototype.createBarStackChart=function(e,t,o){var a={fontName:"Roboto",height:400,fontSize:12,chartArea:{left:"8%",width:"90%",height:350},backgroundColor:"#323a46",isStacked:!0,tooltip:{textStyle:{fontName:"Roboto",fontSize:12}},vAxis:{textStyle:{color:"#98a6ad"},gridlines:{color:"#394452"}},hAxis:{textStyle:{color:"#98a6ad"},gridlines:{color:"#394452",count:10},minValue:0},legend:{position:"top",alignment:"center",textStyle:{fontSize:13,color:"#98a6ad"}},colors:o},i=google.visualization.arrayToDataTable(t),r=new google.visualization.BarChart(e);return r.draw(i,a),r},e.prototype.createPieChart=function(e,t,o,a,i){var r={fontName:"Roboto",fontSize:13,height:300,chartArea:{left:50,width:"90%",height:"90%"},legend:{textStyle:{color:"#98a6ad"}},backgroundColor:"#323a46",colors:o};a&&(r.is3D=!0),i&&(r.is3D=!0,r.pieSliceText="label",r.slices={2:{offset:.15},5:{offset:.1}});var l=google.visualization.arrayToDataTable(t),n=new google.visualization.PieChart(e);return n.draw(l,r),n},e.prototype.createDonutChart=function(e,t,o){var a={fontName:"Roboto",fontSize:13,height:300,pieHole:.55,chartArea:{left:50,width:"90%",height:"90%"},backgroundColor:"#323a46",legend:{textStyle:{color:"#98a6ad"}},colors:o},i=google.visualization.arrayToDataTable(t),r=new google.visualization.PieChart(e);return r.draw(i,a),r},e.prototype.init=function(){var e=this,t=[["Year","Bitcoin","Ethereum"],["2010",850,120],["2011",745,200],["2012",852,180],["2013",1e3,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]];e.createLineChart(a("#line-chart")[0],t,"Sales and Expenses",["#4eb7eb","#f1556c"]),e.createAreaChart(a("#area-chart")[0],t,"Sales and Expenses",["#e3eaef","#02c0ce"]);e.createColumnChart(a("#column-chart")[0],[["Year","Bitcoin","Ethereum","Litecoin"],["2010",850,120,200],["2011",745,200,562],["2012",852,180,521],["2013",1e3,400,652],["2014",1170,460,200],["2015",660,1120,562],["2016",1030,540,852]],"Sales and Expenses",["#02c0ce","#0acf97","#ebeff2"]);e.createBarChart(a("#bar-chart")[0],[["Year","Bitcoin","Ethereum"],["2004",1e3,400],["2005",1170,460],["2006",660,1120],["2007",1030,540]],["#4eb7eb","#ebeff2"]);e.createColumnStackChart(a("#column-stacked-chart")[0],[["Genre","Bitcoin","Ethereum","Litecoin","Ripple",{role:"annotation"}],["2000",20,30,35,40,""],["2005",14,20,25,30,""],["2010",10,24,20,32,""],["2015",15,25,30,35,""],["2020",16,22,23,30,""],["2025",12,26,20,40,""],["2030",28,19,29,30,""]],"Sales and Expenses",["#2d7bf4","#4eb7eb","#02c0ce","#e3eaef"]);e.createBarStackChart(a("#bar-stacked-chart")[0],[["Genre","Bitcoin","Ethereum","Litecoin","Ripple",{role:"annotation"}],["2000",20,30,35,40,""],["2005",14,20,25,30,""],["2010",10,24,20,32,""],["2015",15,25,30,35,""],["2020",16,22,23,30,""],["2025",12,26,20,40,""],["2030",28,19,29,30,""]],["#2d7bf4","#4eb7eb","#02c0ce","#e3eaef"]);var o=[["Task","Hours per Day"],["Bitcoin",11],["Ethereum",2],["Litecoin",2],["Ripple",2],["Cardano",7]];e.createPieChart(a("#pie-chart")[0],o,["#2d7bf4","#4eb7eb","#02c0ce","#e3eaef","#32c861"],!1,!1),e.createDonutChart(a("#donut-chart")[0],o,["#2d7bf4","#4eb7eb","#02c0ce","#e3eaef","#32c861"]),e.createPieChart(a("#pie-3d-chart")[0],o,["#2d7bf4","#4eb7eb","#02c0ce","#e3eaef","#32c861"],!0,!1);e.createPieChart(a("#3d-exploded-chart")[0],[["Language","Speakers (in millions)"],["Assamese",13],["Bengali",83],["Gujarati",46],["Hindi",90],["Kannada",38],["Malayalam",33]],["#2d7bf4","#4eb7eb","#02c0ce","#e3eaef","#32c861","#353d4a"],!0,!0)},a.GoogleChart=new e,a.GoogleChart.Constructor=e}(window.jQuery),function(e){"use strict";google.load("visualization","1",{packages:["corechart"]}),google.setOnLoadCallback(function(){e.GoogleChart.init()})}(window.jQuery);