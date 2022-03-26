const connect = require('../../database')

class employeeController {

    employeeList() {
        return new Promise((resolve, reject) => {
            const query = connect.query('SELECT * FROM employees WHERE isdeleted=false', (err, res) => {
                return err ? reject(err): resolve(res);
            })
        })
    }

    addEmployee(data) {
        return new Promise((resolve, reject) => {
            const query = connect.query(`INSERT INTO employees(firstname, lastname, email, mobile, address, city, state, pincode, salary, password) 
            VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [data.firstname, data.lastname, data.email, data.mobile, data.address, data.city, data.state, data.pincode, data.salary, data.password], (err, result) => {
                return err ? reject(err) : resolve(result);
            });
        });
    }

}

module.exports = new employeeController();