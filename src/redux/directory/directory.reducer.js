const INITIAL_STATE = [
  {
    title: 'sneakers',
    imageUrl:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1240&q=60',
    id: 3,
    size: 'large',
    linkUrl: 'shoes',
    category: 'shoes',
  },
  {
    title: 'HeadPhones',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1240&q=60',
    size: 'large',
    id: 4,
    linkUrl: 'headphones',
    category: 'headphones',
  },
  {
    title: "men's",
    imageUrl:
      'https://images.unsplash.com/photo-1603252109612-24fa03d145c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=60',
    size: 'large',
    id: 5,
    linkUrl: 'shirt',
    category: '',
  },
]

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default DirectoryReducer
