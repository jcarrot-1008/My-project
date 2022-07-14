import Pagination from 'react-js-pagination'
import {PaginationBox} from './Styles/UtilStyles'
import {useState} from 'react'

const Page = (props) => {
    const [data, setData] = useState([]);
    const [items, setItems] = useState(5);
    const {quantity, total, page, setPage} = props;


    const handlePageChange = (page) => { setPage(page); };


  return (
    <div>
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={quantity}
          totalItemsCount={total ?? 0}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          >
        </Pagination>
      </PaginationBox>
    </div>
  )
}
 
export default Page;

