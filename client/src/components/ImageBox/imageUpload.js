// import React, {useState} from 'react';
// import Dropzone from 'react-dropzone';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fas} from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import Axios from 'axios';

// library.add(fas);


// function ImageUpload(props) {

//     const [Images, setImages] = useState([])
    
//     const onDrop = (files) => {

//         // config to retrieve info from backend
//         let formData = new FormData();
//         const config = {
//             header:{'content-tyoe': 'multipart/form-data'}
//         }
//         formData.append('file', files[0]);

//         //save image inside node server
//         Axios.post('/api/item/uploadImage', formData,config)
//         .then(response => {
//             //gets info from imageApi in routes/api
//             if(response.data.success) {
//                 //to save multiple images
//                 setImages([...Images,response.data.image])
//                     props.refreshFunciton([...Images,response.data.image])

//             } else {
//                 alert('Failed to save image')
//             }
//         })
        
//     }
    
//     return (

        
//         <div style={{display:'flex', justifyContent:'space-between'}}>
            
            
//             {/* box for file upload */}
//             <Dropzone 
//             onDrop={onDrop}
//             multiple={false}
//             maxSize
//             >
//                 {({getRootProps, getInputProps}) => (
//                     <div style={{width:'300px', height:'240px', border: '1px solid lightgray', display:'flex',
//                      alignItems:'center', justifyContent:'center'}}
//                         {...getRootProps()}
//                     >
//                         <input {...getInputProps()} />
//                         <FontAwesomeIcon icon="plus" style={{ fontSize:'3rem'}} />

//                     </div>
//                 )}
//             </Dropzone>

//             {/* Area for image display */}
//             <div style={{display:'flex',width:'350px', height:'240px', overflowX:'scroll'}}>

//                 <div onClick>
//                     <img />
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default ImageUpload;

