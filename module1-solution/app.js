(function(){
    
        angular.module('LunchCheck', [])
        .controller('LunchCheckController', function($scope) {
             $scope.lunchmenu = "";   
                $scope.state = "";
            $scope.checkTooMuch = function(){
               
                
                 $scope.items = $scope.lunchmenu.split(',');
                 console.log($scope.items.length);  
                 
                 if($scope.lunchmenu == ""){
                    $scope.state = "Please enter data first!";
                 }
                
               else if($scope.items.length <= 3 && $scope.items.length >= 1){
                    $scope.state = "Enjoy!";
                    
                }
                    else if ($scope.items.length > 3){
                        $scope.state = "Too much!";
                    }
                       
                    };
        });
    
    
    })();