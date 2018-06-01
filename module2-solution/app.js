(function(){
    angular.module("ShoppingListCheckOff", [])
    .controller('ToBuyController',ToBuyController )
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;
        toBuy.list = ShoppingListCheckOffService.getToBuyItems();
        console.log(toBuy.list);  
        toBuy.removeItem = function(itemIndex){
            ShoppingListCheckOffService.addItem(itemIndex);
            ShoppingListCheckOffService.removeItem(itemIndex);
            
        }      

    }

    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.list = ShoppingListCheckOffService.getAlreadyBoughtItems();

    }

    function ShoppingListCheckOffService(){
        var service = this;
        var alreadyBought = [];

        var toBuy = [
            {
                name : "Cookies",
                quantity : 10
            },
            {
                name : "Chips",
                quantity : 10
            },
            {
                name : "Fries",
                quantity : 15
            },
            {
                name : "Coke",
                quantity : 05
            },
            {
                name : "Muffins",
                quantity : 15
            }
        ];

        service.addItem = function (itemIndex) {
            var item = {
              name: toBuy[itemIndex].name,
              quantity: toBuy[itemIndex].quantity
            };
            alreadyBought.push(item);
          };

        service.removeItem = function (itemIndex) {
            toBuy.splice(itemIndex, 1);
          };

        service.getToBuyItems = function(){
            return toBuy;
        }

        service.getAlreadyBoughtItems = function(){
            return alreadyBought;
        }


    }

})();