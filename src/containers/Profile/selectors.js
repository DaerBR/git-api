export const userDataSelect = (rawData) => {
    return {
        'login': rawData.login,
        'imgUrl': rawData.avatar_url,
        'profileUrl': rawData.html_url,
        'name': rawData.name,
        'company': rawData.company,
        'email': rawData.email,
        'bio': rawData.bio,
        'location': rawData.location,
        'created': new Date(Date.parse(rawData.created_at,)).toLocaleDateString(),
        'latestUpdate': new Date(Date.parse(rawData.updated_at,)).toLocaleDateString(),
        'puplicReposNumber': rawData.public_repos,
        'followers': rawData.followers,
        'following': rawData.following,
    }

}
