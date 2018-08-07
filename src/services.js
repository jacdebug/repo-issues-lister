const fetchJson = async ({ url }) => {
  const response = await fetch(url);
  return await response.json();
};

export const getRepos = async () =>
  await fetchJson({ url: "https://api.github.com/orgs/nodejs/repos" });

export const getIssues = async repo =>
  await fetchJson({
    url: `https://api.github.com/repos/nodejs/${repo}/issues?state=open`
  });
