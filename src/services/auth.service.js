import api from './api.service'

//call api for login
export const login = (data) => api.post('/auth/login', data)

//call api for register
export const register = (data) => api.post('/auth/register', data)

//call api for change password
export const changePassword = (data) => api.post('/user/changePassword', data)

//call api for forget password
export const forgotPassword = (data) => api.post('/auth/forgotPassword', data)

//call api for verify email
export const verifyEmail = (code) => api.get('/auth/checkVerification' , { params: { guid: code } });

//call api to reset password
export const resetPassword = (data) => api.post('/auth/resetPassword', data)

//call api for get iamge uploading urls
export const getUploadImageUrl = (data) => api.get('/image/presigned-url',data)

//call api for pass iamge upload data
export const uploadImage = (data) => api.post('/image',data)

//call api for retrieving Zip file
export const getZipURL = (id) => api.get(`/image/zip/${id}`)

//get user details
export const getUserDetails = () => api.get('/user')

//get user uploaded images
export const getUploadedImages = () => api.get('/image')

//get data of image
export const getImageData = (id) => api.get(`image/${id}`)

