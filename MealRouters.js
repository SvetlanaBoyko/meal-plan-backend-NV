const { Router } = require('express');
const { getMeal, saveMeals, deleteMeals, editMeal } = require('./MealController')

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals)
router.post('/deleteMeals', deleteMeals)
router.post('/editMeal', editMeal)

module.exports = router;