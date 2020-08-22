export const getJoke = async () => {

    let res = await fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        });
    
        const json = await res.json();

    return json;
}