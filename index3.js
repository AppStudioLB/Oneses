const Searching = Search.prototype;

function Search(){
  this.keyword = document.querySelector('input[name = "search"]');
  this.engine = document.querySelector('.SelectSearch');
  this.button = document.querySelector('.img-button');
  this.form = document.querySelector('.search');

  let engine = this.engine.value;  
  let keyword = this.keyword.value;

  
  if(engine === 'google'){
      location.href = 'https://www.google.co.kr/search?q=' + keyword;
  }else if(engine === 'naver'){
      location.href = 'https://search.naver.com/search.naver?query=' + keyword;
  }
  
}
$.ajax({
  url: "http://stackoverflow.com",
  data: { uname: "test" },
  type: "GET",
  beforeSend: function(xhr){xhr.setRequestHeader('X-TOKEN', 'xxxxx');},
  success: function() { alert('Success!' + authHeader); }
});

or in this way,

$.ajax({
  url: "http://stackoverflow.com",
  data: { uname: "test" },
  type: "GET",
  headers:{ "X-TOKEN": 'xxxxx'},
  success: function() { alert('Success!' + authHeader); }
});
