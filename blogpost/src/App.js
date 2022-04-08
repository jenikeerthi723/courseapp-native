import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
// , secondsToMilliseconds
//import Login from './Login/Login';
import i18n from './i18n'
// import axios from 'axios';
import api from './api/posts'
import useWindowSize from './hooks/useWindowSize';
// import { DataProvider } from './context/DataContext';

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln); 
  }
}

function App() {
  // const [posts, setPosts] = useState([
    
  // ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { width } = useWindowSize();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPosts();
  }, [])

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody, image: postImage };
    try{
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostImage('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
    
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
    
  }

  // const handleDelete = (id) => {
  //   const postsList = posts.filter(post => post.id !== id);
  //   setPosts(postsList);
  //   navigate('/');
  // }

  return (
    <Routes>
      {/* <DataProvider> */}
      <Route path="/" element={
      <Layout
        search={search}
        setSearch={setSearch}
        changeLanguage={changeLanguage}
        width={width}
      />}
      >
      
      <Route index element={<Home posts={searchResults} />} />

      <Route path="post">

        <Route index element={<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postImage={postImage}
          setPostImage={setPostImage}
          postBody={postBody}
          setPostBody={setPostBody}
        />} />
        <Route path=":id" element={<PostPage
          posts={posts}
          handleDelete={handleDelete}
        />} />

      </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
      {/* </DataProvider> */}
    </Routes>
  );
}

export default App;