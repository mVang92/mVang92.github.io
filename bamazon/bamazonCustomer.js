var inquirer = require("inquirer")
var mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("----------------------")
    console.log("  Welcome, Customer!  ");
    console.log("----------------------\n")
    selection();
});

function selection() {
    inquirer.prompt([
        {
            name: "command",
            message: "\nSelect an option:",
            type: "list",
            choices: ["Products for Sale", "Purchase Products", "Exit"]
        }
    ]).then(function (choice) { 
        switch (choice.command) {
            case "Products for Sale":
                showItems();
                break;
            case "Purchase Products":
                promptUser();
                break;
            case "Exit":
                connection.end();
                break;
        }
    });
}

function promptUser() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "command",
                message: "\nWhich item do you want to purchase?",
                type: "list",
                choices: function () {
                    var choices = [];
                    for (var i = 0; i < results.length; i++) {
                        choices.push(results[i].item_id + " | " + results[i].product_name)
                    }
                    return choices;
                }
            }
        ]).then(function (answers) {
            var splitItemId = answers.command.split(" ", 1);
            var quantity = parseInt(splitItemId - 1);
            inquirer.prompt([{
                name: "quantityPurchase",
                message: "How many of these do you need?",
                type: "input",
                validate: function (value) {
                    if (parseInt(value) < 0) {
                        console.log("\nPlease enter a valid input.")
                        return false;
                    } else if ((isNaN(value) === false) && (results[quantity].stock_quantity >= parseInt(value))) {
                        updateDb(results, quantity, value, splitItemId);
                        return true;
                    }
                    console.log("\nQuantity specified not in supply. Please specify a different amount.")
                    return false;
                }
            }]);
        });
    });
}

function showItems() {
    connection.query("SELECT * FROM products", function (err, results) {
        console.log("Items Available for Sale")
        for (var i = 0; i < results.length; i++) {
            console.log(
                results[i].item_id +
                " | " + results[i].product_name +
                " | $" + results[i].consumer_price);
        }
        selection();
    });
}

function updateDb(results, quantity, value, splitItemId) {
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: results[quantity].stock_quantity - value
            },
            {
                item_id: splitItemId
            }
        ],
        function (err, res) {
            var product = " product.";
            if (value > 1) {
                product = " products.";
            }
            process.stdout.write("\nYou have purchased " + value + " ")
            process.stdout.write(results[splitItemId - 1].product_name);
            process.stdout.write(product)
            console.log("\nThank you for your purchase!");
            selection();
        }
    );
}