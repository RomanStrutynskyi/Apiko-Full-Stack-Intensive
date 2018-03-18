export let Comment = {
  init(json){
   let commentWrap = document.createElement('div');
   commentWrap.className = "comment card";
   //
   let head = document.createElement('div');
   head.className = "comment__head card-header";
   // 
   let name = document.createElement('h5');
   name.className = "comment__name card-title";
   name.dataset.comment = json.id;
   name.innerHTML = json.name;
   // 
   let mail = document.createElement('a');
   mail.className = "comment__email card-subtitle text-muted ";
   mail.setAttribute('href', `mailto:${json.email}`);
   mail.innerHTML = json.email;
   //
   let body = document.createElement('div');
   body.className = "comment__body card-body";
   body.innerHTML = json.body;     
   //
   head.appendChild(name);
   head.appendChild(mail);
   commentWrap.appendChild(head);
   commentWrap.appendChild(body);
   return commentWrap;
 }


}