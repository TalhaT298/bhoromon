/* eslint-disable no-unused-vars */


// const Home = () => {
//     const [inputText, setInputText] = useState('');
//     const [wordCount, setWordCount] = useState(0);

//     const handleInputChange = (e) => {
//         const text = e.target.value;
//         setInputText(text);
//         // Count words for plain text
//         const count = wordsCounter(text).wordsCount;
//         setWordCount(count);
//     };

//     return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        //     <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        //         <h1 className="text-2xl font-bold text-gray-800 mb-4">Word Count Application</h1>
        //         <textarea
        //             className="w-full h-40 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        //             placeholder="Type or paste your text here..."
        //             value={inputText}
        //             onChange={handleInputChange}
        //         />
        //         <div className="mt-4 text-lg text-gray-700">
        //             <strong>Word Count:</strong> {wordCount}
        //         </div>
        //     </div>
        // </div>
//     );
// };

// export default Home;
import React from 'react';

const Home = () => {
    return (
        <div>
            <p>This is Home</p>
        </div>
    );
};

export default Home;