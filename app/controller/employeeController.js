const custom = require('../services/employeeService')

module.exports = function(app) {


    app.get('/employeelist', async(req, res) => {
        const data = await custom.employeeList();
        if(data.rowCount != 0) {
            res.send({
                status: true,
                count: data.rowCount,
                message: 'Get Employee List Successfully..!',
                result: data.rows
            });
        }
        else {
            res.send({
                status: false,
                message: 'Something went wrong. Please try again..!',
                result: data
            });
        }
    });


    app.post('/addemployee',  async(req, res) => {   
        const data = await custom.addEmployee(req.body);   
        if (data.rowCount != 0) {
            res.send({
                status: true,
                message: "Record Inserted Successfully..!",
                result: data
            });
        }
         else {
            res.send({
                status: false,
                message: "Something went wrong. Please try again..!",
            });
        }
    });



}