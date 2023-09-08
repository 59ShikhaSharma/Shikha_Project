// // // import React, { useState } from 'react';

// // // function TagFilter({ tags, filterMeals }) {
// // //   const [selectedTags, setSelectedTags] = useState([]);

// // //   const handleTagSelection = (tagId) => {
// // //     let updatedTags;
// // //     if (selectedTags.includes(tagId)) {
// // //       updatedTags = selectedTags.filter((tag) => tag !== tagId);
// // //     } else {
// // //       updatedTags = [...selectedTags, tagId];
// // //     }
// // //     setSelectedTags(updatedTags);
// // //     filterMeals(updatedTags); // Pass the updatedTags directly
// // //   };

// // //   return (
// // //     <div>
// // //       <h3>Tags</h3>
// // //       <ul>
// // //         {tags.map((tag) => (
// // //           <li key={tag.id}>
// // //             <label>
// // //               <input
// // //                 type="checkbox"
// // //                 value={tag.id}
// // //                 checked={selectedTags.includes(tag.id)}
// // //                 onChange={() => handleTagSelection(tag.id)}
// // //               />
// // //               {tag.label}
// // //             </label>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default TagFilter;


// // import React, { useState } from 'react';
// // import './TagFilter.css'; // Import your CSS file for styling

// // function TagFilter({ tags, filterMeals }) {
// //   const [selectedTags, setSelectedTags] = useState([]);

// //   const handleTagSelection = (tagId) => {
// //     let updatedTags;
// //     if (selectedTags.includes(tagId)) {
// //       updatedTags = selectedTags.filter((tag) => tag !== tagId);
// //     } else {
// //       updatedTags = [...selectedTags, tagId];
// //     }
// //     setSelectedTags(updatedTags);
// //     filterMeals(updatedTags); // Pass the updatedTags directly
// //   };

// //   return (
// //     <div className="tag-filter-container"> {/* Apply a CSS class for styling */}
// //       <h3>Tags</h3>
// //       <ul>
// //         {tags.map((tag) => (
// //           <li key={tag.id}>
// //             <label className="tag-label"> {/* Apply a CSS class for styling */}
// //               <input
// //                 type="checkbox"
// //                 value={tag.id}
// //                 checked={selectedTags.includes(tag.id)}
// //                 onChange={() => handleTagSelection(tag.id)}
// //               />
// //               {tag.label}
// //             </label>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default TagFilter;


// import React, { useState } from 'react';
// import './TagFilter.css'; // Import your CSS file for styling

// function TagFilter({ tags, filterMeals }) {
//   const [selectedTags, setSelectedTags] = useState([]);

//   const handleTagSelection = (tagId) => {
//     let updatedTags;
//     if (selectedTags.includes(tagId)) {
//       updatedTags = selectedTags.filter((tag) => tag !== tagId);
//     } else {
//       updatedTags = [...selectedTags, tagId];
//     }
//     setSelectedTags(updatedTags);
//     filterMeals(updatedTags); // Pass the updatedTags directly
//   };

//   return (
//     <div className="tag-filter-container"> {/* Apply a CSS class for styling */}
//       <h3>Tags</h3>
//       <ul className="tag-list"> {/* Apply a CSS class for styling */}
//         {tags.map((tag) => (
//           <li key={tag.id} className="tag-item"> {/* Apply a CSS class for styling */}
//             <label className="tag-label"> {/* Apply a CSS class for styling */}
//               <input
//                 type="checkbox"
//                 value={tag.id}
//                 checked={selectedTags.includes(tag.id)}
//                 onChange={() => handleTagSelection(tag.id)}
//               />
//               {tag.label}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TagFilter;


// import React, { useState } from 'react';
// import './TagFilter.css'; // Import your CSS file for styling

// function TagFilter({ tags, filterMeals }) {
//   const [selectedTags, setSelectedTags] = useState([]);

//   const handleTagSelection = (tagId) => {
//     let updatedTags;
//     if (selectedTags.includes(tagId)) {
//       updatedTags = selectedTags.filter((tag) => tag !== tagId);
//     } else {
//       updatedTags = [...selectedTags, tagId];
//     }
//     setSelectedTags(updatedTags);
//     filterMeals(updatedTags); // Pass the updatedTags directly
//   };

//   return (
//     <div className="tag-filter-container"> {/* Apply a CSS class for styling */}
//       <h3>Tags</h3>
//       <ul className="tag-list"> {/* Apply a CSS class for styling */}
//         {tags.map((tag) => (
//           <li key={tag.id} className="tag-item"> {/* Apply a CSS class for styling */}
//             <label className={`tag-label ${selectedTags.includes(tag.id) ? 'selected' : ''}`}>
//               {/* Apply a CSS class for styling based on selection */}
//               <input
//                 type="checkbox"
//                 value={tag.id}
//                 checked={selectedTags.includes(tag.id)}
//                 onChange={() => handleTagSelection(tag.id)}
//               />
//               {tag.label}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TagFilter;


import React, { useState } from 'react';
import './TagFilter.css'; // Import your CSS file for styling

function TagFilter({ tags, filterMeals }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (tagId) => {
    let updatedTags;
    if (selectedTags.includes(tagId)) {
      updatedTags = selectedTags.filter((tag) => tag !== tagId);
    } else {
      updatedTags = [...selectedTags, tagId];
    }
    setSelectedTags(updatedTags);
    filterMeals(updatedTags); // Pass the updatedTags directly
  };

  return (
    <div className="tag-filter-container"> {/* Apply a CSS class for styling */}
      <h3>Tags</h3>
      <ul className="tag-list"> {/* Apply a CSS class for styling */}
        {tags.map((tag) => (
          <li key={tag.id} className={`tag-item ${selectedTags.includes(tag.id) ? 'selected' : ''}`}>
            {/* Apply a CSS class for styling based on selection */}
            <label className="tag-label" onClick={() => handleTagSelection(tag.id)}>
              {tag.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagFilter;
