// const {username, password}= process.env
// export const connectionString ="mongodb+srv://"+username+":"+password+"@testcluster.8fvr52k.mongodb.net/productDB?retryWrites=true&w=majority&appName=testCluster";

//dynamic username, password
//added db name i.e productDB after net/

const {username, password}= process.env
export const connectString =
  "mongodb+srv://"+username+":"+password+"@testcluster.8fvr52k.mongodb.net/productDB?retryWrites=true&w=majority&appName=testCluster";