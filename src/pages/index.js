const page = (req, reply) => {
  reply.view('src/templates/index.ejs', {
    categoryName: 'Habbo catálogo',
    totalNumItems: req.searchIndex.getNumDocuments(),
    categories: req.db.categories,
    gameItems: [],
  });
};

module.exports = page;
