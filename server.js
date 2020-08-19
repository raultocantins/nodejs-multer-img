const express=require('express')
const multer=require('multer')
var upload = multer({ dest: './uploads' })
const app=express()
app.use(express.static('.'))
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send('Imagem salva na Pasta Upload com sucesso!!!')
     console.log(req.file)
     })
app.listen(3000,()=>{
    console.log('Server on.')
})