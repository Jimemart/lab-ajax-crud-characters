const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    $('.characters-container .character-info').remove()
    charactersAPI.getFullList()
    .then((p)=>{showAll(p)})

  })

  $('#fetch-one').on('click', (e) => {
    $('.characters-container .character-info').remove()
    const myId = $('#character-id').val()
    charactersAPI.getOneRegister(myId).then((p)=>showOneCharacter(p))
  })

  $('#delete-one').on('click', (e) => {
    const myId = $('#character-id-delete').val()
    charactersAPI.deleteOneRegister(myId )
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    const myId = $('#edit-id').val()
    let myCharacter = {
      name : $('#edit-name').val(),
      occupation : $('#edit-occupation').val(),
      weapon : $('#edit-weapon').val(),
      debt : $('#edit-debt').val()
    }
      charactersAPI.updateOneRegister(myId, myCharacter)
})

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault()
    let characterInfo = {
      name : $('#new-name').val(),
      occupation : $('#new-occupation').val(),
      weapon : $('#new-weapon').val(),
      debt : $('#new-debt').val()
    }
    charactersAPI.createOneRegister(characterInfo)
    $('#send-data').css("background","green")
  })
})


function showOneCharacter(character){
  let chainfo = $('<div>').addClass('character-info')
  let divName = $('<div>').addClass('name').text(character.name)
  let divOccupation = $('<div>').addClass('occupation').text(character.occupation)
  let divDebt = $('<div>').addClass('debt').text(character.debt)
  let divWeapon = $('<div>').addClass('weapon').text(character.weapon)
  let divId = $('<div>').addClass('id').text(character.id)
  $(chainfo).append(divName).append(divOccupation).append(divDebt).append(divWeapon).append(divId)
  $('.characters-container').append(chainfo)
}

function showAll(arr){
  $('.character-info').remove()
  arr.forEach((e)=>{
    let chainfo = $('<div>').addClass('character-info')
    let divName = $('<div>').addClass('name').text(e.name)
    let divOccupation = $('<div>').addClass('occupation').text(e.occupation)
    let divDebt = $('<div>').addClass('debt').text(e.debt)
    let divWeapon = $('<div>').addClass('weapon').text(e.weapon)
    let divId = $('<div>').addClass('id').text(e.id)
    $(chainfo).append(divName).append(divOccupation).append(divDebt).append(divWeapon).append(divId)
    $('.characters-container').append(chainfo)

  })
}
