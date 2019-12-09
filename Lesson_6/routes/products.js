products= function (app,db) {

// 1.to add products to the database
    app.post('/products', function (req, res, next) {

        var productname = req.body.productname;
        // var productid = req.body.productid;
        var productquality = req.body.productquality;

        // sql for inserting data
        var sql = "INSERT INTO `Productsdb`(`id`, `productsname`, `productsquality`) VALUES (NULL,'" + productname + "','" + productquality + "')";


        db.query(sql, function (err, result) {
            // if there was an error we handle
            if (err)
                throw err;
            else
                res.send("record added successfully");


        })
    });


//2. getting a single product
    app.get('/products/:id', function () {
        var product_id = req.params.id;
        res.send(product_id);

        // get product_id
        var sql = "SELECT `id`, `productsname`, `productsquality` FROM `Productsdb` WHERE id='" + products_id + "'";

        // get the id
        db.query(sql, function () {

            if (err) {
                throw err;
            } else {
                res.send(found_product);
            }
        });

        //3. to get all products
        app.get('/products', function (req, res) {

            // sql query
            var sql = "SELECT * FROM `Productsdb`";

            db.query(sql, function (err, found_product) {
                if (err) {
                    throw err;
                } else {
                    res.send(found_product);
                }

            });

        });
        // localhost:3000/products/1/bottleone
        app.get('/product/:id/:productname', function (req, res) {
            var product_id = req.params.id;
            var product_name = req.params.product_name;
            res.send(product_id, product_name)

        });


        // 4.to update data
        app.put('/products', function (req, res) {

            //posting data to store into the database
            var productname = req.body.productname;
            var productquality = req.body.productquality;


            var data = req.body;
            res.send(data);

            // updating
            var sql = "UPDATE `Productsdb` SET `id`=[value-1],`productsname`='" + productname + "',`productsquality`='" + productquality + "' WHERE id='" + product_id + "'"

            // db
            db.query(sql, function (err, updated) {

                if (err) {
                    throw err;
                } else {
                    res.send(updated)
                }


            })
        });

        // delete data
        app.delete('/products/:id', function (req, res) {
            var params_id = req.params.id;

            var sql = "DELETE FROM `Productsdb` WHERE id='" + product_id + "'";

            db.query(sql, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    result;
                }

            })

        })


    })














































};
module.exports=products;