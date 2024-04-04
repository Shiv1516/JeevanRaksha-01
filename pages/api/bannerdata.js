// pages/api/data.js
import path from "path";
import fs from "fs";

const dataFilePath = path.resolve(process.cwd(), "data", "banner-data.json");

const getData = () => {
  const rawData = fs.readFileSync(dataFilePath);
  const data = JSON.parse(rawData);
  return data;
};
export default (req, res) => {
  const data = getData();
  res.status(200).json(data);
};
