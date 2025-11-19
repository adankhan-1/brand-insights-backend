const express = require("express");
const sequelize = require('./db');
const cors = require('cors');
const Brand = require('./models/brand.js');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;

app.post('/api/brand', async (req, res) => {
    try {
        const { name, website, email } = req.body;
        
        if (!name || !website || !email) {
            return res.status(400).json({ error: 'Name, website, and email are required.' });
        }

        const brand = await Brand.create({
            name,
            website,
            email
        });

        const visibilityMetrics = {
            searchScore: "82/100",
            topKeywords: [name.toLowerCase(), "xyz category"],
            averageSearchPosition: 12,
            pageLoadSpeed: "2.3s",
            mobileUsability: "Excellent",
            competitorRank: 3,
            brandMentions: 235,
        };

        res.status(201).json({
            id: brand.id,
            name: brand.name,
            website: brand.website,
            email: brand.email,
            visibilityMetrics,
        });
    } catch(err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'Inserting into brand failed'});
    }
});

app.get('/api/brand', async(req, res) => {
    try {
        const brands = await Brand.findAll();

        if (!brands || brands.length === 0) {
            return res.status(404).json({ message: 'No brands found' });
        }

        res.json(brands);

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'Fetching brands failed'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})