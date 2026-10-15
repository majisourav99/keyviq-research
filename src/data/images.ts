function unsplash(id: string, w = 1200, q = 75) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  heroDashboard: unsplash("1551288049-bebda4e38f71", 1600, 75),
  heroSecurity: unsplash("1580927752452-89d86da3fa0a", 1600, 75),
  heroTeam: unsplash("1522071820081-009f0129c71c", 1600, 75),
  about: unsplash("1522071820081-009f0129c71c", 1000),
  successHighFive: unsplash("1600880292203-757bb62b4baf", 1000),
  earthAtNight: unsplash("1451187580459-43490279c0fa", 1600, 75),
  serviceAiLlm: unsplash("1454165804606-c3d57bc86b40"),
  serviceB2bUx: unsplash("1552581234-26160f608093"),
  serviceBrand: unsplash("1600880292203-757bb62b4baf"),
  serviceSustainability: unsplash("1473341304170-971dccb5ac1e"),
  serviceFieldwork: unsplash("1519389950473-47ba0277781c"),
  pageHeaderAbout: unsplash("1522071820081-009f0129c71c", 1600, 75),
  pageHeaderServices: unsplash("1551288049-bebda4e38f71", 1600, 75),
  pageHeaderContact: unsplash("1580927752452-89d86da3fa0a", 1600, 75),
  pageHeaderJoinPanel: unsplash("1600880292203-757bb62b4baf", 1600, 75),
};
