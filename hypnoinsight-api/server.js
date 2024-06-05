const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

const pageRoutes = require("./routes/page-route");
app.use("/pages/", pageRoutes);

const userRoutes = require("./routes/user-route");
app.use("/users/", userRoutes);

const interestRoutes = require("./routes/interest-route");
app.use("/interests/", interestRoutes);

const toolRoutes = require("./routes/tool-route");
app.use("/tools/", toolRoutes);

const prescreeningQuestionsRoutes = require("./routes/prescreening-answer-route");
app.use("/prescreening-questions/", prescreeningQuestionsRoutes);

const prescreeningAnswerRoutes = require("./routes/prescreening-answer-route");
app.use("/prescreening-answers/", prescreeningAnswerRoutes);

const userAnswerRoutes = require("./routes/user-answer-route");
app.use("/user-answers/", userAnswerRoutes);

const userInterestRoutes = require("./routes/user-interest-route");
app.use("/user-interests/", userInterestRoutes);

app.listen(PORT, () => {
    console.log("Listening on Port", PORT);
});