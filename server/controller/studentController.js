const studentRecordModel = require("../models/studentModel");


const studentDetailsController = async(req,res)=>{

  console.log(req.body);
 
   try {

    const data = new studentRecordModel({
        fullName:req.body.values.name,
        nameWithInitials:req.body.values.nameWithInitials,       
        email:req.body.values.email,

        address:req.body.address,

        mobileNumber:req.body.values.mobileNumber,
        whatsAppNumber:req.body.values.whatsAppNumber,
        birthDay:req.body.values.birthDay,
        school:req.body.values.school,

        cambrige:req.body.cambrige,
        elocution:req.body.elocution,
        general:req.body.general,

        mothersMobileNumber:req.body.mothersMobileNumber,
        fathersMobileNumber:req.body.fathersMobileNumber,
        GuardianMobileNumber:req.body.GuardianMobileNumber,

        grade:req.body.grade,

        fartherName:req.body.fartherName,
        motherName:req.body.motherName,
        GuardianName:req.body.GuardianName,

        fartherOccupation:req.body.fartherOccupation,
        motherOccupation:req.body.motherOccupation,
        GuardianOccupation:req.body.GuardianOccupation,

        fartherEmail:req.body.fartherEmail,
        motherEmail:req.body.motherEmail,
        GuardianEmail:req.body.GuardianEmail,
   
      })

    await data.save();

    console.log(data);

     res.status(200).send({
        success:true,
        message:"Student Details saved successfully",
        data:data
     })

        
   } catch (error) {        
        res.status(200).send({
             success:false,
             message:"Student Details saved Unsuccessfully",
        }) 
   }
}

module.exports = {studentDetailsController};





// const [mothersMobileNumber, setMothersMobileNumber] = useState("");
//   const [fathersMobileNumber, setFathersMobileNumber] = useState("");
//   const [grade,setGrade] = useState("")
//   const [fartherName,setFartherName] = useState("")
//   const [motherName,setMotherName] = useState("")
//   const [fartherOccupation,setFartherOccupation] = useState("")
//   const [motherOccupation,setMotherOccupation] = useState("")
//   const [fartherEmail,setFartherEmail] = useState("")
//   const [motherEmail,setMotherEmail] = useState("")