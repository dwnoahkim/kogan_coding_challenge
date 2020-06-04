const axios = require('axios');

module.exports = function(app) {
  app.post('/api/fetchItems', async (req, res) => {
    try {
      const response = await axios.get('http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1');

      const category = req.body.category;

      const objects = response.data.objects.filter((item) => {
        return item.category === category;
      });

      res.send({ objects });
    } catch (e) {
      console.error(error);
      res.send({ result: 'error' });
    }
  });
}