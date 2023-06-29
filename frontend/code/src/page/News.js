import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper'
import { API } from "../api/axios";
import { useCallback, useEffect, useState } from "react";
import NewsList from "./NewsList";
import LoadingPage from "./LoadingPage";

function News() {
  SwiperCore.use([Autoplay]);

  const [category_list, setCategoryList] = useState([]);
  const [page_num, setPageNum] = useState(1);
  const [card_list, setCardList] = useState([]);
  const [news_id, setNewsID] = useState(null);
  // const [news_data, setNewsData] = useState({});
  // const [tags, setTags] = useState([]);
  const [featured_news_list, setFeaturedNewsList] = useState([]);
  const [is_loading, setIsLoading] = useState(true);
  const getData = useCallback(async () => {

    const post_list_response = await API.get(`post/?search=&page=${page_num}&lang_id=${localStorage.getItem('lang_id')}`);
    if (post_list_response.status === 200) {
      setCardList(post_list_response.data.results);
      setPageNum(post_list_response.data.current_page);
    }

    const category_list_response = await API.get(`category/?lang_id=${localStorage.getItem('lang_id')}`);
    if (category_list_response.status === 200) {
      setCategoryList(category_list_response.data);
    }
    const featured_posts_response = await API.get(`featured/posts?lang_id=${localStorage.getItem('lang_id')}`);
    if (featured_posts_response.status === 200) {
      setFeaturedNewsList(featured_posts_response.data);
    }
    setIsLoading(false);
  }, [news_id, page_num])
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setNewsID(urlParams.get('id'));
    getData();
  }, []);
  // const news_header_component = (
  //   <Container>
  //     <Image src={SwiperSlide1} fluid />

  //     {/* <Image src={news_data.image_thumbnail} fluid/> */}

  //     <div className="pt-4">
  //       <div className="d-flex">
  //         {
  //           tags.map((tag, tg_index) => (
  //             <Button className="px-4 pt-1 pb-1 bg-prime-weak border-none font-weight-bold" key={tg_index}>
  //               {tag.name}
  //             </Button>
  //           ))
  //         }
  //       </div>
  //       <h1 className="title m-0 p-0">{news_data.title}</h1>
  //     </div>
  //   </Container>
  // )
  return (
    <div>
      {
        is_loading ? <LoadingPage/> : ''
      }
      <NewsList card_list={card_list} category_list={category_list} featured_card_list={featured_news_list} />
    </div>
  );
}
export default News;