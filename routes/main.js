
const burgers = [{ name: "CHeese" }, { name: "Breakfast" }]

module.exports = function (app) {// Serve index.handlebars to the root route, populated with all quote data.
    app.get("/", function (req, res) {
        res.render("index", { burgers: burgers })
    });

    // Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
    app.get("/about", function (req, res) {
        res.render("about")

    });
}