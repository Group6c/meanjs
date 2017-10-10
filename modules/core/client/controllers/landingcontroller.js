app.use(function (req, res, next) {
  res.removeHeader("x-powered-by");
  next();
});

app.disable('x-powered-by');

$http( {
         method: 'GET',
         url: '/',
         headers: {
           'X-API-TOKEN': undefined
         }
       }
     )
