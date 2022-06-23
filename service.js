const fs = require('fs')
module.exports ={
    getIndex:(req,res)=>{
        res.json({
            result:true,
            data:[],
            info:'恭喜你进入vercel'
        })
    },
    getMusicList:(req,res)=>{
        res.json({
            result:true,
            data:[]
        })
        // fs.readdir(__dirname + '/public',(error,list)=>{
        //     if(error){
        //         res.send(error)
        //         throw error
        //     }else{
        //         res.json({
        //             result:true,
        //             data:list
        //         })
        //     }
        // })
        
    }
}
