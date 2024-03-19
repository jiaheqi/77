const route2018 = require("./routes/2018.js");
const route2019 = require("./routes/2019.js");
const route2020 = require("./routes/2020.js");
const route2021 = require("./routes/2021.js");
const route2023 = require("./routes/2023.js");
const SelfStudy = require("./routes/SelfStudy.js");
const routeCharles = require("./routes/Base.js");
const routelife = require("./routes/Life.js");
let englishFiles = ["/english/introduction.md"];
englishFiles = englishFiles.concat(
  route2023,
  SelfStudy,
  route2021,
  route2020,
  route2019,
  route2018
);
let lifeFiles = ["/life/introduction.md"];
lifeFiles = lifeFiles.concat(
  routelife,
);
let studyFiles = ["/study/introduction.md"];
studyFiles = studyFiles.concat(
    routeCharles,
);

let sidebar={};
sidebar={//左侧列表
    "/english/": englishFiles,
    "/life/": lifeFiles,
    "/study/": studyFiles,
    };
module.exports = sidebar;
