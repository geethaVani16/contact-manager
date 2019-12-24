const request =require('request')



// exports.getBirthData = async (formData)  => {

    
//     // console.log(formData)
//     const result= request.post( 
//         {
//             url:'http://13.233.178.169:8080/api/panchang',
//             formData:formData
//         }, function optionalCallback (err, httpResponse, body) {
//             if(err) {
//                 return err
//             } else {
//                 // console.log(body ,"1body")
//                 return body
//             }
//           }
//     )
//     return result
  
// }
  


exports.getBirthData = function (formData) {
    console.log(formData,"jjjj")
    const urlData ={
        url:'http://13.233.178.169:8080/api/panchang',
        form:(formData)
    }
    return new Promise((resolve, reject) => {
      request.post(urlData, (error, response, body) => {
        if (body) {
            const data=JSON.parse(body)
          return resolve(data);
        }
        if (error) {
          return reject(error);
        }
      });
    });
  };