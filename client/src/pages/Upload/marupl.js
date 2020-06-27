// import React, {useState} from 'react';
// import Homepage_Nav from "../../components/Homepage_Nav";
// import ImageUpload from "../../components/ImageBox/imageUpload";
// import "./style.css";


// // Function for dropdown catergories

// const Categories = [
//   {key:1, value: "Furniture"},
//   {key:2, value: "Electronics"},
//   {key:3, value: "Apparral"},
//   {key:4, value: "Toys/Games"},
//   {key:5, value: "Books"}
// ]

// function UploadProduct() {

// // functions for entering input values
// const [NameValue, setNameValue] = useState("")
// const [DescriptionValue, setDescriptionValue] = useState("")
// const [LocationValue, setLocationValue] = useState("")
// const [CategoriesValue, setCatergoriesValue] = useState(1)
// const [Images, setImages] = useState([])

// //Onchange event every section of the form
// const onNameChange = (event) => {
//   setNameValue(event.currentTarget.value)
// }

// const onDescriptionChange = (event) => {
//   setDescriptionValue(event.currentTarget.value)
// }

// const onLocationChange = (event) => {
//   setLocationValue(event.currentTarget.value)
// }

// const onCategoriesSelectChange = (event) => {
//   setCatergoriesValue(event.currentTarget.value)
// }

// const updateImages = (newImages) => {
//   setImages(newImages)
// }
//   return (
//     <div className="uploadpage">
//       <Homepage_Nav />
//       <div style={{maxWidth:'700px', margin:'2rem auto'}}>
//       <div style={{ textAlign:'center', marginBottom:'2rem'}}>
        
//         <h2>Upload product</h2>
//       </div>

//       <form onSubmit>
        
//         <ImageUpload  refreshFunction={updateImages} />

//         <br/>
//         <br/>
//         <label>Name</label>
//         <input onChange={onNameChange}
//         value={NameValue}
//         />

//         <br/>
//         <br/>
//         <label>Description</label>
//         <textarea onChange={onDescriptionChange} 
//         value={DescriptionValue}
//         />

//         <br/>
//         <br/>

//         {/* Use GoogleMap autocomplete for location */}
//         <label>Curb Location</label>
//         <input onChange={onLocationChange}
//         value={LocationValue}
//         />

//         <br/>
//         <br/>
//         <label>Category</label>
//         <select onChange={onCategoriesSelectChange}>

//           {Categories.map(item => (
//              <option key={item.key} value={CategoriesValue}>
//                {item.value}
//              </option>
//           ))}
         
//         </select>

//         <br/>
//         <br/>
//         <button 
//         onClick
//         >Submit

//         </button>



//       </form>
//     </div>
//     </div>
    
//   )
// }

// export default UploadProduct;

