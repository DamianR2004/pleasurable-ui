// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function() {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


app.get('/', function(request, response) {
	response.render('homepage')
});

app.get('/lijsten', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
        console.log(apiData.data)
        response.render('lijsten.ejs', {data: apiData.data})
	});
	
})

app.get('/rating', function (request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
      console.log(apiData.data)
      response.render('lijsten.ejs', {data: apiData.data})
  });
})

app.get('/lijst', function (request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/f_list').then((apiData) => {
      console.log(apiData.data)
      response.render('lijsten.ejs', {data: apiData.data})
  });
})

app.get('/house', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_houses').then((apiData) => {
        console.log(apiData.data)
        response.render('ratings', {data: apiData.data})
	});
})

app.get('/lijsten/:id', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_list/' + request.params.id + '?fields=*.*.*,houses.f_houses_id.poster_image.id,houses.f_houses_id.poster_image.width,houses.f_houses_id.poster_image.height').then((apiData) => {
        response.render('lijst.ejs', {list: apiData.data})  
        // console.log(apiData.data.houses) 
    })
  })

  app.get('/notes', function (request, response) {
    Promise.all([
      fetchJson('https://fdnd-agency.directus.app/items/f_users/'),
      fetchJson('https://fdnd-agency.directus.app/items/f_list/')
    ]).then(([userData, listData]) => {
      response.render('notes', {data: userData.data, lists: listData.data});
    });
  });

  app.get('/details/:house_id', function (request, response) {
    fetchJson('https://fdnd-agency.directus.app/items/f_houses/' + request.params.id + '?fields=*.*.*,houses.f_houses_id.poster_image.id,houses.f_houses_id.poster_image.width,houses.f_houses_id.poster_image.height').then((apiData) => {
        response.render('details.ejs', {house: apiData.data})  
        // console.log(apiData.data.houses) 
    })
  })
  

app.get('/ratings/:list_id/:house_id', function (request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/f_users/').then((userData) => {
    console.log(userData)
      response.render('ratings', {
        data: userData.data,
        list_id: request.params.list_id,
        house_id: request.params.house_id
      })
  });
})


app.get('/rating', function (request, response) {
  fetchJson('https://fdnd-agency.directus.app/items/f_users/').then((userData) => {
    console.log(userData)
      response.render('rating', {data: userData.data})
  });
});


app.post('/ratings/:list_id/:house_id', function(request, response) {
  let body = JSON.stringify({
    house: request.params.house_id,
    list: request.params.list_id,
    user: 3,
    rating: JSON.stringify(request.body.rating),
    note: request.body.notities
  })

  fetchJson('https://fdnd-agency.directus.app/items/f_feedback',{
    method: 'POST',
    body: body,
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
    },
  }).then((postResponse) => {
    console.log(3, postResponse);
    response.redirect(303, '/lijst')
  })
})