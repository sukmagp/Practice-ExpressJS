const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`<div>
    <h1>Menu of Dukun Komputer</h1>
    <ul>
        <li>
            <a href='/mouse'>Mouse</a>
        </li>
        <li>
            <a href='/keyboard'>Keyboard</a>
        </li>
        <li>
            <a href='vga'>VGA</a>
        </li>
    </ul>
</div>`);
});

router.get('/mouse', (req, res) => {
    res.send({
        accecorisName: 'Mouse',
        availability: 120,
        price: '$70'
    });
});

router.get('/keyboard', (req, res) => {
    res.send({
        accecorisName: 'Keyboard',
        availability: 200,
        price: '$100'
    });
});

router.get('/vga', (req, res) => {
    res.send({
        accecorisName: 'VGA',
        availability: 10,
        price: '$200'
    });
});




module.exports = router;