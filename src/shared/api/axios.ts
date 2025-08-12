import axios from 'axios'
import { BASE_URL } from '@/shared/config/api'

export const api = axios.create({ baseURL: BASE_URL })
