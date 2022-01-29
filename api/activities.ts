import { useState, useEffect } from 'react'
import { createAxiosInstance } from './config'

export const createActivity = async (input: any) => {
  const res = await createAxiosInstance().post('activities', input)
  const { data } = res
  return data
}

export const useFetchActivities = (reload: number) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`activities`)
        .then((res) => {
          setData(res.data)
        })
    }
    fetchData()
  }, [reload])
  return data
}

export const useFetchSearchActivities = (reload: number, name: string) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`activities/search/${name}`)
        .then((res) => {
          setData(res.data)
        })
    }
    async function fetchFullData() {
      createAxiosInstance()
        .get(`activities`)
        .then((res) => {
          setData(res.data)
        })
    }
    name !== '' ? fetchData() : fetchFullData()
  }, [reload, name])
  return data
}

export const useFetchActivity = (reload: number, id: string | string[]) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`activities/${id}`)
        .then((res) => {
          setData(res.data)
        })
    }
    fetchData()
  }, [reload, id])
  return data
}

export const useFetchActivityByAlias = (
  alias: string | string[] | undefined
) => {
  const [data, setData] = useState([] as any)
  useEffect(() => {
    async function fetchData() {
      createAxiosInstance()
        .get(`activities/alias/${alias}`)
        .then((res) => {
          setData(res.data)
        })
    }
    alias && fetchData()
  }, [alias])
  return data
}
