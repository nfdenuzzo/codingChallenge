module.exports = (data, query) => {
  // check to see if query is empty else return all data
  if (Object.keys(query).length > 0) {
    let queryResults = null;
    // loop through query by key value pair 
    for (const [queryKey, queryValue] of Object.entries(query)) {
      // we check to see if key contains dot annotation means its at a deeper level
      if (queryKey.includes(".")) {
        // create a new key using the last "key" of the annotation since thats the end goal
        let newQueryKey = queryKey.split(".").pop();
        // perform search using data set, newKey and requested value to find
        queryResults = searchObject(data, newQueryKey, queryValue);
      } else {
        // perform search using data set, first level key and requested value to find
        queryResults = searchObject(data, queryKey, queryValue);
      }
    }
    return queryResults;
  } else {
    return data;
  }

  // searchObject requires 3 props with the 4th being optional so we default to null
  // 4th query will be for the root object incase we drill deeper into the object we can keep a record of it
  function searchObject(data, queryKey, queryValue, objectRootLevel = null) {
    let queryResults = [];
    // we loop through the data for each object in the array
    data.forEach(currentObj => {
      // we then loop through all keys within the object this will be 1st level initially
      Object.keys(currentObj).forEach(key => {
        // we find the matching value of the key
        const existingValue = currentObj[key];
        // we check to ensure that the existingValue is not tpye object else we would need to drill down deeper
        // we then check to ensure that the queryKey and queryValue matches the initial query required
        if (typeof existingValue !== 'object' && key === queryKey && existingValue === queryValue) {
          // push initial object into the results array that match the query params
          // since we might be deeper into the Object we kept a record of the initial object which we use instead
          queryResults.push(objectRootLevel ? objectRootLevel : currentObj);
          // if the existing value is an object it means we have to repeat the process of the search but passing in the new object as the new data
        } else if (typeof existingValue === 'object') {
          // we use the spread operator to combine results, as the function is expecting an Array and not an Object we need to wrap the exitingValue in an array to ensure we dont
          // we check if we have the objectRootLevel which will indicate what level we are on, if we have it we keep passing it through else we pass in the new obj which is the root level
          // thus it does not matter how deep in the object we are we will return the root level if a match it found
          queryResults = [...queryResults, ...searchObject([existingValue], queryKey, queryValue, objectRootLevel ? objectRootLevel : currentObj)];
        }
      });
    });
    return queryResults;
  }
}