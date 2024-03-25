export class CreateLivestreamDto {
  cover: string;
  title: string;
  category: string;
  //   推流服务器地址
  url: string;
  //   推流码
  key: string;
  //   拉流ID
  roomId: string;
}
