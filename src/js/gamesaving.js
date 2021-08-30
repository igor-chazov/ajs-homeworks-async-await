export default class GameSaving {
  constructor(id, created, userId, userName, userLevel, userPoints) {
    this.id = id;
    this.created = created;
    this.userInfo = {};
    this.userInfo.id = userId;
    this.userInfo.name = userName;
    this.userInfo.level = userLevel;
    this.userInfo.points = userPoints;
  }
}
