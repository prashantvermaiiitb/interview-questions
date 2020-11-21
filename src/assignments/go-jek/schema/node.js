/**
 * basic structure for the Node contained in the graph.
 * Below will be created for the other 3 cols as well, total 4 cols will be there, finally sharing will be
 * meaningful as the number of nodes grow in each column
 * Idea here is to have the different column data arranged in different cols.
 * This will be storing data for different cols and will be hit using perpage-5/6 like that
 */
db.createCollection("col1", {
  validator: {
    $jsonSchema: {
      bsonType: ["object"],
      additionalProperties: false,
      required: ["name"],
      properties: {
        name: {
          bsonType: "string",
          minLength: 3,
          maxLength: 30, //check for the length
          description: "Must be string",
        },
        title: {
          bsonType: "string",
          minLength: 3,
          maxLength: 30, //check for the length
          description: "Must be string",
        },
        description: {
          bsonType: "string",
          minLength: 50,
          maxLength: 100, //check for the length
          description: "Must be string",
        },
      },
    },
  },
});
/**
 * Sample node for the table
 */
var sampleNode = {
  _id: "<Object id from the Mongo DB>",
  name: "Node-1",
  title: "Sample node title",
  description: "Sample node description should have 50 minimum characters",
};

/**
 * creating collection for storing the information about the connectivity in the graph
 * this can be treated as the adjacency matrix for the project.
 * This table has the foreign key constraints to be implemented.
 * Will be created for 4 different cols as well ? No
 */

db.createCollection("adjacency_matrix", {
  validator: {
    $jsonSchema: {
      bsonType: ["object"],
      required: ["_id", "nodes"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "should be the objectId taken from the NodeList table",
        },
        nodes: {
          bsonType: ["array"],
          minItems: 1,
          uniqueItems: 1,
          additionalProperties: false,
          items: {
            bsonType: ["object"],
            required: ["col", "nodes"],
            additionalProperties: false,
            description:
              "Collection of nodes with column information for those nodes where they belong.",
            properties: {
              col: {
                bsonType: "string",
                description:
                  "Must be a string representing the name of the column.",
              },
              nodes: {
                bsonType: ["array"],
                minItems: 1,
                uniqueItems: 1,
                additionalProperties: false,
                required: ["_id", "colPos"],
                description: "Information of the nodes connecting each other",
                properties: {
                  _id: {
                    bsonType: ["object"],
                    description: "Id object for the node.",
                  },
                  colPos: {
                    bsonType: ["int", "long"],
                    description:
                      "Id of the column in which the column Position of the Node lies",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

/**
 * Each node will be having data about it's
 * - Previous layer
 * - Current layer
 * - Next layer
 */
var sampleNodeAdjacencyMatrixEntry = {
  _id: "<Object Id for the parent node>",
  nodes: [
    {
      col: "col1",
      nodes: [
        {
          _id: "<Object Id for the connecting node>",
          colPos: 1, //will be used in conjunction with perpage param passed from UI
        },
      ],
    },
    {
      col: "col2",
      nodes: [
        {
          _id: "<Object Id for the connecting node>",
          colPos: 2, //will be used in conjunction with perpage param passed from UI
        },
        {
          _id: "<Object Id for the connecting node>",
          colPos: 4, //will be used in conjunction with perpage param passed from UI
        },
      ],
    },
    {
      col: "col3",
      nodes: [
        {
          _id: "<Object Id for the connecting node>",
          colPos: 4, //will be used in conjunction with perpage param passed from UI
        },
        {
          _id: "<Object Id for the connecting node>",
          colPos: 5, //will be used in conjunction with perpage param passed from UI
        },
      ],
    },
  ],
};
