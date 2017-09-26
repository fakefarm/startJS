export const schema = {
  // at each level of mock data you set the type of data and the properties that it contains. this initial property is a users object.
  "type": "object",
  "properties": {
    "users": {
      // then notice that inside the property of users, the type is again specified. we want users to export an array
      "type": "array",
      // we can set the range of random input with min and max
      "minItems": 3,
      "maxItems": 5,
      "items": {
        // the array contains a collection of 3 - 5 objects, as defined above. those objects have properties, just like the above object.
        "type": "object",
        "properties": {
          "id": {
            // at this level we want to specifiy the type of the these object values and other configuration, like if it is unique, and minimum or maxium
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            // faker indicates we want to use faker and a faker value.
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        // required insures these values will be set. if you do not define the requried values, sometimes the values will randomly not show. (that may be what you want.)
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};
