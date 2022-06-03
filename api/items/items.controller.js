const service = require('./items.service')

exports.getAll = async (req, res) => {
  const { query } =  req;
  const search = query.search || null;

  try {
    let qs = '';

    if (search) {
        qs = `/search?q=${search}`
    }
    
    const items = await service.getItems(qs);

    res.status(200)
    return res.json({ items });
  }
  catch(err) {
    return res.status(500).json({
      message: err.message
    })
  }
};

exports.getById = async (req, res) => {
  const { params } =  req;


  try {
    let qs = '';

    if (params.id) {
      qs = `/${params.id}`
    }
  
    const item = await service.getItems(qs);

    res.status(200)
    return res.json({ item });
  }
  catch(err) {
    return res.status(500).json({
      message: err.message
    })
  }
};