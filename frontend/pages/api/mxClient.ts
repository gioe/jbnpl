export const searchInstitutions = (searchTerm: string) => {
    return fetch(`${process.env.API_URL}/mx/institution/${searchTerm}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}
