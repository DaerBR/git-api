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

export const reposDataSelect = (rawData) => {
    let selectedReposData = [];
    rawData.forEach((repo, index) => {
        selectedReposData[index] = {
            'name': repo.name,
            'created': new Date(Date.parse(repo.created_at,)).toLocaleDateString(),
            'latestUpdate': new Date(Date.parse(repo.updated_at,)).toLocaleDateString(),
            'url': repo.html_url,
            'defaultBranch': repo.default_branch,
            'language': repo.language,
            'isPrivate': repo.private,
            'ownerLogin': repo.owner.login,
            'ownerURL': repo.owner.html_url,
            'branchesURL': repo.branches_url,
            'commitsURL': repo.commits_url
        }
    });
    return selectedReposData;

}


