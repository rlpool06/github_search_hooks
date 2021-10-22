export async function getAllUsers() {

    try {
        const data = await fetch('https://api.github.com/users');
        return await data.json();
    }catch(error) {
        return [];
    }
}