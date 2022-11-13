import axios from 'axios'


export default axios.create({

    baseURL:'https://api.unsplash.com' ,


    headers:{
        Authorization:'Client-ID pQr5uH9geOuzJYXx87Zni9tzYaOcaKZV9AvrjTPBeUI'
      }
  
})