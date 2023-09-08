import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
// import allodata from '../json data/allo-fullstack-AssignmentDataset .json'

function FoodPreview({ data, itemsPerPage }) {





    // const [offset, setOffset] = useState(1);
    // const [data, setData] = useState([]);
    // const [perPage] = useState(5);
    // const [pageCount, setPageCount] = useState(0);


    // const getData = async () => {
    //     const res = await axios.get(jsonData.labels)
    //     console.log(res[0]);
    //     // const data = res.data;
    //     const slice = res.slice(offset, offset + perPage)

    //     const postData = slice.map(pd => <div key={pd.id}>
    //         <p>{pd.labels.id}</p>
    //         {/* <img src={pd.thumbnailUrl} alt="" /> */}
    //     </div>)
    //     setData(postData)
    //     setPageCount(Math.ceil(data.length / perPage))
    // }

    // useEffect(() => {
    //     getData();
    // }, [offset])

    // const handlePageClick = (e) => {
    //     const selectedPage = e.selected;
    //     setOffset(selectedPage + 1)
    // };






    // return (
    //     <>

    //         <div className="App">
    //             {data}
    //             <ReactPaginate
    //                 previousLabel={"prev"}
    //                 nextLabel={"next"}
    //                 breakLabel={"..."}
    //                 breakClassName={"break-me"}
    //                 pageCount={pageCount}
    //                 marginPagesDisplayed={2}
    //                 pageRangeDisplayed={5}
    //                 onPageChange={handlePageClick}
    //                 containerClassName={"pagination"}
    //                 subContainerClassName={"pages pagination"}
    //                 activeClassName={"active"} />
    //         </div>

    //     </>
    // )

    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    // const itemsPerPage=10;
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentData(data.slice(startIndex, endIndex));
    }, [data, currentPage, itemsPerPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    console.log(data);
    console.log(itemsPerPage);

    return (
        <div>
            {currentData.map((item, index) => (
                <div key={index}>{item.id}</div>
                /* Replace 'name' with your data property */
            ))}
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default FoodPreview;