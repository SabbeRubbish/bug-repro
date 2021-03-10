exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  pluginOptions
) => {
  const { createNode } = actions

  createNode({
    id: "7508867",
    parent: null,
    children: [],
    internal: {
      type: `salonizedCustomers`,
      content: "",
      contentDigest: createContentDigest("7508867"),
    },

    first_name: "John",
    last_name: "Doe",
  })

  createNode({
    id: "7522368",
    parent: null,
    children: [],
    internal: {
      type: `salonizedCustomers`,
      content: "",
      contentDigest: createContentDigest("7522368"),
    },

    first_name: "Jane",
    last_name: "Doe",
  })
  
  createNode({
    id: "27339689",
    parent: null,
    children: [],
    internal: {
      type: `salonizedAppointments`,
      content: "",
      contentDigest: createContentDigest("27339689"),
    },

    customer_id: "7508867",
  })
  
  createNode({
    id: "27339570",
    parent: null,
    children: [],
    internal: {
      type: `salonizedAppointments`,
      content: "",
      contentDigest: createContentDigest("27339570"),
    },

    customer_id: "7508867",
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions;
    createTypes(`
      type salonizedAppointments implements Node {
        customer_id: String!
        customer: salonizedCustomers @link(by: "customer_id")
      }
      type salonizedCustomers implements Node {
        id: String!
      }
    `);
  };
  