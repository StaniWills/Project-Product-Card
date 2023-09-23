export const getProducts = (callback) => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(resp => resp.json())
      .then(json => callback(json))
  }
  
  export const addProduct = (body, callback) => {
    fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(json => callback(json))
  }
  
  // GET - получить информацию
  // POST - добавить информацию
  // PUT - изменить информацию
  // DELETE - удалить информацию