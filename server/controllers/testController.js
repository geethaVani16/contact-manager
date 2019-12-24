const express=require('express')
const router= express.Router()
const getBirthData=require('../../helpers/check').getBirthData;




router.post('/60th',async function(req,res) {
    const getDayAstrology =  await getBirthData(req.body)
    const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
    const SixtyBirth = Number(req.body.year)+60 
    req.body.year = SixtyBirth
    delete  req.body.day
    req.body.day=""
    const getsixtyBirthAstrology = await getBirthData(req.body)
    const sixtyMonthPanchag=getsixtyBirthAstrology.panchagam
    const sixtyBirthNakshatra =sixtyMonthPanchag.find(day =>day.nakshatra_name==nakshatra)
  res.status(200).json(sixtyBirthNakshatra);

})


router.post('/70th',async function(req,res) {
    const getDayAstrology =  await getBirthData(req.body)
    const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
    const seventhBirth = Number(req.body.year)+69
    req.body.year = seventhBirth
    delete  req.body.day
    req.body.day=""
    const getseventhBirthAstrology = await getBirthData(req.body)
    const sixtyMonthPanchag=getseventhBirthAstrology.panchagam
    const seventhBirthDay=sixtyMonthPanchag.find(day =>day.nakshatra_name==nakshatra)
  res.status(200).json(seventhBirthDay);

})


router.post('/80th',async function(req,res) {
    const getDayAstrology =  await getBirthData(req.body)
    const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
    const eigthyBirth = Number(req.body.year)+80
    req.body.year = eigthyBirth
    delete  req.body.day
    req.body.day=""
    const geteigthyBirthAstrology = await getBirthData(req.body)
    const sixtyMonthPanchag=geteigthyBirthAstrology.panchagam
    const eigthyBirthDay =sixtyMonthPanchag.find(day => day.nakshatra_name==nakshatra)
    res.status(200).json(eigthyBirthDay);
})

module.exports={
    testRouter: router
}



