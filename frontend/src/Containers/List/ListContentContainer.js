import PostList from '../../Components/List/PostList';
import SortPost from '../../Components/List/SortPost';
import { useSelector } from 'react-redux';

const ListContentContainer = ({postData, category}) => {
   
    
    return (
        <div className="mx-auto min-h-screen max-w-main">
            <SortPost />
            <div className="px-[16px] md:px-0">
                <ul className="col-span-full flex flex-col">
                    <PostList postData={postData} category={category}/>
                </ul>
            </div>
        </div>
    );
};

export default ListContentContainer;
