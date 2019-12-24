const express = require('express')
const router = express.Router()
const getBirthData = require('../../helpers/check').getBirthData;
const moment = require('moment')




router.post('/60th', async function (req, res) {
  const getDayAstrology = await getBirthData(req.body)
  const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
  const SixtyBirth = Number(req.body.year) + 60
  req.body.year = SixtyBirth
  delete req.body.day
  req.body.day = ""
  const getsixtyBirthAstrology = await getBirthData(req.body)
  const sixtyMonthPanchag = getsixtyBirthAstrology.panchagam
  const sixtyBirthNakshatra = sixtyMonthPanchag.find(day => day.nakshatra_name == nakshatra)
  if (sixtyBirthNakshatra == undefined) {
    res.status(422).json("please check time and date");
  } else {
    const day1 = new Date(sixtyBirthNakshatra.nakshatra_enter_time)
    const aa = moment(new Date(day1)).format('LT')
    var startTime = moment(aa, "HH:mm a");
    var endTime = moment('08:00 am', "HH:mm a");
    if (startTime.isBefore(endTime)) {
      const goodDay ={
        message:"Nakshatra Enter time",
        nakshatraEnterTime:sixtyBirthNakshatra.nakshatra_enter_time
      }
      res.status(200).json(goodDay)
    } else {
      const goodDay ={
        message:"Nakshatra End by",
        nakshatraEndTime:sixtyBirthNakshatra.nakshatra_exit_time
      }
      res.status(200).json(goodDay);
    }
  }
})


router.post('/70th', async function (req, res) {
  const getDayAstrology = await getBirthData(req.body)
  const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
  const seventhBirth = Number(req.body.year) + 69
  req.body.year = seventhBirth
  delete req.body.day
  req.body.day = ""
  const getseventhBirthAstrology = await getBirthData(req.body)
  const seventhMonthPanchag = getseventhBirthAstrology.panchagam
  const seventhBirthNakshatra = seventhMonthPanchag.find(day => day.nakshatra_name == nakshatra)
  if (seventhBirthNakshatra == undefined) {
    res.status(422).json("please check time and date");
  } else {
    const day1 = new Date(seventhBirthNakshatra.nakshatra_enter_time)
    const aa = moment(new Date(day1)).format('LT')
    var startTime = moment(aa, "HH:mm a");
    var endTime = moment('08:00 am', "HH:mm a");
    if (startTime.isBefore(endTime)) {
      const goodDay ={
        message:"Nakshatra Enter time",
        nakshatraEnterTime:seventhBirthNakshatra.nakshatra_enter_time
      }
      res.status(200).json(goodDay)
    } else {
      const goodDay ={
        message:"Nakshatra End by",
        nakshatraEndTime:seventhBirthNakshatra.nakshatra_exit_time
      }
      res.status(200).json(goodDay);
    }
  }

})

router.post('/80th', async function (req, res) {
  const getDayAstrology = await getBirthData(req.body)
  const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
  const eigthyBirth = Number(req.body.year) + 80
  req.body.year = eigthyBirth
  delete req.body.day
  req.body.day = ""
  const geteigthyBirthAstrology = await getBirthData(req.body)
  const sixtyMonthPanchag = geteigthyBirthAstrology.panchagam
  const eigthyBirthDay = sixtyMonthPanchag.find(day => day.nakshatra_name == nakshatra)
  if (eigthyBirthDay == undefined) {
    res.status(422).json("please check time and date");
  } else {
    const day1 = new Date(eigthyBirthDay.nakshatra_enter_time)
    const aa = moment(new Date(day1)).format('LT')
    var startTime = moment(aa, "HH:mm a");
    var endTime = moment('08:00 am', "HH:mm a");
    if (startTime.isBefore(endTime)) {
      const goodDay ={
        message:"Nakshatra Enter time",
        nakshatraEnterTime:eigthyBirthDay.nakshatra_enter_time
      }
      res.status(200).json(goodDay)
    } else {
      const goodDay ={
        message:"Nakshatra End by",
        nakshatraEndTime:eigthyBirthDay.nakshatra_exit_time
      }
      res.status(200).json(goodDay);
    }
  }
})



router.post('/nakashatra', async function (req, res) {
  const getDayAstrology = await getBirthData(req.body)
  const nakshatra = getDayAstrology.panchagam[0].nakshatra_name
  if(req.body.year<req.body.ayshuHomaPerformYear) {
    req.body.year =  req.body.ayshuHomaPerformYear
    delete req.body.day
    req.body.day = ""
    const getBirthAstrology = await getBirthData(req.body)
    const MonthPanchag = getBirthAstrology.panchagam
    const birthday = MonthPanchag.find(day => day.nakshatra_name == nakshatra)
    if (birthday == undefined) {
      res.status(422).json("please check time and date");
    } else {
      const day1 = new Date(birthday.nakshatra_enter_time)
      const aa = moment(new Date(day1)).format('LT')
      var startTime = moment(aa, "HH:mm a");
      var endTime = moment('08:00 am', "HH:mm a");
      if (startTime.isBefore(endTime)) {
        const goodDay = {
          message:"Nakshatra Enter time",
          nakshatraEnterTime:birthday.nakshatra_enter_time
        }
        res.status(200).json(goodDay)
      } else {
        const goodDay = {
          message:"Nakshatra End by",
          nakshatraEndTime:birthday.nakshatra_exit_time
        }
        res.status(200).json(goodDay);
      }
    }
    
  } else {
    res.status(422).json({"error" :"year should be greater than birth date"});
  }

})





module.exports = {
  testRouter: router
}



