var express = require('express');
var router = express.Router();
const dmvModel = require("../modal/dmv");


/* GET home page. */
router.get('/', async (req, res, next) =>{
  const dmvList = await dmvModel.getAll();
  res.render('template', {
  locals: {
    title: 'DMV Reviews',
    data: dmvList
  },
  partials: {
    partial: 'partial-index'}
  });
});

router.get('/:dmv_id',async (req,res,next)=>{
  const { dmv_id } = req.params;
  const theDmv = await dmvModel.getById(dmv_id);
  res.render("template", {
    locals: {
      title: "DMV Information",
      data: theDmv
    },
    partials: {
      partial: 'partial-single-dmv'
    }
  })
})
module.exports = router;
