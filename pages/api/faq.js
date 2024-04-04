import faqData from "../../data/faq.json";

export default (req, res) => {
  res.status(200).json(faqData);
};
