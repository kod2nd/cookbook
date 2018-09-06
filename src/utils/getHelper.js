export const API_KEY = process.env.REACT_APP_FORK_2_FORK_API_KEY

export const URL = (apiKey,searchParams) => {
    return `https://www.food2fork.com/api/search?key=${apiKey}&q=${searchParams}`
} 