export const reposDataSelect = (rawData) => {
    let selectedReposData = [];
    if (rawData.length > 0) {
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
                'commitsURL': repo.commits_url,
                'details': null
            }
        });
    }
    return selectedReposData;
}


