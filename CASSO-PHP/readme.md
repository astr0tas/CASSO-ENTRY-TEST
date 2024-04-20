#### Current PHP version when creating this demo: 8.3.0

#### Use `php -S localhost:8000` command to run the application without using Apache, NGNIX or anything else.

#### `vendor/payos/payos/src/PayOS.php` file has been modified: added this line `curl_setopt($paymentRequest, CURLOPT_SSL_VERIFYPEER, false);` in order for this demo to work