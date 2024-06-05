const express = require("express");
const app = express();
const cors = require("cors");
const hypnoInsightRoute = require("./routes/hypnosisFactsRoute");

require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use("/hypno-insight", hypnoInsightRoute)

const pageRoutes = require("./routes/pageRoute");
app.use("/pages/", pageRoutes);

const userRoutes = require("./routes/userRoute");
app.use("/users/", userRoutes);

const interestRoutes = require("./routes/interestRoute");
app.use("/interests/", interestRoutes);

const toolRoutes = require("./routes/toolRoute");
app.use("/tools/", toolRoutes);

const prescreeningQuestionsRoutes = require("./routes/prescreeningAnswerRoute");
app.use("/prescreening-questions/", prescreeningQuestionsRoutes);

const prescreeningAnswerRoutes = require("./routes/prescreeningAnswerRoute");
app.use("/prescreening-answers/", prescreeningAnswerRoutes);

const userAnswerRoutes = require("./routes/userAnswerRoute");
app.use("/user-answers/", userAnswerRoutes);

const userInterestRoutes = require("./routes/userInterestRoute");
app.use("/user-interests/", userInterestRoutes);

app.listen(PORT, () => {
    console.log("Listening on Port", PORT);
});