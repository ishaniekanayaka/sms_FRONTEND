import apiClient from "./apiClient"
import type { User } from "../types/User"

export interface SignUpResponse {
  _id: string
  name: string
  email: string
  role: "student" | "admin"
  phone: string
  address: string
  dateOfBirth: string
  profileImage: string
  isActive: boolean
  createdAt: string
}

export interface LoginResponse {
  _id: string
  name: string
  email: string
  accessToken: string
}

export interface LogoutResponse {
  message: string
}

// FormData should be constructed in frontend (for file upload support)
export const signUp = async (formData: FormData): Promise<SignUpResponse> => {
  const response = await apiClient.post("/auth/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
  return response.data
}

// loginData includes email and password only
export const login = async (
  loginData: Pick<User, "email" | "password">
): Promise<LoginResponse> => {
  const response = await apiClient.post("/auth/login", loginData)
  return response.data
}

export const logout = async (): Promise<LogoutResponse> => {
  const response = await apiClient.post("/auth/logout")
  return response.data
}
