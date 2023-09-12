// TODO: API定義書を参考に型定義すること
export type Prefecture = {
  prefCode: number
  prefName: string
}
// TODO: Prefecture型にインターセクション型を利用して、チェックボックスのbooleanも追加すること
export type PrefectureDisplay = Prefecture & {
  isCheck: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hoge: PrefectureDisplay = {
  prefCode: 1,
  prefName: "北海道",
  isCheck: true
}
