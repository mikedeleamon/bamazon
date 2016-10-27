// bamazoncustomer.js

var mysql = require("mysql");
var fs = require("fs");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "bamazonDB"
})

// this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
var runSearch = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to buy?",
        choices: ["Find songs by artist", "Find all artists who appear more than once", "Find data within a specific range", "Search for a specific song"]
    }).then(function(answer) {
        var quantity = 'SELECT * FROM Produts ';
        }
    })
};

var showALL = function() {
    var query = 'SELECT * FROM Produts';
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
        runSearch();
    })
};


//The app should then prompt users with two messages.
////The first should ask them the ID of the product they would like to buy.
////The second message should ask how many units of the product they would like to buy



//Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
////If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.


//However, if your store does have enough of the product, you should fulfill the customer's order.
////This means updating the SQL database to reflect the remaining quantity.
////Once the update goes through, show the customer the total cost of their purchase.

