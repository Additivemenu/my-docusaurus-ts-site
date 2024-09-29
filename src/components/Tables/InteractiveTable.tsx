import React, { useState } from 'react';
import styles from './InteractiveTable.module.css';

type Person = {
  name: string;
  age: number;
};

const InteractiveTable: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && age) {
      setPeople([...people, { name, age: parseInt(age, 10) }]);
      setName('');
      setAge('');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formInputs}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
            />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Person
        </button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InteractiveTable;



// ! tailwind css is likely to overwrite the css styles in markdown
// import React, { useState } from "react";

// type Person = {
//   name: string;
//   age: number;
// };

// const InteractiveTable: React.FC = () => {
//   const [people, setPeople] = useState<Person[]>([]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (name && age) {
//       setPeople([...people, { name, age: parseInt(age, 10) }]);
//       setName("");
//       setAge("");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <form onSubmit={handleSubmit} className="mb-8 space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter name"
//               className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="age"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Age
//             </label>
//             <input
//               id="age"
//               type="number"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               placeholder="Enter age"
//               className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full md:w-auto px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
//         >
//           Add Person
//         </button>
//       </form>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Age
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {people.map((person, index) => (
//               <tr
//                 key={index}
//                 className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
//               >
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.age}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default InteractiveTable;