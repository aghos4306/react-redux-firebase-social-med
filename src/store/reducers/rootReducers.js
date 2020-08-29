const currentTime = new Date();

const initialState = {
  posts: [
    { id: 'first', title: '1. sample title', content: '1. sample content', time: currentTime },
    { id: 'first', title: '2. sample title', content: '2. sample content', time: currentTime },
    { id: 'first', title: '3. sample title', content: '3. sample content', time: currentTime },
    { id: 'first', title: '4. sample title', content: '4. sample content', time: currentTime },
    { id: 'first', title: '5. sample title', content: '5. sample content', time: currentTime },
    { id: 'first', title: '6. sample title', content: '6. sample content', time: currentTime },
    { id: 'first', title: '7. sample title', content: '7. sample content', time: currentTime },
  ],
};

const rootReducers = (state = initialState, action) => {
  return state;
};

export default rootReducers;
