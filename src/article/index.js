const URL = require
  .context("./", false, /\.md$/)
  .keys()
  .map((item) => item.slice(0, -3).substring(2))
  .filter((item) => item.includes(".archive") !== true);

export default URL.reverse();
