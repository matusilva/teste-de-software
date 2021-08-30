const { Router } = require('express')
const router = Router()

/**
 * criar produto
 */
router.post('/', (req, res) => {
    const {id, nome} = req.body;
    if (id && nome) {
        return res.status(201).json('Produto cadastrado!');
    }
    res.status(400).json('produto não foi cadastrado');
});

/**
 * pesquisar produtos
 */
router.get('/', (req, res) => {
    return res.json('all products')
});

/**
 * pesquisar produtos especificos
 */
router.get('/:id', (req, res) => {
    if (req.params.id == '1') {
        return res.json('SSD Kingston')
    }
    return res.status(404).json('Produto não encontrado');
});

module.exports = router