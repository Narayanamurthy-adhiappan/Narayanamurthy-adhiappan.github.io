document.addEventListener("DOMContentLoaded", function(){



		// Load google charts
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		// Draw the chart and set the chart values
		function drawChart() {
			  var data = google.visualization.arrayToDataTable([
			  ['Task', 'Hours per Day'],
			  ['Interest Payable', 8],
			  ['Principle Amount', 2]
			]);

			  // Optional; add a title and set the width and height of the chart
			  var options = {'title':'Payment Breakup Between Principal and Interest', 'width':550, 'height':400};

			  // Display the chart inside the <div> element with id="piechart"
			  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			  chart.draw(data, options);


			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(drawChart);

			  function drawChart() {
				var data = google.visualization.arrayToDataTable([
				  ['Month', 'Principle', 'Interest'],
				  ['1',  1000,      400],
				  ['2',  1170,      460],
				  ['3',  660,       1120],
				  ['4',  1030,      540]
				]);

				var options = {
				  title: 'Interest & Pricipal Repayment Relation',
				  curveType: 'function',
				  legend: { position: 'bottom' }
				};

				var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

				chart.draw(data, options);
			  }
		}

  


	var app = angular.module("myApp", ["ngRoute"]);
app.controller("myCtrl", function($scope, $rootScope, $element) {
	 
	$scope.Math = window.Math;
    $rootScope.loanValue = 1200000;
    $rootScope.loanMin = 50000;
	$rootScope.loanMax = 20000000;
	$rootScope.interestMin = 1;
	$rootScope.interestMax = 20;
	$rootScope.interestValue = 8.75;
	$rootScope.monthMin = 1;
	$rootScope.monthMax = 360;
	$rootScope.monthValue = 12;
	$scope.paymentReport = [];
	$scope.lineChart = [];
	$scope.currentMonthCount = 0;
	$scope.Count=0;
  $scope.remainingBalance = 0;
  $scope.interestCalc = 0;
  $scope.principleCalc = 0;
  $scope.interestApply = 0.00;
  $scope.emi = 0;
  $scope.$watch('loanValue', function (newval, oldval) {
      $rootScope.loanValue = newval;
      $scope.paymentReport = [];
	  $scope.lineChart = [];
	  $scope.lineChart.push(['Month', 'Principle', 'Interest']);
  		$scope.remainingBalance = $rootScope.loanValue;
      $scope.interestCalc = 0;
      $scope.principleCalc = 0;
      $scope.interestApply = $rootScope.interestValue/1200;
      $scope.emi = $rootScope.loanValue * (($rootScope.interestValue/12)/100) * ((Math.pow((1 + (($rootScope.interestValue/12)/100)), $rootScope.monthValue))/((Math.pow((1 + (($rootScope.interestValue/12)/100)), $rootScope.monthValue))-1));
          for(i=1; i<=$rootScope.monthValue; i++){
             $scope.principleCalc = $scope.remainingBalance * $scope.interestApply;
             $scope.interestCalc = $scope.emi - $scope.remainingBalance * $scope.interestApply;
  			     $scope.paymentReport.push([i, $scope.remainingBalance, $scope.interestCalc, $scope.principleCalc, $scope.remainingBalance - $scope.interestCalc]);
				 $scope.lineChart.push([i,  $scope.interestCalc, $scope.principleCalc]);
             $scope.remainingBalance = $scope.remainingBalance - $scope.interestCalc;
  		     }
	   // Load google charts
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		// Draw the chart and set the chart values
		
		function drawChart() {
			  var data = google.visualization.arrayToDataTable([
			  ['Task', 'Hours per Day'],
			  ['Interest Payable', ($scope.emi * $rootScope.monthValue) - $rootScope.loanValue],
			  ['Principle Amount', $rootScope.loanValue]
			]);

			  // Optional; add a title and set the width and height of the chart
			  var options = {'title':'Payment Breakup Between Principal and Interest', 'width':550, 'height':400};

			  // Display the chart inside the <div> element with id="piechart"
			  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			  chart.draw(data, options);


			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(drawChart);

			  function drawChart() {
				var data = google.visualization.arrayToDataTable($scope.lineChart);

				var options = {
				  title: 'Interest & Pricipal Repayment Relation',
				  curveType: 'function',
				  legend: { position: 'bottom' }
				};

				var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

				chart.draw(data, options);
			  }
		}
		
		
		
		
    });
    $scope.$watch('interestValue', function (newval, oldval) {
        $rootScope.interestValue = newval;
        $scope.paymentReport = [];
	  $scope.lineChart = [];
	  $scope.lineChart.push(['Month', 'Principle', 'Interest']);
  		$scope.remainingBalance = $rootScope.loanValue;
      $scope.interestCalc = 0;
      $scope.principleCalc = 0;
      $scope.interestApply = $rootScope.interestValue/1200;
      $scope.emi = $rootScope.loanValue * (($rootScope.interestValue/12)/100) * ((Math.pow((1 + (($rootScope.interestValue/12)/100)), $rootScope.monthValue))/((Math.pow((1 + (($rootScope.interestValue/12)/100)), $rootScope.monthValue))-1));
          for(i=1; i<=$rootScope.monthValue; i++){
             $scope.principleCalc = $scope.remainingBalance * $scope.interestApply;
             $scope.interestCalc = $scope.emi - $scope.remainingBalance * $scope.interestApply;
  			     $scope.paymentReport.push([i, $scope.remainingBalance, $scope.interestCalc, $scope.principleCalc, $scope.remainingBalance - $scope.interestCalc]);
				 $scope.lineChart.push([i,  $scope.interestCalc, $scope.principleCalc]);
             $scope.remainingBalance = $scope.remainingBalance - $scope.interestCalc;
  		     }
	   // Load google charts
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		// Draw the chart and set the chart values
		
		function drawChart() {
			  var data = google.visualization.arrayToDataTable([
			  ['Task', 'Hours per Day'],
			  ['Interest Payable', ($scope.emi * $rootScope.monthValue) - $rootScope.loanValue],
			  ['Principle Amount', $rootScope.loanValue]
			]);

			  // Optional; add a title and set the width and height of the chart
			  var options = {'title':'Payment Breakup Between Principal and Interest', 'width':550, 'height':400};

			  // Display the chart inside the <div> element with id="piechart"
			  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			  chart.draw(data, options);


			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(drawChart);

			  function drawChart() {
				var data = google.visualization.arrayToDataTable($scope.lineChart);

				var options = {
				  title: 'Interest & Pricipal Repayment Relation',
				  curveType: 'function',
				  legend: { position: 'bottom' }
				};

				var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

				chart.draw(data, options);
			  }
		}
      });
	  
	  
	  
	  
	  
      $scope.$watch('monthValue', function (newval, oldval) {
          $rootScope.monthValue = newval;
          $scope.paymentReport = [];
	  $scope.lineChart = [];
	  $scope.lineChart.push(['Month', 'Principle', 'Interest']);
  		$scope.remainingBalance = $rootScope.loanValue;
      $scope.interestCalc = 0;
      $scope.principleCalc = 0;
      $scope.interestApply = $rootScope.interestValue/1200;
      $scope.emi = $rootScope.loanValue * (($rootScope.interestValue/12)/100) * ((Math.pow((1 + (($rootScope.interestValue/12)/100)), $rootScope.monthValue))/((Math.pow((1 + (($rootScope.interestValue/12)/100)), $rootScope.monthValue))-1));
          for(i=1; i<=$rootScope.monthValue; i++){
             $scope.principleCalc = $scope.remainingBalance * $scope.interestApply;
             $scope.interestCalc = $scope.emi - $scope.remainingBalance * $scope.interestApply;
  			     $scope.paymentReport.push([i, $scope.remainingBalance, $scope.interestCalc, $scope.principleCalc, $scope.remainingBalance - $scope.interestCalc]);
				 $scope.lineChart.push([i,  $scope.interestCalc, $scope.principleCalc]);
             $scope.remainingBalance = $scope.remainingBalance - $scope.interestCalc;
  		     }
	   // Load google charts
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		// Draw the chart and set the chart values
		
		function drawChart() {
			  var data = google.visualization.arrayToDataTable([
			  ['Task', 'Hours per Day'],
			  ['Interest Payable', ($scope.emi * $rootScope.monthValue) - $rootScope.loanValue],
			  ['Principle Amount', $rootScope.loanValue]
			]);

			  // Optional; add a title and set the width and height of the chart
			  var options = {'title':'Payment Breakup Between Principal and Interest', 'width':550, 'height':400};

			  // Display the chart inside the <div> element with id="piechart"
			  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			  chart.draw(data, options);


			  google.charts.load('current', {'packages':['corechart']});
			  google.charts.setOnLoadCallback(drawChart);

			  function drawChart() {
				var data = google.visualization.arrayToDataTable($scope.lineChart);

				var options = {
				  title: 'Interest & Pricipal Repayment Relation',
				  curveType: 'function',
				  legend: { position: 'bottom' }
				};

				var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

				chart.draw(data, options);
			  }
		}
        });

	
});





});
