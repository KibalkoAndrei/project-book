import './App.css';
import React, { useMemo } from 'react';
import Header from './components/header/Header';
import { useState } from 'react';
import PostList from './components/post-block/post-list/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id:'1', title: 'Heroku Tamahur', body: 'A ekll fdbg fwefwefA ekll fdbg fwefwefA ekll fdbg fwefwefA ekll fdbg fwefwefA ekll fdbg fwefwefA ekll fdbg fwefwefA ekll fdbg fwefwefA ekll fdbg fwefwef', description: 'css'},
    {id:'2', title: 'Heroku Tamahu', body: 'A ekll fdbg fwefwef', description: 'css'},
    {id:'3', title: 'Heroku Tamah', body: 'A ekll fdbg fwefwef', description: 'css'},
    {id:'4', title: 'Heroku Tama', body: 'A ekll fdbg fwefwef', description: 'html'},
    {id:'5', title: 'Herok Tamahuri', body: 'A ekll fdbg fwefwef', description: 'js'},
    {id:'6', title: 'Herku Tamahuri', body: 'A ekll fdbg fwefwef', description: 'css'},
    {id:'7', title: 'Hroku Tamahuri', body: 'A ekll fdbg fwefwef', description: 'html'},
    {id:'8', title: 'eroku Tamahuri', body: 'A ekll fdbg fwefwef', description: 'html'},
    {id:'9', title: 'vvv', body: 'A ekll fdbg fwefwef', description: 'aaa'},
    {id:'9', title: 'bbb', body: 'A ekll fdbg fwefwef', description: 'bbb'},
    {id:'9', title: 'aaa', body: 'A ekll fdbg fwefwef', description: 'vvv'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');



  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[setSelectedSort]))
    }
    return posts
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => { 
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
      setSelectedSort(sort);

  } 
  console.log(sortedAndSearchPosts)

  return (
    <div className="App">
      <Header 
        valueOption={selectedSort}
        onChangeOption={sortPosts}
        valueInput={searchQuery}
        onChangeInput={setSearchQuery}>
      </Header>
      <PostList posts={sortedAndSearchPosts}> </PostList>
    </div>
  );
}

export default App;
