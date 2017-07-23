/**
 * Created by Administrator on 2017/7/21.
 */

    var app = angular.module("app",[])
    app.controller("myCtrl",["$scope","$http",function ($scope,$http) {
        $scope.data ={}
        $http.get("../data/top.json").success(function (data) {
            $scope.data = data;
            
        })
        $scope.flag = true
        $scope.alert = function () {
            $scope.flag = !$scope.flag
            if($scope.flag==true){
                $scope.sss = "none"
            }else{
                $scope.sss = "block"
            }

        }
       
        
        // $scope.color = $scope.data.color
        



    }])




