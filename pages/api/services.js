import servicesData from "../../data/services.json";

export default (req, res) => {
  res.status(200).json(servicesData);
};
