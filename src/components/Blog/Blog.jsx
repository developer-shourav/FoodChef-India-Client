
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Blog = ({questions}) => {

    return (
        <div className='grid grid-cols-1 gap-4'>
            {/* ------Single Blog --------- */}
            {
                questions?.map( questionItem => <SingleQuestion questionData = {questionItem} key ={questionItem?.question}> </SingleQuestion>)
            }
        </div>
    );
};

export default Blog;