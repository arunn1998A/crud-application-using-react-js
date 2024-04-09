import { commonAPI } from "./commonAPI"
import { SERVER_URL } from './server_url';

// upload a image in http://localhost:3000
export const uploadImageAIP= async (bloges)=>{
  return  await commonAPI("POST",`${SERVER_URL}/allBloges`,bloges)
}
// get all bloges in http://localhost:3000
export const getAllBlogesAIP= async ()=>{
  return await commonAPI("GET",`${SERVER_URL}/allBloges`,"")
}
// removie bloges
export const removeBlogesAPI= async (videoId)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/allBloges/${videoId}`,{})
}