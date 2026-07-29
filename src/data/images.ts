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
  serviceHealthcare: unsplash("1576091160399-112ba8d25d1d"),
  serviceAiLlm: unsplash("1454165804606-c3d57bc86b40"),
  serviceB2bUx: unsplash("1552581234-26160f608093"),
  serviceBrand: unsplash("1600880292203-757bb62b4baf"),
  serviceSustainability: unsplash("1473341304170-971dccb5ac1e"),
  serviceFieldwork: unsplash("1519389950473-47ba0277781c"),
  avatarMan1: unsplash("1560250097-0b93528c311a", 200),
  avatarMan2: unsplash("1500648767791-00dcc994a43e", 200),
  avatarWoman1: unsplash("1494790108377-be9c29b29330", 200),
  pageHeaderAbout: unsplash("1522071820081-009f0129c71c", 1600, 75),
  pageHeaderServices: unsplash("1551288049-bebda4e38f71", 1600, 75),
  pageHeaderContact: unsplash("1580927752452-89d86da3fa0a", 1600, 75),
  pageHeaderJoinPanel: unsplash("1600880292203-757bb62b4baf", 1600, 75),
};
