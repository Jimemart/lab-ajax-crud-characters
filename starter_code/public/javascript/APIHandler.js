class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
    return $.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (characterInfo) {
return $.post(`${this.BASE_URL}/characters`,{
  name : characterInfo.name,
  occupation : characterInfo.occupation, 
  weapon : characterInfo.weapon,
  debt :characterInfo.debt
})
  }

  updateOneRegister (id, character) {
    $.ajax({
      method : 'PATCH',
      url: `${this.BASE_URL}/characters/${id}`,
      data: character,
      succes: function(){
        console.log("success")
      },
      error: function(err){
        console.log(err)
      }
    })
  }

  deleteOneRegister (id) {
    $.ajax({
      url:`${this.BASE_URL}/characters/${id}`,
      method:'DELETE',
      success : function(){
        console.log("success")
      },
      error : function(err){
        console.log(err)
      }
    })
  }
}
