angular.module('aqi', ["ui.bootstrap"]).controller("aqiCtrl", ["$scope", "$http", aqiCtrl]);

function aqiCtrl($scope, $http) {

	$scope.search = "下沙";

	$scope.cities = ["下沙", "西溪", "杭州", "丽水"];

	$scope.aqis = [];

	$http.get("/get_aqi_details_hangzhou")
		 .success(function(data) {
			if (data[data.length - 1].position_name === null) {
				data[data.length - 1].position_name = "市均值";
			}
			$scope.aqis = $scope.aqis.concat(data);
		})

	$http.get("/get_aqi_details_lishui")
		 .success(function(data) {
			if (data[data.length - 1].position_name === null) {
				data[data.length - 1].position_name = "市均值";
			}
			$scope.aqis = $scope.aqis.concat(data);
		})

	// $http.get("/aqi/aqiData.json")
	// 	 .success(function(data){
	// 	 	if (data[data.length - 1].position_name === null) {
	// 	 		data[data.length - 1].position_name = "市均值"
	// 	 	}
	// 	 	$scope.aqis = $scope.aqis.concat(data);
	// 	 })

	$scope.changeCity = function(city) {
		$scope.search = city;
	}

	$scope.aqiClose = function(index) {
		$scope.aqis.splice(index, 1);
	};

	$scope.aqiType = function(aqinum) {
		if (aqinum > 150) {
			return "danger";
		} else if (aqinum > 100) {
			return "warning";
		} else if (aqinum > 50) {
			return "info";
		} else if (aqinum > 0) {
			return "success";
		} else {
			return "";
		}
	}

	$scope.timeFormat = function(time) {
		var d = new Date(time.replace("Z", "+08:00"));
		return d.getHours() + "点整";
	}
	
	$scope.primaryPollutant = function(p) {
		if (p === null)
			return '无';
		else if (p === "臭氧8小时")
			return "臭氧";
		else if (p === "臭氧1小时")
			return "臭氧";
		else
			return p;
	}
}