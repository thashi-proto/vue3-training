import { Population } from "@/types/population"
import { Prefecture } from "@/types/prefecture"

// RESAS API返却型基本形
export type ResasApiResponse<S> = {
  message: string
  result: S
}

// 県一覧取得
export type PrefectureResponse = ResasApiResponse<Prefecture[]>
// 人口取得
export type PopulationResponse = ResasApiResponse<{
  boundaryYear: number
  data: {
    label: "" // TODO: ユニオン型で型定義すること
    data: Population[]
  }[]
}>
