const express = require("express");
const { PORT } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server running on ${PORT}`);
    const { Airport, City } = require("./models");
    const Mumbai = await City.findByPk(1);
    // const airport = Mumbai.createAirport({
    //     name: "Mumbai_International_Airport",
    //     code: "MIA",
    // });

    // console.log(airport);
    // const airports = await Mumbai.getAirports();
    // console.log(airports);
    // await Mumbai.removeAirports();
});
