const  express =  require("express");
const router = express.Router();
const isAuthenticated =  require("../middlewares/isAuthenticated");
const {signUp,logIn} =  require("../controllers/users");
const {createHouse,getAllHouses,getOneHouse} =  require("../controllers/houses")

//router.use('/users/',require('./user'));

router.post('/users/signup',signUp)
router.post('/users/login',logIn)


router.post('/houses',isAuthenticated,createHouse)
router.get('/houses',getAllHouses)
router.get('/houses/:id',getOneHouse)

module.exports = router;

