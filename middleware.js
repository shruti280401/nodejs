module.exports = reqfilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("please provide age")
    }
    else if (req.query.age < 18) {
        resp.send("you are not allowed to acces this page")
    }
    else {
        next();
    }
}