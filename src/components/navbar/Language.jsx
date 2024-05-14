// import { useEffect, useState } from "react";
// import lanAtoms from "../../store/atoms/lanAtoms";
// // import { useSetRecoilState } from "recoil";
// import axios from "axios";
// 
// const Language = () => {
//   const [value, setValue] = useState("en");
//   const [vL,etLan] = useSetRecoilState(lanAtoms);
// 
//   useEffect(() => {
//     const getLanguage = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3000/api/v1/language/get-lan/${value}`,
//         );
//         const data = res.data;
//         setLan(data);
//       } catch (error) {
//         console.error("Error fetching language:", error);
//       }
//     };
//     getLanguage();
//   }, []);
// 
//   return (
//     <div>
//       <select
//         name="Language"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       >
//         <option value="en">English</option>
//         <option value="mal">Malayalam</option>
//       </select>
//     </div>
//   );
// };
// 
// export default Language;
