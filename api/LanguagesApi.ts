import {apiFetch} from "~/config/axios/http";

export const LanguageApi = () => {
  const setLanguageByProfileAPI = async (
    profile_id: number | string,
    lang: string
  ) =>
    apiFetch.patch<any>(`/profileAdvance/${profile_id}`, {language: lang})

  return {
    setLanguageByProfileAPI
  }
}