const  products = [
    {
      "id": 1,
      "name": "Beer",
      "urlRepresentation": "beer",
      "description": "One Beer a day keeps the doctor away.",
      "enabled": true
    },
    {
      "id": 2,
      "name": "Wine",
      "urlRepresentation": "wine",
      "description": "Wine is an alcoholic beverage made from fermented grapes.",
      "enabled": true
    },
    {
      "id": 3,
      "name": "Chocolate",
      "urlRepresentation": "chocolate",
      "description": "Indulge in the sweetness of chocolates.",
      "enabled": true
    },
    {
      "id": 4,
      "name": "Coffee",
      "urlRepresentation": "coffee",
      "description": "Start your day with a cup of coffee.",
      "enabled": true
    },
    {
      "id": 5,
      "name": "Tea",
      "urlRepresentation": "tea",
      "description": "A soothing drink to relax your mind.",
      "enabled": true
    },
    {
      "id": 6,
      "name": "Pizza",
      "urlRepresentation": "pizza",
      "description": "Everyone loves a slice of pizza.",
      "enabled": true
    },
    {
      "id": 7,
      "name": "Burger",
      "urlRepresentation": "burger",
      "description": "Juicy and delicious burgers for foodies.",
      "enabled": true
    },
    {
      "id": 8,
      "name": "Ice Cream",
      "urlRepresentation": "ice-cream",
      "description": "Beat the heat with ice cream.",
      "enabled": true
    },
    {
      "id": 9,
      "name": "Fruits",
      "urlRepresentation": "fruits",
      "description": "Healthy and refreshing fruits.",
      "enabled": true
    },
    {
      "id": 10,
      "name": "Laptop",
      "urlRepresentation": "laptop",
      "description": "Powerful laptops for all your needs.",
      "enabled": true
    },
    {
      "id": 11,
      "name": "Smartphone",
      "urlRepresentation": "smartphone",
      "description": "Stay connected with the latest smartphones.",
      "enabled": true
    },
    {
      "id": 12,
      "name": "Camera",
      "urlRepresentation": "camera",
      "description": "Capture beautiful moments with high-quality cameras.",
      "enabled": true
    }
  ]

const  cities = [
      {
        "id": 1,
        "name": "Berlin",
        "urlRepresentation": "berlin",
        "description": "Berlin is the capital of Germany.",
        "enabled": true
      },
      {
        "id": 2,
        "name": "Munich",
        "urlRepresentation": "munich",
        "description": "Munich is a beautiful city in Germany.",
        "enabled": true
      },
      {
        "id": 3,
        "name": "New York",
        "urlRepresentation": "new-york",
        "description": "New York is the city that never sleeps.",
        "enabled": true
      },
      {
        "id": 4,
        "name": "London",
        "urlRepresentation": "london",
        "description": "London is the capital city of the United Kingdom.",
        "enabled": true
      },
      {
        "id": 5,
        "name": "Paris",
        "urlRepresentation": "paris",
        "description": "Paris is the city of love.",
        "enabled": true
      },
      {
        "id": 6,
        "name": "Tokyo",
        "urlRepresentation": "tokyo",
        "description": "Tokyo is the bustling capital of Japan.",
        "enabled": true
      },
      {
        "id": 7,
        "name": "Sydney",
        "urlRepresentation": "sydney",
        "description": "Sydney is the iconic city in Australia.",
        "enabled": true
      },
      {
        "id": 8,
        "name": "Rio de Janeiro",
        "urlRepresentation": "rio-de-janeiro",
        "description": "Rio de Janeiro is the vibrant city in Brazil.",
        "enabled": true
      },
      {
        "id": 9,
        "name": "Cape Town",
        "urlRepresentation": "cape-town",
        "description": "Cape Town is the beautiful city in South Africa.",
        "enabled": true
      },
      {
        "id": 10,
        "name": "Dubai",
        "urlRepresentation": "dubai",
        "description": "Dubai is the futuristic city in the United Arab Emirates.",
        "enabled": true
      },
      {
        "id": 11,
        "name": "Singapore",
        "urlRepresentation": "singapore",
        "description": "Singapore is the city of modern marvels.",
        "enabled": true
      },
      {
        "id": 12,
        "name": "Buenos Aires",
        "urlRepresentation": "buenos-aires",
        "description": "Buenos Aires is the passionate city in Argentina.",
        "enabled": true
      }
    ]  

   const brochures = [
              {
                  "id": 111111,
                  "long": "100",
                  "lat": "100",
                  "title": "Beer",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508662,
                  "long": "100",
                  "lat": "100",
                  "title": "Wine",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508663,
                  "long": "100",
                  "lat": "100",
                  "title": "Beer",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508664,
                  "long": "100",
                  "lat": "100",
                  "title": "Beer",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "long": "100",
                  "lat": "100",
                  "title": "Chocolate",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508665,
                  "long": "100",
                  "lat": "100",
                  "title": "Coffee",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "long": "100",
                  "lat": "100",
                  "title": "Tea",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508666,
                  "long": "100",
                  "lat": "100",
                  "title": "Pizza",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508667,
                  "long": "100",
                  "lat": "100",
                  "title": "Burger",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508668,
                  "long": "100",
                  "lat": "100",
                  "title": "Ice Cream",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508669,
                  "long": "100",
                  "lat": "100",
                  "title": "Fruits",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508670,
                  "long": "100",
                  "lat": "100",
                  "title": "Laptop",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508671,
                  "long": "100",
                  "lat": "100",
                  "title": "Smartphone",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508672,
                  "long": "100",
                  "lat": "100",
                  "title": "Camera",
                  "contentId": "dc4bfbcc-...",
                  "validFrom": "2021-04-01T00:00:00",
                  "validUntil": "2021-05-14T23:00:00",
                  "rank": 1.0,
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  },
                  "publisher": {
                      "id": "410369225",
                      "name": "Xooon",
                      "publisherType": "RETAILER",
                      "logo": {
                          "thumbnails": "https://...jpg?policy=thumbnails",
                          "normal": "https://...jpg?policy=320x480",
                          "large": "https://...jpg?policy=768x1024"
                      }
                  },
                  "page": 0,
                  "type": "BROCHURE",
                  "publishedFrom": "2021-04-03T23:00:00.000+0000",
                  "publishedUntil": "2021-05-14T21:00:00.000+0000",
                  "_links": {
                      "self": {
                          "href": "https://.../webapp/viewer/508661492..."
                      }
                  }
              },
              {
                  "id": 508673,
                  "long": "100",
                  "lat": "100",
                  "title": "Camera",
                  "brochureImages": {
                      "thumbnails": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/NCI_Visuals_Food_Beer.jpg/1200px-NCI_Visuals_Food_Beer.jpg",
                      "normal": "https://...jpg?policy=320x480",
                      "large": "https://...jpg?policy=768x1024"
                  }
              }
          ]


  
    module.exports = { cities, products, brochures };