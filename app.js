import express from 'express';
import fetch from 'node-fetch';


const app = express();
const port = 3000;


app.get('/shopify', async (req, res) => {
    const url = 'https://your-shop-name.myshopify.com/admin/api/2021-04/graphql.json';
    const query = `
      {
        shop {
          name
        }
      }
    `;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'Your-Shopify-Access-Token'
        },
        body: JSON.stringify({ query })
    };

    const response = await fetch(url, options);
    const data = await response.json();

    res.json(data);
});




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});