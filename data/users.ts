const savedUsers = [
    {
        email: "hk@gmail.com",
        password: "123456"
    },
    {
        email: "hk12@gmail.com",
        password: "12345612"
    }
]

export const getUserFromDb = (email: unknown) => {
    const found = savedUsers.find(savedUser => savedUser.email === email)
    return found;
}