const sequelize = require("../../adapters/mysql");
const pagesModel = require("../../models/spages")(sequelize);

const resolvers = {
  Query: {
    async getPageData(_, args) {
      let pageId = 1;
      switch (args.pageName) {
        case "about":
          pageId = 1;
          break;
        case "how-it-works":
          pageId = 2;
          break;
        case "stories":
          pageId = 3;
          break;
        case "privacy-policy":
          pageId = 4;
          break;
        case "terms-and-conditions":
          pageId = 5;
          break;
      }

      const result = await pagesModel.findAll({
        where: { id: pageId },
        attributes: ["title", "description"],
        count: 1,
      });

      return {
        data: result[0],
      };
    },
  },
};

module.exports = resolvers;
