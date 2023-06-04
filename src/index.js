const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://SAURABH:Soa4GdK4yRvlVN5i@cluster0.umtgp.mongodb.net/Saurabh?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB is connected..."))
  .catch((error) => console.log(error));

app.use("/", route);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});