const DUMMY_Places = [
  {
    id: "p1",
    title: "Taj Mahal",
    description: "lorem10000000000000000",
    location: {
      lat: 40.746885847,
      lng: -73.7565455965,
    },
    address: "Agra, Uttar pardesh",
  },
];

const getAllPlaces = (req, res) => {
  res.json(DUMMY_Places);
};

const getPlaceById = (req, res) => {
  res.json({ message: "Get place by id", id: req.params.id });
};

const createPlace = (req, res) => {
  const { title, description } = req.body;
  res.json({ message: "Create new place", title, description });
};

const updatePlace = (req, res) => {
  const { id } = req.params;
  res.json({ message: "Update place", id });
};

const deletePlace = (req, res) => {
  const { id } = req.params;
  res.json({ message: "Delete place", id });
};

module.exports = {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
};
