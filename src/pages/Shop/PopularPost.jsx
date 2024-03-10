
import { Link } from "react-router-dom";

const title = "Most Popular Post";

const postList = [
    {
        id:1,
        imgUrl: '/src/assets/images/blog/10.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id:2,
        imgUrl: '/src/assets/images/blog/11.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id:3,
        imgUrl: '/src/assets/images/blog/12.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id:4,
        imgUrl: '/src/assets/images/blog/09.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
]

const PopularPost = () => {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {postList.map((blog, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}><img src={`${blog.imgUrl}`} alt={`${blog.imgAlt}`} /></Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${blog.id}`}><h6>{blog.title}</h6></Link>
                            <p>{blog.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PopularPost;