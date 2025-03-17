import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import { useState, useEffect } from "react";

const TableUserPaginate = (props) => {
    const { listUsers, pageCount } = props;
    const handlePageClick = (event) => {
        props.fetchListUserWithPaginate(+event.selected + 1);
        console.log(`User requested page number ${event.selected}`);
    };

    return (
        <>
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actice</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3"
                                            onClick={() => {
                                                props.handleClickBtnUpdate(item)
                                            }}>
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                props.handleClickBtnDelete(item)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUsers && listUsers.length === 0 &&
                        <td colSpan={'4'}>
                            Not found data
                        </td>
                    }
                </tbody>
            </table >
            <div className="user-paginate">
                <ReactPaginate
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    )
}
export default TableUserPaginate;