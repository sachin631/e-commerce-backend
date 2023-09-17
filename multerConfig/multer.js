// const multer=require("multer");

// //config the multer
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./uploads");
//     },
//     filename:(req,file,cb)=>{
//         const filename = `image-${Date.now()}.${file.originalname}`

//         cb(null,filename);
//     }
// });

// //apply filter
// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype==="image/png" || file.mimetype==="image/jpg" || file.mimetype==="image/jpeg"){
//         cb(null,true);
//     }
//     else{
//         cb(null,false);
//         return cb(new Error("Only .png .jpg & .jpeg formatted Allowed"));
//     }
// }
// //combine storage and other with multer

// const upload=multer({
//     storage:storage,
//     fileFilter:fileFilter
// });

// module.exports=upload;



const multer = require("multer");


// storage config
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
});

// filter 
const filefilter = (req,file,callback)=>{
    if(file.mimetype === "image/png" ||file.mimetype === "image/jpg" ||file.mimetype === "image/jpeg"  ){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("Only .png .jpg & .jpeg formatted Allowed"))
    }
}

const upload = multer({
    storage:storage,
    fileFilter:filefilter
});

module.exports = upload;