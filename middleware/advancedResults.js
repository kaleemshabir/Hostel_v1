const advancedResults = (model, populate) => async (req, res, next) => {
  // let query;

  // // Copy req.query
  // const reqQuery = { ...req.query };

  // // Fields to exclude
  // const removeFields = ['select', 'sort', 'page', 'limit'];

  // // Loop over removeFields and delete them from reqQuery
  // removeFields.forEach(param => delete reqQuery[param]);

  // // Create query string
  // let queryStr = JSON.stringify(reqQuery);

  // // Create operators ($gt, $gte, etc)
  // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  
  // Finding resource
  const search = req.body.search;
  let copy=[];
  console.log("search", search.toLowerCase());
  hostels = await model.find();
  hostels.forEach(element => {
    if( element.name.toLowerCase().includes(search.toLowerCase()) ||
    element.address.toLowerCase().includes(search.toLowerCase()) || 
    element.hostelType.toLowerCase().includes(search.toLowerCase())){
copy.push(element);
    }
     
    console.log("name",element.name);

  });


  // // Select Fields
  // if (req.query.select) {
  //   const fields = req.query.select.split(',').join(' ');
  //   query = query.select(fields);
  // }

  // // Sort
  // if (req.query.sort) {
  //   const sortBy = req.query.sort.split(',').join(' ');
  //   query = query.sort(sortBy);
  // } else {
  //   query = query.sort('-createdAt');
  // }

  // Pagination
  // const page = parseInt(req.query.page, 10) || 1;
  // const limit = parseInt(req.query.limit, 10) || 25;
  // const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;
  // const total = await model.countDocuments();

  // query = query.skip(startIndex).limit(limit);

  // if (populate) {
  //   query = query.populate(populate);
  // }

  // Executing query
  // const results = await query;

  // // Pagination result
  // const pagination = {};

  // if (endIndex < total) {
  //   pagination.next = {
  //     page: page + 1,
  //     limit
  //   };
  // }

  // if (startIndex > 0) {
  //   pagination.prev = {
  //     page: page - 1,
  //     limit
  //   };
  // }

  res.advancedResults = {
    success: true,
    count: copy.length,
    data: copy
  };

  next();
};

module.exports = advancedResults;
